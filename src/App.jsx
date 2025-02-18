// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
	return (
		<>
			<div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
			</div>
			<main className="flex flex-col items-center px-4 mg:px-8 lg:px-16">
				<Navbar></Navbar>
				<Hero></Hero>
				<About></About>
				<Contact></Contact>
				<Work></Work>
			</main>
		</>
	);
}

export default App;
