import logo from "../../logo.svg";
import Clock from "../utils/Clock";
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex mx-1 app-header">
      <div className="mt-1">
        <img src={logo} className="app-logo" alt="logo" />
      </div>
      <div className="mt-2">React Rugby</div>
      <div className="clock mt-2">
        <Clock />
      </div>
    </header>
  );
};

export default Header;
