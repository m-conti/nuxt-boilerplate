
const portalsName = ref<string[]>([]);

export const addPortal = (name: string) => { portalsName.value = [ ...portalsName.value, name ]; };
export const onPortalMounted = (name: string, callback: Function) => {
  watchUntil(portalsName, (names) => (names.includes(name)), { immediate: true }).then(() => callback());
};
export const usePortalMounted = (name: string) => {
  const isMounted = ref(false);
  onPortalMounted(name, () => { isMounted.value = true; });
  return isMounted;
};
