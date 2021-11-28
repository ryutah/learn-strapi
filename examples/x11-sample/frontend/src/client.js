const axios = require("axios");

const apiHost = "http://localhost:1337";

module.exports = {
  rest: {
    async find(resource, queries) {
      try {
        const resp = await axios.get(`${apiHost}/${resource}?${serializeToQuery(queries)}`);
        return resp.data;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  async graphql(query) {
    try {
      const reqp = await axios.post(`${apiHost}/graphql`, {
        query: query,
      });
      return resp.data.data;
    } catch (err) {
      throw new Error(err);
    }
  },
};

const serializeToQuery = function (obj) {
  let str = [];
  for (const key in obj)
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  return str.join("&");
}
