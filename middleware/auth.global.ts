export default defineNuxtRouteMiddleware((to, from) => {
    // check if we come from another page than root
    if (from.path !== '/' && to.path === '/thank-you') {
      return navigateTo('/')
    }
  })