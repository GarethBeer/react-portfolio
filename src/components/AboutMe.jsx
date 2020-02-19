import React, { Component } from "react";
import NavBar from "./NavBar";
import Hotham from "../styles/images/hotham.JPG";

class AboutMe extends Component {
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
	render() {
		return (
			<div>
				<NavBar handleNavBar={this.handleNavBar} sideBar={this.state.sideBar} />
				<section className="aboutMeContainer">
					<div className="about-container">
						<div className="profile-img">
							<img src={Hotham} alt="me at hotham ski resort" />
						</div>
						<div className="about-details">
							<div className="about-heading">
								<h1>About</h1>
								<h6>Myself</h6>
							</div>
							<p>
								I have a passion for creating a fantastic user experience with
								whatever it is I develop. I like to work across the full stack
								using JavaScript as the main programming language. On the
								frontend I prefer to use the JavaScript library React. I find
								that it produces clean modular code which is reusable and easier
								to maintain allowing for greater productivity. For the backend I
								use Node with Express and Mongoose with MongoDb.
							</p>
							<p>
								Please have a look through my website, it's been created using
								React and Sass. If you like what you see and want to get in
								touch to discuss working together please head over to the
								contact me page or catch me on Linkedin.
							</p>
							<p>
								Feel free to check out my GitHub to look at what I am currently
								working on.
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
			</div>
		);
	}
}

export default AboutMe;
