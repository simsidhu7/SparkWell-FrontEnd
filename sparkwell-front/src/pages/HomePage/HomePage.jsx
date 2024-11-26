import "../../App.scss";
import "./HomePage.scss";
import Journal from '../../components/Journal/Journal';
import Mood from '../../components/Mood/Mood';
import { useState } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

function HomePage() {
  const [selectedMood, setSelectedMood] = useState("");
  const [playlists, setPlaylists] = useState([]);

  const handleMoodSelect = async (mood) => {
    setSelectedMood(mood);
    console.log(`Selected mood: ${mood}`);

    try {
      //Sending the mood to the back-end
      const response = await axios.get(`${baseUrl}/mood-playlist?mood=${mood}`);

      console.log(response.data);
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.error("Error getting the playlist:", error);
    }
  };

  return (
    // put mood and journal into components
    <div className="mood">
      <p className="mood__reflect">Let's reflect on your mood.</p>
      <p className="mood__prompt">How are you feeling right now?</p>

      <Mood onMoodSelect={handleMoodSelect} />

      <div className="playlist">
        <h3 className="playlist__mood">Playlist for {selectedMood} mood:</h3>
        <ul>
          {playlists?.map((playlist, index) => (
            <li key={index}>
              <a href={playlist.url} target="_blank" rel="noopener noreferrer">
                {playlist.name}
              </a>
            </li>
          ))}
        </ul>

        <Journal />

      </div>
    </div>
  );
}

export default HomePage;
