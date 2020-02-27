import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	console.log("You'll find no errors here.. ");
	return (
		<div className="landing-page">
			<div className="second-border">
				<div className="landing-text">
					<h2>Gareth Beer</h2>
					<div className="typewriter">
						<h4 className="role">Front end software developer</h4>

						<h4 className="hobby">Adventurer</h4>

						<h4 className="person">All round good guy</h4>
					</div>
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
