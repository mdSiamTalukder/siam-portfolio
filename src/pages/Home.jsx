
import Navbar from "../components/Navbar/NavBar";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";

const Home = () => {
  return (
    <>
      {/* ========================================
          Navbar
      ======================================== */}
      <Navbar />

      <main>
        {/* ======================================
            Hero
        ======================================= */}
        <Hero />

        {/* ======================================
            About
        ======================================= */}
        <About />

        {/* ======================================
            Skills
        ======================================= */}
        <Skills />

        {/* ======================================
            Projects
        ======================================= */}
        <Projects />

        {/* ======================================
            Contact
        ======================================= */}
        <Contact />
      </main>
    </>
  );
};

export default Home;

