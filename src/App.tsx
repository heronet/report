import "./App.css";
// import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      {/* <About />
      <Footer /> */}
    </>
  );
}

export default App;
