export const imgFormat = (val) => {
  return decodeURIComponent(val).replace(/\/agent\//, '');
}