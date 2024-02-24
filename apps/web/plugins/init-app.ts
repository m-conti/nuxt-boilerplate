const initApp = async () => {

  if (!await new Promise((resolve) => { resolve(true); }))
    return false;

  return true;
};

export default defineNuxtPlugin({
  order: 20,
  setup: () => {
    appInitialized.value = initApp();
  },
});
