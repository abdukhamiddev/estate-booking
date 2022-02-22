import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../components/Contact/ContactForm";
import "./contact.scss";
const Contact = () => {
	return (
		<motion.div
			className="contact-us"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="contact-us__content">
				<h1>Get in Touch</h1>
				<p>
					Do you have any questions regarding booking? Are you property owner
					who wants to be listed?
				</p>
				<h2 className="heading-sub">Phone</h2>
				<p>
					Due to COVID-19,our team is working remotely.Please email us, and
					we'll get in touch
				</p>
			</div>
			<ContactForm />
		</motion.div>
	);
};

export default Contact;
