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
        <div className="login">{props.login}</div>
        <div className="bio">{user.bio}</div>
        <div className="counts">
          <Row>
            <Col span={12}>
              <div>粉丝: {user.followers}</div>
            </Col>
            <Col span={12}>
              <div>关注: {user.following}</div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <span>项目: {user.repo}</span>
            </Col>
            <Col span={12}>
              <span>收藏: {user.stars}</span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default User;
