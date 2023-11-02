import { useState } from "react";
import "./App.css";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
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
									<span className="slider round">
                    
                  </span>
								</label>
							</div>
						</li>
            <li>
              <button className="acc-btn">You</button>
            </li>
					</ul>
				</nav>
			</header>
			<main></main>
		</>
	);
}

export default App;
