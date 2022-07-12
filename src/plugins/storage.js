const setItemOrigin = Storage.prototype.setItem
Storage.prototype.setItem = function iosIsIE(key, value) {
  try {
    setItemOrigin.call(this, key, value)
  } catch (e) {
  //  天要下雨
  }
}
const getStorage = (storageType) => ({

  set(key, value) {
    try {
      window[storageType].setItem(key, JSON.stringify({
        data: value
      }));
    } catch (e) {
      if (storageType === 'localStorage') {
        window[storageType].clear();
      }
    }
    return this;
  },
  get(key) {
    return (JSON.parse(window[storageType].getItem(key)) || {}).data;
  },
  remove(key) {
    window[storageType].removeItem(key);
    return this;
  },
  clear() {
    window[storageType].clear();
  },
  kill(k_id) {
    const id = this.get('k_id');
    if (id !== k_id) {
      this.clear();
      this.set('k_id', k_id);
    }
  },
  got(key) {
    const result = this.get(key)
    this.remove(key)
    return result
  }
});
window.$ls = getStorage('localStorage');
window.$ss = getStorage('sessionStorage');
export default (Vue) => {
  Vue.prototype.$ls = getStorage('localStorage');
  Vue.prototype.$ss = getStorage('sessionStorage');
};
