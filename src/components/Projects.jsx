import React from "react";
import dicePic from "../styles/images/diceGame.png";

const Skills = () => {
	return (
		<div className="projects">
			<h1>Projects</h1>
			<div>
				<h3>Vanilla JavaScript</h3>
				<p>
					This section are projects that I have completed using just vanilla
					javascript, HTML and CSS
				</p>
			</div>
			<div className="card">
				<div className="card-image">
					<img src={dicePic} alt="dice-game" />
				</div>
				<div className="card-header">
					<h5>Dice Game</h5>
				</div>
				<div className="card-text">
					<p>
						This Project was part of a Udemy JavaScript course, the aim was to
						build a dice game where you can click a button to roll the dice and
						the total is added together and makes up your score, the first to a
						total supplied by the user wins the game. There are certain
						conditions which will result in you losing all of your points and
						the go skips to the next person.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
