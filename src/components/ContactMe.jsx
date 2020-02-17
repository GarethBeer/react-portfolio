import React from "react";
import "../styles/_ContactMe.scss";

const ContactMe = () => {
	return (
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
							Linkedin account or to contact me about any work send me a message
							below or on Linkinedin
						</h4>
					</div>
				</div>

				<div className="image-gallery">
					<div className="picture">
						<img
							src="https://oi350.photobucket.com/albums/q408/garethbeer1989/hiking-10_zpsbhwe5oui.jpg"
							alt="mountain"
							className="pic-1"
						/>
						<h4 className="text-1">
							<span className="fas fa-map-marked-alt"></span>
							{"  "}Hellvelyn - Lake District 19'
						</h4>
					</div>
					<div className="picture">
						<img
							src="https://oi350.photobucket.com/albums/q408/garethbeer1989/hiking-3_zps0aur2sao.jpg"
							alt="group on mountain"
							className="pic-1"
						/>
						<h4 className="text-1">
							<span className="fas fa-map-marked-alt"></span>
							{"  "}Hellvelyn - Lake District 19'
						</h4>
					</div>
					<div className="picture">
						<img
							src="https://oi350.photobucket.com/albums/q408/garethbeer1989/hiking-9_zpspgiootob.jpg"
							alt="mountain"
							className="pic-1"
						/>
						<h4 className="text-1">
							<span className="fas fa-map-marked-alt"></span>
							{"  "}Hellvelyn - Lake District 19'
						</h4>
					</div>
				</div>
			</div>

			<form action="Submit" className="form">
				<div className="detailsContainer">
					<h2>Send me an Email ...</h2>
					<label htmlFor="name">Your Name</label>
					<input type="text" className="name" />
					<label htmlFor="email">Your Email Address</label>
					<input type="email" name="email" className="email" />
				</div>
				<div className="messageContainer">
					<label htmlFor="message">Your Message</label>
					<textarea
						name="message"
						cols="30"
						rows="10"
						className="message"
						required
					></textarea>
					<button type="submit">Send</button>
				</div>
			</form>
		</div>
	);
};

export default ContactMe;
