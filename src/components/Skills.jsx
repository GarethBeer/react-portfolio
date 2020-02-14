import React from "react";

import PropTypes from "prop-types";

const Skills = props => {
	return (
		<section className="skills">
			<div className="container">
				<div className="section-heading">
					<h1>Skills</h1>
					<h6>What I can do</h6>
				</div>

				<div className="my-skills">
					<div className="skill html">
						<div className="icon-container html">
							<span className="fas fa-code"></span>
						</div>
						<h1>HTML5</h1>
						<p>I can write semantic and accesssible HTML and </p>
					</div>

					<div className="skill ">
						<div className="icon-container css">
							<span className="fab fa-css3-alt"></span>
						</div>
						<h1>CSS3</h1>
						<p>
							I can write functional and object orientated programming and I am
							upto date with ES6 practices
						</p>
					</div>

					<div className="skill ">
						<div className="icon-container sass">
							<span className="fab fa-sass"></span>
						</div>
						<h1>Sass</h1>
						<p>
							I can write functional and object orientated programming and I am
							upto date with ES6 practices
						</p>
					</div>

					<div className="skill ">
						<div className="icon-container js">
							<span className="fab fa-js-square"></span>
						</div>
						<h1>JavaScript</h1>
						<p>
							I can write functional and object orientated programming and I am
							upto date with ES6 practices
						</p>
					</div>

					<div className="skill ">
						<div className="icon-container react">
							<span className="fab fa-react"></span>
						</div>
						<h1>React</h1>
						<p>
							I can build single page applications using both classes and hooks,
							using state and context and a variety of styling options
						</p>
					</div>
					<div className="skill ">
						<div className="icon-container node">
							<span className="fab fa-node"></span>
						</div>
						<h1>Node</h1>
						<p>
							Using Node.JS and Express.Js I can build API's interacting with
							mongoDb databases
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

Skills.propTypes = {};

export default Skills;
