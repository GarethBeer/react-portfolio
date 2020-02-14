import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route
					path="/"
					exact
					render={props => (
						<Fragment>
							<AboutMe />
							{/* <PhotoGallery photos={this.state.photos} /> */}
						</Fragment>
					)}
				/>

				<Route path="/Skills" component={Projects} />

				<Route path="/ContactMe" component={ContactMe} />
			</Switch>
		</div>
	);
};

export default App;
