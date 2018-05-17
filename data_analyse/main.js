util = require("./utils");

util.github.orgs.getMembers(
  {
    org: "daocloud",
    per_page: 100
  },
  console.log
);
