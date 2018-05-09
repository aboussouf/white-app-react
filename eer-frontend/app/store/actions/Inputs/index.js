
export function inputChange(value, key) {
  const [store, ...storeKey] = key.split('.');
  return {
    type: 'ON_CHANGE',
    store,
    key: storeKey,
    newValue: value,
  };
}
