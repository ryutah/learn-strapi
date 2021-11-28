const axios = require("axios");

module.exports = {
  async find(resource) {
    try {
      const resp = await axios.get(`http://localhost:1337/${resource}`);
      return resp.data;
    } catch (err) {
      throw new Error(err);
    }
  },
};
