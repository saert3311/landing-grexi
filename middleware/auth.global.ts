export default defineNuxtRouteMiddleware((to, from) => {
  const page_meta = to.meta ?? false;

  // check if we come from another page than root
  if (from.path !== "/" && to.path === "/thank-you") {
    return navigateTo("/");
  }

  if (page_meta.requiresAuth) {
    const { authenticated } = useUser();
    if (!authenticated) {
      return navigateTo("/login");
    }
  }
});