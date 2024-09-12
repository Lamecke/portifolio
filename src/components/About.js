/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import profile from "../Images/profile.jpg";

const About = () => {
  return (
    <section id="component-about">
      <div id="profile-image">
        <img src={profile} />
      </div>
      <div id="about">
        <h2>Sobre mim</h2>
        <p>
          Eu sou um desenvolvedor apaixonado por tecnologia, especializado em
          criação de sites e aplicativos modernos.
        </p>
      </div>
    </section>
  );
};

export default About;
