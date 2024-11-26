import "./Mood.scss";
import {useState} from "react";

const Mood = ({ onMoodSelect }) => {
    const [selectedMood, setSelectedMood] = useState("");
  
    const handleMoodChange = (event) => {
      const mood = event.target.value;
      setSelectedMood(mood);
      onMoodSelect(mood); // Pass selected mood to parent
    };
  
    return (
      <div className="mood-search">
        <label htmlFor="mood__dropdown" className="mood__prompt-description">
          Choose your mood from the options below to discover a Spotify playlist
          that matches it!
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

  export default Mood;