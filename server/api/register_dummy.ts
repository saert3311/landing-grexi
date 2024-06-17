export default defineEventHandler(async (event) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
        status: 200,
        body: {
            message: 'Contact added successfully'
        }
    };
})