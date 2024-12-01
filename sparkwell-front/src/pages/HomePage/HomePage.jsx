import "../../App.scss";
import "./HomePage.scss";
import Journal from "../../components/Journal/Journal";
import Mood from "../../components/Mood/Mood";
import WaterIntake from "../../components/WaterIntake/WaterIntake";
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
      const response = await axios.get(`${baseUrl}/mood-playlist?mood=${mood}`);

      console.log(response.data);
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.error("Error getting the playlist:", error);
    }
  };

  return (
    <div className="mood">
      <p className="mood__reflect">Let's reflect on your mood.</p>
      <p className="mood__prompt">How are you feeling right now?</p>

      <Mood onMoodSelect={handleMoodSelect} />

      <div className="playlist">
        <h3 className="playlist__mood">Playlist for {selectedMood} mood:</h3>
        <ul>
          {playlists?.map((playlist, index) => {
            console.log(playlist);
            if (!playlist) {
              return;
            }
            return (
              <li key={index}>
                <a
                  href={playlist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {playlist.name}
                </a>
              </li>
            );
          })}
        </ul>

        <Journal />
        <WaterIntake />
      </div>
    </div>
  );
}

export default HomePage;
