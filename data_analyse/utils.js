const octokitRest = require("@octokit/rest");

octoOptions = {};

// if (process.env.NODE_ENV === "development")
//     octoOptions

const github = octokitRest(octoOptions);

github.authenticate({
  type: "token",
  token: process.env.GITHUB_TOKEN
});

module.exports = {
  github
};
