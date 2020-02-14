import React from "react";
import Skills from "./Skills";

import hothamPic from "../styles/images/mehotham copy.jpg";

const AboutMe = () => {
	return (
		<div>
			<section className="aboutMeContainer">
				<div className="about-container">
					<div className="profile-img">
						<img src={hothamPic} alt="me at hotham ski resort" />
					</div>
					<div className="about-details">
						<div className="about-heading">
							<h1>About</h1>
							<h6>Myself</h6>
						</div>
						<p>
							I have a passion for IT and have from an early age but have never
							done anything with it, I have always been fairly technically
							minded and enjoyed tinkering on computers as well as taking them
							apart just for the sake of it. Having spent evenings completing
							challenges on codeacademy and freecodecamp I thought it was time
							to put my money where my mouth is and prove to myself and others
							that I can do this for real. That is why I decided to take the
							plunge and book on the MCR codes software engineering fastrack
							course because it would give me the push to turn a geniune
							interest and passion into a career.
						</p>
						<p>
							My dream would be to work within the snow sports or the adventure
							tourism industry as a developer so that I could combine my two
						</p>
						<div className="social-media">
							<ul className="social-list">
								<li>
									<a
										className="icon-link"
										href="https://www.instagram.com/misterbeer89/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="fab fa-instagram"></span>
									</a>
								</li>
								<li>
									<a
										className="icon-link"
										href="https://github.com/GarethBeer"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="fab fa-github"></span>
									</a>
								</li>
								<li>
									<a
										className="icon-link"
										href="https://www.freecodecamp.org/gareth.beer"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="fab fa-free-code-camp"></span>
									</a>
								</li>
								<li>
									<a
										className="icon-link"
										href="http://www.linkedin.com/in/garethbeerjs"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="fab fa-linkedin-in"></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Skills />
		</div>
	);
};

export default AboutMe;
