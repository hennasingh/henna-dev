import React from "react";
import logo from "../assets/thumbnail.jpeg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import Menu from "./Menu";

export default function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu((prevMenu) => !prevMenu);
  };

  return (
    <header>
      <div className="header-container">
        <div>
          <img
            className="header-logo"
            src={logo}
            alt="thumbnail of henna singh"
          />
          <p>Henna Singh</p>
        </div>
        <div>
          {showMenu ? (
            <CgClose
              size={36}
              color="#EA035E"
              onClick={toggleMenu}
              className="close-menu"
            />
          ) : (
            <CgMenuRight
              size={36}
              color="#EA035E"
              onClick={toggleMenu}
              className="menu-right"
            />
          )}
          <Menu isActive={showMenu} hideMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
}
