import React, { useState } from "react";

const Projects = props => {
	const [state, setButtons] = useState({
		active: "",
		Fstyle: "frontEnd",
		Bstyle: "backEnd"
	});

	let frontEnd;
	let backEnd;
	let Fstyle;
	let Bstyle;

	if (state.active === "frontEnd") {
		frontEnd = (
			<div className="projects">
				<div className="card">
					<div className="card-image">
						<img
							src="https://oi350.photobucket.com/albums/q408/garethbeer1989/diceGame_zps4jlktclu.png"
							alt="dice-game"
						/>
					</div>
					<div className="card-header">
						<h5>Dice Game</h5>
					</div>
					<div className="card-text">
						<p>
							This Project was part of a Udemy JavaScript course, the aim was to
							build a dice game where you can click a button to roll the dice
							and the total is added together and makes up your score, the first
							to a total supplied by the user wins the game. There are certain
							conditions which will result in you losing all of your points and
							the go skips to the next person.
						</p>
					</div>
					<div className="card-buttons">
						<a href="https://github.com/GarethBeer/React--surrreal-estate">
							<button>GitHub</button>
						</a>
						<a href="https://github.com/GarethBeer/React--surrreal-estate">
							<button>Live Demo</button>
						</a>
					</div>
				</div>
				<div className="card">
					<div className="card-image">
						<img
							src="https://oi350.photobucket.com/albums/q408/garethbeer1989/Screenshot%202020-02-15%20at%2021.47.18_zpspxhagdty.png"
							alt="surreal estates"
						/>
					</div>
					<div className="card-header">
						<h5>Surreal Estates</h5>
					</div>
					<div className="card-text">
						<p>
							This Project was part of my time at Manchester Codes. The task was
							to create a real estate website using react which allows a user to
							log in with their facebook account and view properties and save
							their favourites. The user can also add properties to the
							database.
						</p>
					</div>
					<div className="card-buttons">
						<button>GitHub</button>
						<button>Live Demo</button>
					</div>
				</div>
			</div>
		);

		Fstyle = state.Fstyle;
	}

	if (state.active === "backEnd") {
		backEnd = (
			<div className="projects back">
				<div className="project-card"></div>
				<div>Hello enemies</div>
			</div>
		);
		Bstyle = state.Bstyle;
	}
	return (
		<section className="project-page">
			<div className="projects-tab">
				<button
					onClick={() =>
						setButtons({
							active: "frontEnd",
							Fstyle: "clicked"
						})
					}
					className={Fstyle}
				>
					FrontEnd
				</button>
				<button
					onClick={() =>
						setButtons({
							active: "backEnd",
							Bstyle: "clicked"
						})
					}
					className={Bstyle}
				>
					BackEnd
				</button>
			</div>
			<div>
				<div>{frontEnd}</div>
				<div>{backEnd}</div>
			</div>
		</section>
	);
};

export default Projects;
