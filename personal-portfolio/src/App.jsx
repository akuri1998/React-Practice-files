import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import About from "./About.jsx"
import Projects from "./projects.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"
import ScrollToTop from "./ScrollToTop.jsx"
import { useState } from "react";
// ...imports

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    <>
      <Header />
      <Hero />
      <About /> 
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
    </div>
  );
}

export default App;
