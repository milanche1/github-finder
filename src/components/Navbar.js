import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  const { icon, title } = props;
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "default Title",
  icon: "default icon"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;