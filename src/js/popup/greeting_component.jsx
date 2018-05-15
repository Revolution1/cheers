import React from "react";
import icon from "../../img/icon-128.png";
import { hot } from "react-hot-loader";
// const octokit = require("@octokit/rest")();
import GithubApi from "@octokit/rest"

const octokit = GithubApi()

class GreetingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: 0
    };
  }

  componentDidMount() {
    octokit.repos.getForUser({
      username: 'revolution1'
    }).then(data => {
      console.log(data);
      this.setState({repos: data.data.length })
    })
  }

  render() {
    return (
      <div>
        <p>Hello, find me on src/js/popup/greeting_component.jsx</p>
        <img src={icon} />
        <p> repos: {this.state.repos} </p>
      </div>
    );
  }
}

export default hot(module)(GreetingComponent);
