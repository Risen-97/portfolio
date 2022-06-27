import About from "../components/About";
import Contact from "../components/contact";
import Hero from "../components/Hero";
import Projects from "../components/projects";
import Skills from "../components/skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
