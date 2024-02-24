const initApp = async () => {

  if (!await deviceInitialized.value)
    return false;

  return true;
};

export default defineNuxtPlugin({
  order: 20,
  setup: () => {
    appInitialized.value = initApp();
  },
});
