import React, { useState } from "react";
import Navbar from "./NavBar";
import DiceGame from "../styles/images/DiceGame.PNG";
import WeatherApp from "../styles/images/WeatherApp.PNG";
import SurrealEstate from "../styles/images/SurrealEstate.PNG";

const Projects = props => {
	const [state, setButtons] = useState({
		active: "frontEnd",
		Fstyle: "clicked",
		Bstyle: ""
	});

	let frontEnd;
	let backEnd;

	if (state.active === "frontEnd") {
		frontEnd = (
			<div className="projects">
				<div className="card">
					<div className="card-image">
						<img src={DiceGame} alt="dice-game" />
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
						<a
							href="https://github.com/GarethBeer/React--surrreal-estate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>GitHub</button>
						</a>
						<a
							href="https://github.com/GarethBeer/React--surrreal-estate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>Live Demo</button>
						</a>
					</div>
				</div>
				<div className="card">
					<div className="card-image">
						<img src={SurrealEstate} alt="surreal estates" />
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
						<a
							href="https://github.com/GarethBeer/React--surrreal-estate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>GitHub</button>
						</a>
						<a
							href="https://github.com/GarethBeer/React--surrreal-estate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>Live Demo</button>
						</a>
					</div>
				</div>
				<div className="card">
					<div className="card-image">
						<img src={WeatherApp} alt="Weather App" />
					</div>
					<div className="card-header">
						<h5>Weather App</h5>
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
						<a
							href="https://github.com/GarethBeer/WeatherApp"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>GitHub</button>
						</a>
						<a
							href="https://weather-app-xi.now.sh/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>Live Demo</button>
						</a>
					</div>
				</div>
			</div>
		);
	}

	if (state.active === "backEnd") {
		backEnd = (
			<div className="projects back">
				<div className="card">
					<div className="card-image">
						<img
							src="https://cdn.aarp.net/content/dam/aarp/entertainment/music/2018/02/1140-swedish-clean-your-record-collection-01.imgcache.rev4eaf23c646379baa9401d97184efc01b.jpg"
							alt="music collection"
						/>
					</div>
					<div className="card-header">
						<h5>Music-API</h5>
					</div>
					<div className="card-text">
						<p>
							This Project was part of my time at Manchester Codes. The task was
							to build a Music Library API. It stores information about artists,
							albums and songs. It implements a CRUD REST API to interact with a
							MongoDB database.
						</p>
					</div>
					<div className="card-buttons">
						<a
							href="https://github.com/GarethBeer/music-api"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>GitHub</button>
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer">
							<button>Live Demo</button>
						</a>
					</div>
				</div>
				<div className="card">
					<div className="card-image">
						<img
							src="https://angelusnews.com/system/images/W1siZiIsIjIwMTkvMDQvMjkvNm05cnU2cnp0el9Cb29rX2NvbGxlY3Rpb24uanBnIl0sWyJwIiwidGh1bWIiLCIxNDAweCJdXQ/image.jpg"
							alt="book collection"
						/>
					</div>
					<div className="card-header">
						<h5>Library-API</h5>
					</div>
					<div className="card-text">
						<p>
							This Project was part of my time at Manchester Codes. The task was
							to build a Library API. It allows users to create accounts, list
							books and request to loan other users books.
						</p>
					</div>

					<div className="card-buttons">
						<a
							href="https://github.com/GarethBeer/library-api"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>GitHub</button>
						</a>
						<a
							href="https://github.com/GarethBeer/React--surrreal-estate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>Live Demo</button>
						</a>
					</div>
				</div>
			</div>
		);
	} //
	return (
		<div>
			<Navbar />
			<section className="project-page">
				<div className="projects-tab">
					<button
						onClick={() =>
							setButtons({
								active: "frontEnd",
								Fstyle: "clicked",
								Bstyle: ""
							})
						}
						className={state.Fstyle}
					>
						FrontEnd
					</button>
					<button
						onClick={() =>
							setButtons({
								active: "backEnd",
								Fstyle: "",
								Bstyle: "clicked"
							})
						}
						className={state.Bstyle}
					>
						BackEnd
					</button>
				</div>
				<div>
					<div>{frontEnd}</div>
					<div>{backEnd}</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
