import logo from "../../logo.svg";
import Clock from "../utils/Clock";

import "./Header.css";

const Header = () => (
  <header className="app-header">
    <div>
      <img src={logo} className="app-logo" alt="logo" />
    </div>
    <div className="title">React Rugby</div>
    <div className="clock">
      <Clock />
    </div>
  </header>
);

export default Header;
