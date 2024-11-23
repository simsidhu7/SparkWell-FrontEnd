import "../../App.scss";
import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

// MoodSearch Component
const MoodSearch = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodChange = (event) => {
    const mood = event.target.value;
    setSelectedMood(mood);
    onMoodSelect(mood); // Pass selected mood to parent
  };

  return (
    <div className="mood-search">
      <label htmlFor="mood__dropdown" className="mood__prompt-description">
        Choose your mood from the options below to discover a Spotify song that
        matches it!
      </label>
      <select
        id="mood__dropdown"
        className="mood-search__dropdown"
        value={selectedMood}
        onChange={handleMoodChange}
      >
        <option value="">Select</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="relaxed">Relaxed</option>
        <option value="energetic">Energetic</option>
        <option value="focused">Focused</option>
        <option value="chill">Chill</option>
      </select>
    </div>
  );
};

// HomePage Component
function HomePage() {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    console.log(`Selected mood: ${mood}`);
    // Can make an API call or take action with the selected mood
  };

  return (
    <div className="mood">
      <p className="mood__reflect">Let's reflect on your mood.</p>
      <p className="mood__prompt">How are you feeling right now?</p>

      <MoodSearch onMoodSelect={handleMoodSelect} />

      <button className="mood__button">Generate Mood-Based Song</button>

      <div className="journal">
        <p className="journal__entry">
          Journal about your day. Reflect on the best parts of your day and
          release what doesn't serve you.
        </p>
        <input
          className="journal__input"
          name="journal__input"
          placeholder="Let's reflect."
        />
        <button className="journal__button">Reflect</button>
      </div>
    </div>
  );
}

export default HomePage;
