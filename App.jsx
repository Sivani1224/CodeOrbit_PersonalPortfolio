import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Loader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer>
        <p>© 2026 sivani</p>
      </footer>
    </div>
  );
}

export default App;