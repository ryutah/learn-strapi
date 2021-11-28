const rest = require("../src/client").rest;

module.exports = async function () {
  // max number of records to fetch per query
  const recordsPerQuery = 100;
  // number of records to skip (start at 0)
  let recordsToSkip = 0;
  // do we make a query ?
  let makeNewQuery = true;
  // Blogposts array
  let categories = [];

  // make queries until makeNewQuery is set to false
  while (makeNewQuery) {
    // initiate fetch
    const resp = await rest.find("categories", {
      _start: recordsToSkip,
      _limit: 1000,
    });
    categories = categories.concat(resp);
    // prepare for next query
    recordsToSkip += recordsPerQuery;

    // stop querying if we are getting back less than the records we fetch per query
    if (resp.length < recordsPerQuery) {
      makeNewQuery = false;
    }
  }

  return categories;
};
