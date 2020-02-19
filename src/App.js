import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

import "./App.scss";
import LandingPage from "./components/LandingPage";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/About" exact component={AboutMe} />
				<Route path="/Skills" component={Skills} />
				<Route path="/Projects" component={Projects} />

				<Route path="/ContactMe" component={ContactMe} />
			</Switch>
		</div>
	);
};

export default App;
