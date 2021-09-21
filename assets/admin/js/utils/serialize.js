const serialize = (object, prefix) => {
  const string = [];

  for (let p in object) {
    if (object.hasOwnProperty(p)) {
      const key = prefix ? `${prefix}[${p}]` : p;
      const val = object[p];

      string.push(
        val !== null && typeof val === "object"
          ? serialize(val, key)
          : `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
      );
    }
  }

  return string.join("&");
};

export default serialize;
