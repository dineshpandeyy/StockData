import React from 'react';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">FUTURE WATCH</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/marketprediction">MARKET PREDICTION</Link></li>
        <li><Link to="/watchlist">WATCHLIST</Link></li>
        <li><Link to="/news">NEWS</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/signin">SIGN IN</Link></li>
        <li><Link to="/signup">SIGN UP</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
