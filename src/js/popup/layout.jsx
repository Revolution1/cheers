import "./layout.scss";
import React from "react";

import data from "./mockdata";

import User from "./user/user";
import Cheer from "./analyses/cheer";

import { getUser } from "../api";
import { currentUser } from "../utils";

class PopLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      user: {}
    };
  }

  componentDidMount() {
    currentUser(name =>
      getUser(name).then(res => this.setState({ user: res.data, login: name }))
    );
  }

  render() {
    const { user, login } = this.state;
    return (
      <div className="main-layout">
        <div className="header">
          <User user={user} login={login}/>
        </div>
        <div className="content">
          <Cheer login={login} />
        </div>
        <div className="footer">
          <span>Cheers, meet up friends in Github</span>
        </div>
      </div>
    );
  }
}

export default PopLayout;
