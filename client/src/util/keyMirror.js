export default (obj, namespace = '') => {
  const ret = {};
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): First argument must be an object.');
  }
  Object.keys(obj).forEach((key) => {
    ret[key] = `${namespace ? `${namespace}:` : ''}${key}`;
  });
  return ret;
};
