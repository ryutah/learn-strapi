const client = require("../src/client");

module.exports = async function () {
  return client.find("top");
};
