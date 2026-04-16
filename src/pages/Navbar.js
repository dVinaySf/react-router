import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textdecoration: isActive ? "none" : "underline",
    backgroundColor: isActive ? "black" : "",
    color: isActive ? "white" : "",
    padding: isActive ? "4px 8px" : "0px",
    borderRadius: isActive ? "4px" : "",
  });

  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      {/* 
      -Starts with the "/" 
      -Always navigate from the root of the app, regardless of current url
      */}
      <NavLink to="/products" style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to="/users" style={navLinkStyles}>
        Users
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      {/* <NavLink to="/contact" style={navLinkStyles}>
        Contact
      </NavLink> */}
    </nav>
  );
};
