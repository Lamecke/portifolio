import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skill />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
