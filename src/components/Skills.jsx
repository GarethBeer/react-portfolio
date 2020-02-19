import React from "react";
import NavBar from "./NavBar";

const Skills = props => {
	return (
		<header>
			<NavBar />
			<section className="skills">
				<div className="container">
					<div className="my-skills">
						<div className="skill html">
							<div className="icon-container ">
								<span className="fas fa-code"></span>
							</div>
							<h1>HTML5</h1>
							{/* <p>I can write semantic and accesssible HTML and </p> */}
						</div>

						<div className="skill css">
							<div className="icon-container ">
								<span className="fab fa-css3-alt"></span>
							</div>
							<h1>CSS3</h1>
							{/* <p>
							I can write functional and object orientated programming and I am
							upto date with ES6 practices
						</p> */}
						</div>

						<div className="skill sass">
							<div className="icon-container ">
								<span className="fab fa-sass"></span>
							</div>
							<h1>Sass</h1>
							{/* <p>
							I can write functional and object orientated programming and I am
							upto date with ES6 practices
						</p> */}
						</div>

						<div className="skill js">
							<div className="icon-container ">
								<span className="fab fa-js-square"></span>
							</div>
							<h1>JavaScript</h1>
							{/* <p>
							I can write functional and object orientated programming and I am
							upto date with ES6 practices
						</p> */}
						</div>

						<div className="skill react">
							<div className="icon-container ">
								<span className="fab fa-react"></span>
							</div>
							<h1>React</h1>
							{/* <p>
							I can build single page applications using both classes and hooks,
							using state and context and a variety of styling options
						</p> */}
						</div>
						<div className="skill node">
							<div className="icon-container ">
								<span className="fab fa-node"></span>
							</div>
							<h1>Node</h1>
							{/* <p>
							Using Node.JS and Express.Js I can build API's interacting with
							mongoDb databases
						</p> */}
						</div>
					</div>
				</div>
			</section>
		</header>
	);
};

Skills.propTypes = {};

export default Skills;
