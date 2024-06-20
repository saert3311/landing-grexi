export default defineEventHandler(async (event) => {
    const body_data = await readBody(event)
    if (!body_data) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Empty request'
        })
    }
    if (!body_data.token) {
        throw createError({
            statusCode: 422,
            statusMessage: 'Token is required'
        })
    }
    const turnstile_validation = await verifyTurnstileToken(body_data.token)

    if (!turnstile_validation.success) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid Captcha'
        })
    }

    const name_array = body_data.register_name.split(' ')
    const first_name = name_array[0]
    const last_name = name_array.slice(1).join(' ')

    const contact_options = {
        method: 'POST',
        headers: {
            accept: 'application/json', 
            'content-type': 'application/json',
            'api-key': process.env.BREVO_API_KEY
        },
        body: JSON.stringify({
          attributes: {COUNTRY: body_data.register_country.es_name, 
                        NOMBRE: first_name, 
                        APELLIDOS: last_name, 
                        WHATSAPP: body_data.register_phone},
          updateEnabled: false,
          email: body_data.register_email,
          listIds: [12]
        })
      };

    const email_options = {
        method: 'POST',
        headers: {
            accept: 'application/json', 
            'content-type': 'application/json', 
            'api-key': process.env.BREVO_API_KEY
        },
        body: JSON.stringify({
            params: {"NOMBRE": first_name, "EMAIL": body_data.register_email}, 
            templateId: 20,
            to: [{email: body_data.register_email, name: body_data.register_name}]
        })
      };
      
    const contact_response = await fetch('https://api.brevo.com/v3/contacts', contact_options)

    if (!contact_response.ok) {
        const contact_result = await contact_response.json()
        throw createError({
            statusCode: 400,
            statusMessage: contact_result.message
        })
    }

    const email_result = await fetch('https://api.brevo.com/v3/smtp/email', email_options)
    
    if (!email_result.ok) {
        const email_response = await email_result.json()
        throw createError({
            statusCode: 400,
            statusMessage: email_response.message
        })
    }

    return {
        status: 200,
        body: {
            message: 'Contact added successfully'
        }
    }
})