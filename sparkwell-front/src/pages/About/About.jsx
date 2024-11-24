import "../../App.scss";
import "../About/About.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

function About() {
    return (
      <div className="about">
         <p className="about__sparkwell">Simmy Sidhu, a Biomedical and Software Engineer, developed <span className="about__company">SparkWell</span> to spark self-care and productivity and enhance wellness and inclusivity particularly for neurodivergent individuals that may struggle with planning and emotional expression. Drawing from her personal experience, Simmy aims to address limitations of many wellness apps, which are often too complex and lack accessibility for diverse users.</p>
         <p className="about__benefits">Reflecting on your mood and processing emotions is a core aspect of SparkWell, as it offers numerous benefits, including increased self-awareness, emotional regulation, improving mental health, enhanced communication, personal growth, and productivity. By fostering mindfulness and helping users recognize emotional patterns, the app empowers individuals to build healthier habits and maintain balance in their lives. </p>
      </div>
    );
  }
export default About;