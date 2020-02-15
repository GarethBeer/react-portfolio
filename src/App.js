import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact component={AboutMe} />
				<Route path="/Skills" component={Skills} />
				<Route path="/Projects" component={Projects} />

				<Route path="/ContactMe" component={ContactMe} />
			</Switch>
		</div>
	);
};

export default App;
