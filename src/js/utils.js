import axios from "axios";
const octokitRest = require("@octokit/rest");

let octoOptions = {};

// if (process.env.NODE_ENV === "development")
//     octoOptions

const github = octokitRest(octoOptions);

// github.authenticate({
//   type: "token",
//   token: process.env.GITHUB_TOKEN
// });

axios.defaults.baseURL = "http://10.8.0.108:5000";

const currentUser = cb => {
  if (!chrome || !chrome.tabs) cb("revolution1");
  chrome.tabs.getAllInWindow(tabs => {
    console.log(tabs);
    let active = tabs.filter(tab => tab.active)[0];
    cb(active.url.split("/").splice(-1));
  });
};

export { axios as http, github, currentUser };
