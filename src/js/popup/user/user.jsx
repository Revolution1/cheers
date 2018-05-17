import "./user.scss";
import React from "react";
import { Row, Col } from "antd";

const User = props => {
  const user = props.user;
  return (
    <div className="user">
      <div className="avatar">
        <img src={user.avatar_url} />
      </div>
      <div className="content">
        <div className="name">{user.name}</div>
        <div className="login">{user.login}</div>
        <div className="bio">{user.bio}</div>
        <div className="counts">
          <Row>
            <Col span={12}>
              <div>Followers: {user.followers}</div>
            </Col>
            <Col span={12}>
              <div>Following: {user.following}</div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <span>Repositories: {user.public_repos}</span>
            </Col>
            <Col span={12}>
              <span>Stars: {props.starred.length}</span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default User;
