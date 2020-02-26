import React, { useState } from "react";
import Navbar from "./NavBar";
import DiceGame from "../styles/images/DiceGame.PNG";
import WeatherApp from "../styles/images/WeatherApp.PNG";
import SurrealEstate from "../styles/images/SurrealEstate.PNG";
import Fave from "../styles/images/fave.png";
import AddProp from "../styles/images/addprop.png";
import WeatherClear from "../styles/images/WeatherClear.png";
import WeatherMobile from "../styles/images/weatherMobile.png";
import dice1 from "../styles/images/dice1.png";
import dice2 from "../styles/images/dice2.png";

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
					<img src={AddProp} alt="surreal estates" />
					<img src={SurrealEstate} alt="surreal estates" />

					<img src={Fave} alt="surreal estates" />

					<div className="card-header">
						<h5>Surreal Estates</h5>
					</div>
					<div className="card-text">
						<h5>Task</h5>
						<p>
							To create a real estate website using React which allows a user to
							view and add properties to the database, the user should be able
							to log in with their facebook account and save their favourites.
						</p>
						<h5>How it went</h5>
						<p>
							I found this project very interesting as it required me to plan a
							component tree, where to hold state, how to use react-router to
							allow switching between components and the use of axios in sending
							and retrieving data from a database as well as helping me improve
							my SASS skills
						</p>
						<div className="tools">
							<h5>Skills used</h5>
							<ul>
								<li>
									<span className="fab fa-js-square"></span>
								</li>
								<li>
									<span className="fab fa-react"></span>
								</li>
								<li>
									<span className="fab fa-sass"></span>
								</li>
								<li>Axios</li>
							</ul>
						</div>
					</div>
					<div className="card-buttons">
						<a
							href="https://github.com/GarethBeer/React--surrreal-estate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>GitHub</button>
						</a>
					</div>
				</div>
				<div className="card">
					<img src={WeatherApp} alt="Weather App" />
					<img src={WeatherClear} alt="Weather App" />
					<img src={WeatherMobile} alt="Weather App" />

					<div className="card-header">
						<h5>Weather App</h5>
					</div>
					<div className="card-text">
						<h5>Task</h5>
						<p>
							To create a weather application using React which allows a user to
							input a city to view a live 5 day weather forecast.
						</p>
						<h5>How it went</h5>
						<p>
							This was my first React project I worked on. I found it very
							interesting and enjoyed working with React due to its modular
							reusable code. Getting to grips with interacting with an api and
							how to use data retrieved.
						</p>

						<div className="tools">
							<h5>Skills used</h5>
							<ul>
								<li>
									<span className="fab fa-js-square"></span>
								</li>
								<li>
									<span className="fab fa-react"></span>
								</li>
								<li>
									<span className="fab fa-css3-alt"></span>
								</li>
								<li>Axios</li>
							</ul>
						</div>
					</div>
					<div className="card-buttons">
						<div className="weather">
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
				<div className="card">
					<img className="card-image1" src={dice1} alt="dice-game" />
					<img className="card-image2" src={dice2} alt="dice-game" />
					<img className="card-image3" src={DiceGame} alt="dice-game" />

					<div className="card-header">
						<h5>Dice Game</h5>
					</div>
					<div className="card-text">
						<h5>Task</h5>
						<p>
							This Project was part of a Udemy JavaScript course, the aim was to
							build a dice game where you can click to roll two dice and the
							total number of both dice added together makes up your score, the
							first to a total supplied by the user wins the game. There should
							be certain conditions which will result in losing all of your
							points and missing a go.
						</p>
						<h5>How it went</h5>
						<p>
							This was my first real JavaScript feature I made, it was very
							useful in helping me understand JavaScript in a real world
							application rather than in code snippets on CodeAcademy and
							FreeCodeCamp
						</p>
						<div className="tools">
							<h5>Skills used</h5>
							<ul>
								<li>
									<span className="fas fa-code"></span>
								</li>
								<li>
									<span className="fab fa-js-square"></span>
								</li>
								<li>
									<span className="fab fa-css3-alt"></span>
								</li>
							</ul>
						</div>
					</div>
					<div className="card-buttons">
						<a
							href="https://github.com/GarethBeer/React--surrreal-estate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>GitHub</button>
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
						{/* <a
							href="https://github.com/GarethBeer/music-api"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>Live Demo</button>
						</a> */}
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
						{/* <a
							href="https://github.com/GarethBeer/React--surrreal-estate"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>Live Demo</button>
						</a> */}
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
