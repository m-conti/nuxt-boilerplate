export default defineNuxtRouteMiddleware(async () => {
  if (!await appInitialized.value)
    return abortNavigation('error.common');
});
