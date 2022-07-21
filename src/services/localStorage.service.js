const LocalStorageService = {
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),

  clear: () => localStorage.clear(),

  remove: (key) => localStorage.removeItem(key),

  get: (key) => JSON.parse(localStorage.getItem(key)),
};

export default LocalStorageService;
