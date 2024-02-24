export const onInitApp = (action: () => void) => appInitialized.value?.then((value) => { if (value) action(); });
