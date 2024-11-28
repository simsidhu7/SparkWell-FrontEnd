import "../../App.scss";
import "../About/About.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import journalImage from "../../assets/images/Journaling.jpeg";

const baseUrl = import.meta.env.VITE_BASE_URL;

function About() {
  return (
    <div className="about">
      <div className="about__app">
        <h2>About SparkWell</h2>
        <p className="about__benefits">
          Reflecting on your mood and processing emotions is a core aspect of
          SparkWell, as it offers numerous benefits, including increased
          self-awareness, emotional regulation, improving mental health,
          enhanced communication, personal growth, and productivity. By
          fostering mindfulness and helping users recognize emotional patterns,
          the app empowers individuals to build healthier habits and maintain
          balance in their lives.{" "}
        </p>

        <img
          className="about__journaling-image"
          src={journalImage}
          alt="Journaling Cartoon"
        />
      </div>
      <div className="about__creator">
        <h2>Behind the Concept</h2>
        <p className="about__sparkwell">
          Simmy Sidhu, a Biomedical and Software Engineer, developed{" "}
          <span className="about__company">SparkWell</span> to spark self-care
          and enhance wellness and inclusivity particularly for neurodivergent
          individuals that may struggle with planning and emotional expression.
          Drawing from her personal experience, Simmy aims to address
          limitations of many wellness apps, which are often too complex and
          lack accessibility for diverse users.
        </p>
      </div>
    </div>
  );
}
export default About;
