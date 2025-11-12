import React from "react";
import Navbar from "./_sections/navbar";
import Hero from "./_sections/hero";
import About from "./_sections/about";
import Projects from "./_sections/projects";
import Testimontials from "./_sections/testimontials";
import Contact from "./_sections/contact";
import WorkExperience from "./_sections/experience";
import Footer from "./_sections/footer";
const App = () => {
	return (
		<main className='container relative mx-auto'>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Testimontials />

			<WorkExperience />
			{/* <Skills /> */}
			<Contact />

			<Footer />
		</main>
	);
};

export default App;
