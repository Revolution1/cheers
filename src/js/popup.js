import "@/css/popup.css";
// import Greeting from "./popup/greeting_component.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import PopLayout from "./popup/layout";
import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import 'antd/dist/antd.css'

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <PopLayout />
      </LocaleProvider>
    );
  }
}

render(<App />, window.document.getElementById("app-container"));
