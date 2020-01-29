import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header-container">
    <Link to='/' className='header-link'>
      <h1>ross mini</h1>
    </Link>
  </div>
);

export default Header;
