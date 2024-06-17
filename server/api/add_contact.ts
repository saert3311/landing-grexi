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

    return {
        status: 200,
        body: {
            message: 'Contact added successfully'
        }
    }
})