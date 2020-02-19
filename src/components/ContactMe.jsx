import React, { useState } from "react";
import "../styles/_ContactMe.scss";
import NavBar from "./NavBar";
import Climbing from "../styles/images/Climbing.jpeg";
import Hellvelyn from "../styles/images/Hellvellyn.jpg";
import Lake from "../styles/images/lake.JPG";
import axios from "axios";

const ContactMe = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
		message: ""
	});
	const resetForm = () => {
		setState({
			name: "",
			email: "",
			message: ""
		});
	};
	const onSubmit = e => {
		e.preventDefault();

		axios({
			method: "POST",
			url: "http://localhost:3002/send",
			data: state
		}).then(response => {
			if (response.data.status === "success") {
				alert("Message Sent");
				resetForm();
			} else if (response.data.status === "fail") {
				alert("message failed to send.");
			}
		});
	};
	return (
		<div>
			<NavBar />
			<div className="contactMeContainer">
				<div className="contactText">
					<div className="social-media">
						<div>
							<h1>Contact Me</h1>
						</div>
						<div className="contactLinks">
							<a
								className="icon-link"
								href="https://www.instagram.com/misterbeer89/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="fab fa-instagram"></span>
							</a>
							<h4>
								Feel free to take a look at my instagram however you will see a
								lot of this
								{"  "}
								<i className="fas fa-arrow-right"></i>
							</h4>
						</div>
						<div className="contactLinks">
							<a
								className="icon-link"
								href="http://www.linkedin.com/in/garethbeerjs"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="fab fa-linkedin-in"></span>
							</a>
							<h4>
								If you want to take a look at my work life head over to my
								Linkedin account or to contact me about any work send me a
								message below or on Linkinedin
							</h4>
						</div>
					</div>

					<div className="image-gallery">
						<div className="picture one">
							<img src={Hellvelyn} alt="mountain" className="pic-1" />
							<h4 className="text-1">
								<span className="fas fa-map-marked-alt"></span>
								{"  "}Hellvelyn - Lake District 19'
							</h4>
						</div>
						<div className="picture two">
							<img src={Climbing} alt="climbing" className="pic-2" />
							<h4 className="text-2">
								<span className="fas fa-map-marked-alt"></span>
								{"  "}Trevor Rocks - Llangollen 20'
							</h4>
						</div>
						<div className="picture three">
							<img src={Lake} alt="mountain" className="pic-3" />
							<h4 className="text-3">
								<span className="fas fa-map-marked-alt"></span>
								{"  "}Hellvelyn - Lake District 19'
							</h4>
						</div>
					</div>
				</div>

				<form className="form" onSubmit={onSubmit} method="POST">
					<div className="detailsContainer">
						<h2>Send me an Email ...</h2>
						<label htmlFor="name">Your Name</label>
						<input
							value={state.name}
							type="text"
							className="name"
							onChange={e =>
								setState({
									...state,
									name: e.target.value
								})
							}
							required
						/>
						<label htmlFor="email">Your Email Address</label>
						<input
							type="email"
							value={state.email}
							name="email"
							className="email"
							onChange={e =>
								setState({
									...state,
									email: e.target.value
								})
							}
							required
						/>
					</div>
					<div className="messageContainer">
						<label htmlFor="message">Your Message</label>
						<textarea
							value={state.message}
							name="message"
							cols="30"
							rows="10"
							className="message"
							onChange={e =>
								setState({
									...state,
									message: e.target.value
								})
							}
							required
						></textarea>
						<button type="submit">Send</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactMe;
