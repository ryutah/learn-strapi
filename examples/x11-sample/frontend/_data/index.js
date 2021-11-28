const client = require("../src/client");

module.exports = async function () {
  return client.rest.find("top");
};
