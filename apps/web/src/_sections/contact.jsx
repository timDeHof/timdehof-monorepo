import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
	const formRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	// service_92cb2hn
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICEID,
				import.meta.env.VITE_EMAILJS_TEMPLATEID,
				{
					from_name: formData.name,
					to_name: "Tim DeHof",
					from_email: formData.email,
					to_email: "tim@timdehof.dev",
					message: formData.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);
			setLoading(false);

			alert("Message sent successfully!");

			setFormData({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			setLoading(false);
			console.log(error);
			alert("Something went wrong, please try again later.");
		}
	};
	return (
		<section className='my-20 c-space' id='contact'>
			<div className='relative flex flex-col items-center justify-center min-h-screen'>
				<img
					src='/assets/terminal.png'
					alt='terminal bg'
					className='absolute inset-0 min-h-screen'
				/>
				<div className='contact-container'>
					<h3 className='head-text'>Let's talk</h3>
					<p className='mt-3 text-lg text-white-600'>
						Whether you're looking to build a new website, improve an existing
						platform, or bring a unique project to life, I'm here to help. Reach
						out to me and let's discuss your project's requirements and goals.
					</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='flex flex-col mt-12 space-y-7'>
						<label className='space-y-3'>
							<span className='field-label'>Full Name</span>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='field-input'
								placeholder='John Doe'
							/>
						</label>
						<label className='space-y-3'>
							<span className='field-label'>Email</span>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='field-input'
								placeholder='joedoe@gmail.com'
							/>
						</label>
						<label className='space-y-3'>
							<span className='field-label'>Your Message</span>
							<textarea
								name='message'
								value={formData.message}
								onChange={handleChange}
								required
								rows={5}
								className='field-input'
								placeholder="Hi, I'm interested in ..."
							/>
						</label>
						<button className='field-btn' type='submit' disabled={loading}>
							{loading ? "Sending..." : "Send Message"}
							{!loading && (
								<img
									src='/assets/arrow-up.png'
									alt='arrow'
									className='field-btn_arrow'
								/>
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
