import { useState } from "react";
import "./App.css";
import Auth from "./components/Auth/auth";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [showSymbols, setShowSymbols] = useState(false);
	const [showSignIn, setShowSignIn] = useState(false);

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
	};

	const handleSymbolsToggle = () => {
		setShowSymbols(!showSymbols);
	};

	const handleSignInToggle = () => {
		setShowSignIn(!showSignIn);
	};
	

	return (
		<>
			<header className={`header ${darkMode ? "dark-mode" : ""}`}>
				<a href="/" className="logo">
					AI-gebra
				</a>

				<nav className="navbar">
					<ul className="navbar">
						<li>
							<button className="ln-btn">EN</button>
						</li>
						<li>
							<div className="switch-container">
								<label className="switch">
									<input type="checkbox" onChange={handleDarkModeToggle} />
									<span className="slider round"></span>
								</label>
							</div>
						</li>
						<li>
							<button className="acc-btn" onClick={handleSignInToggle}></button>
						</li>
					</ul>
				</nav>
			</header>
			<Auth showSignIn={showSignIn} />
			<main className={darkMode ? "main dark-mode" : "main"}>
				<section className="input-container">
					<div className="input-with-kb-btn">
						<input type="text" placeholder="Insert a problem" className="input" />
						<button className="input-keyboard" onClick={handleSymbolsToggle}></button>
					</div>
					<button className="solve-btn"></button>
				</section>
				<section className={`symbols ${showSymbols ? "" : "hidden"}`}>
					<button className="symbol-btn">+</button>
					<button className="symbol-btn">-</button>
					<button className="symbol-btn">&#215;</button>
					<button className="symbol-btn">&#247;</button>
					<button className="symbol-btn">%</button>
					<button className="symbol-btn">&#8730;</button>
					<button className="symbol-btn">(</button>
					<button className="symbol-btn">)</button>
					<button className="symbol-btn">.</button>
					<button className="symbol-btn">&#8747;</button>
					<button className="symbol-btn">&#402;</button>
					<button className="symbol-btn">&#60;</button>
					<button className="symbol-btn">&#62;</button>
					<button className="symbol-btn">&#8924;</button>
					<button className="symbol-btn">&#8925;</button>
					<button className="symbol-btn">&#176;</button>
					<button className="symbol-btn">[]&#178;</button>
					<button className="symbol-btn">[]&#179;</button>
				</section>
				<section className="output-container">
					<p className="output">test to see something</p>
				</section>
			</main>
		</>
	);
}

export default App;
