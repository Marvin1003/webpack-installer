module.exports = (data, prefix) => {
  for(const key in data) {
    const tmp = data[key];
    delete data[key];
    data[`${prefix}${key}`] = tmp;
  }
}