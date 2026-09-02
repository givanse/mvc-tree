// Read a property from a plain object or an Ember object (.get).
// Lives here so this package never imports Ember or DS.
export default function getProp(obj, key) {
  if (obj && typeof obj.get === 'function') {
    return obj.get(key);
  }
  return obj[key];
}
