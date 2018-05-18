import "./detail.scss";
import React from "react";

import { List } from "antd";
import { Tooltip, Progress } from "antd";

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { score } = this.props;
    return (
      <List bordered>
        <List.Item>
          <span>关注</span>
          <Tooltip title={score.follower_score.same_follower + "个相同关注"}>
            <Progress size="small" percent={score.following_score.score} format={x=>x}/>
          </Tooltip>
        </List.Item>
        <List.Item>
          <span>粉丝</span>
          <Tooltip title={score.follower_score.same_follower + "个相同粉丝"}>
            <Progress size="small" percent={score.follower_score.score} format={x=>x}/>
          </Tooltip>
        </List.Item>
        <List.Item>
          <span>语言</span>
          <Tooltip title="">
            <Progress size="small" percent={score.language_score.score} format={x=>x}/>
          </Tooltip>
        </List.Item>
        <List.Item>
          <span>收藏</span>
          <Tooltip title={score.star_score.same_star + "个相同收藏"}>
            <Progress size="small" percent={score.star_score.score} format={x=>x}/>
          </Tooltip>
        </List.Item>
      </List>
    );
  }
}

export default Detail;
