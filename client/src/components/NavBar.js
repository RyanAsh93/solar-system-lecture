import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Link to="/demo">
        <Menu.Item>Components Demo</Menu.Item>
      </Link>
      <Link to="/products">
        <Menu.Item>Products</Menu.Item>
      </Link>
      <Link to="/solarSystems">
        <Menu.Item>Solar Systems</Menu.Item>
      </Link>
    </Menu>
  );
};

export default NavBar;
