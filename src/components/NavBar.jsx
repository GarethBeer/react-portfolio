import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/_NavBar.scss";

class Navbar extends Component {
	state = {
		sideBar: false
	};

	handleNavBar = () => {
		if (this.state.sideBar) {
			this.setState({
				sideBar: false
			});
		} else {
			this.setState({
				sideBar: true
			});
		}
	};
	logo = "{Gareth Dev}";
	render() {
		const { sideBar } = this.state;
		return (
			<nav className="nav-container">
				<div className="logo">{this.logo}</div>
				<ul className={`navlinks ${sideBar ? "active" : ""}`}>
					<Link to="/" className="links" onClick={this.handleNavBar}>
						About
					</Link>
					<Link to="/Skills" className="links" onClick={this.handleNavBar}>
						Skills
					</Link>

					<Link to="/ContactMe" className="links" onClick={this.handleNavBar}>
						Contact Me
					</Link>
				</ul>
				<div className="burger" onClick={this.handleNavBar}>
					<div className={`line1 ${sideBar ? "active" : ""}`}></div>
					<div className={`line2 ${sideBar ? "active" : ""}`}></div>
					<div className={`line3 ${sideBar ? "active" : ""}`}></div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
