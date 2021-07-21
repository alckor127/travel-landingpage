const storage = {};

try {
  if (!window.localStorage) throw Error("No local storage");
  // Setup simple local storage wrapper
  storage.set = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));
  storage.get = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  storage.remove = (key) => localStorage.removeItem(key);
} catch (err) {
  throw Error(err.message);
}

export default storage;
