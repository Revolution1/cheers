import "./layout.scss";
import React from "react";

import User from "./user/user";
import data from "./mockdata";

const PopLayout = props => {
  const sayHi = event => alert("Hello World");
  return (
    <div className="main-layout">
      <div className="header">
        <User user={data.user} starred={data.starred} />
      </div>
      <div className="content">content</div>
      <div className="footer">footer</div>
    </div>
  );
};

export default PopLayout;
