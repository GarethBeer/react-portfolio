import React from "react";
import { Link } from "react-router-dom";
import "../styles/_NavBar.scss";

const Navbar = props => {
	const { sideBar, handleNavBar } = props;
	return (
		<nav className="nav-container">
			<Link to="/" className="logo" onClick={handleNavBar}>
				<h4>Gareth Beer </h4>
				<p>Software Developer. </p>
				<p>Design. Implement. Return.</p>
			</Link>
			<ul className={`navlinks ${sideBar ? "active" : ""}`}>
				<Link to="/About" className="links" onClick={handleNavBar}>
					About
				</Link>
				<Link to="/Skills" className="links" onClick={handleNavBar}>
					Skills
				</Link>
				<Link to="/Projects" className="links" onClick={handleNavBar}>
					Projects
				</Link>

				<Link to="/ContactMe" className="links" onClick={handleNavBar}>
					Contact Me
				</Link>
			</ul>
			<div className="burger" onClick={handleNavBar}>
				<div className={`line1 ${sideBar ? "active" : ""}`}></div>
				<div className={`line2 ${sideBar ? "active" : ""}`}></div>
				<div className={`line3 ${sideBar ? "active" : ""}`}></div>
			</div>
		</nav>
	);
};

export default Navbar;
