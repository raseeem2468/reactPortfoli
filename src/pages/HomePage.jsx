import React from "react";
import SkillsPage from "./SkillsPage"; // Ensure the correct path to SkillsPage
import Work from "./Work";
import Contact from "./Contact";
import About from "./About";
import "../assets/styles/HomePage.css"; // Ensure correct path to CSS file
import Footer from '../components/Footer'; // Ensure the path to Footer component is correct

const HomePage = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">
            I'm <span className="introName">Raseem</span>
            <br />
            Full stack developer
          </span>
          <p className="introPara">
            I am a skilled web developer with experience in creating visually
            appealing and user-friendly websites.
          </p>
          <button className="btn">
            <i className="fas fa-bag-shopping"></i> Hire Me
          </button>
        </div>
        <img
          src="./images/d-removebg-preview.png"
          alt="Background"
          className="bg"
        />
      </section>
      <SkillsPage />
      <About />
      <Work />
      <Contact />
      <Footer /> 
    </>
  );
};

export default HomePage;
