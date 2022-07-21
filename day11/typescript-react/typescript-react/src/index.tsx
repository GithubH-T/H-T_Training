
import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './components/FirstComponent'
import Orderforms from "./components/Orderforms";
import UserComponent from './components/UserComponent'
//import "./design.css";
ReactDOM.render(
    <div>
      <h1>Hello, Welcome to React and TypeScript</h1>
      <Orderforms></Orderforms>
      {/* <FirstComponent/>
      <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} /> */}
    </div>,
    document.getElementById("root")
);