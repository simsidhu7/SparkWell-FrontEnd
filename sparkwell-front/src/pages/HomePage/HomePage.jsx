import "../../App.scss";
import "./HomePage.scss";
import { useState } from "react";
import axios from "axios";

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
  const [playlists, setPlaylists] = useState([]);

  const handleMoodSelect = async (mood) => {
    setSelectedMood(mood);
    console.log(`Selected mood: ${mood}`);

    try {
      //Sending the mood to the back-end
      const response = await axios.get(`${baseUrl}/mood-playlist`, {
        params: { mood },
      });
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.error("Error getting the playlist:", error);
    }
  };
  return (
    <div className="mood">
      <p className="mood__reflect">Let's reflect on your mood.</p>
      <p className="mood__prompt">How are you feeling right now?</p>

      <MoodSearch onMoodSelect={handleMoodSelect} />

      <div className="playlist">
        <h3>Playlist for "{selectedMood}" mood:</h3>
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <a href={playlist.url} target="_blank" rel="noopener noreferrer">
                {playlist.name}
              </a>
            </li>
          ))}
        </ul>
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
        ;
      </div>
    </div>
  );
}

export default HomePage;
