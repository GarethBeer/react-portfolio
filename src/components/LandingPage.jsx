import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="second-border">
				<div className="landing-text">
					<h1>Gareth Beer</h1>
					<h5>Software Developer</h5>
					<h6>Front-End and Back-End</h6>
				</div>
				<nav className="navigationContainer">
					<ul className="navigation-links">
						<Link to="/About" className="links">
							About
						</Link>
						<Link to="/Skills" className="links">
							Skills
						</Link>
						<Link to="/Projects" className="links">
							Projects
						</Link>

						<Link to="/ContactMe" className="links">
							Contact Me
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default LandingPage;
