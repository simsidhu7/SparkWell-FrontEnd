import "./Mood.scss";
import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Mood = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodChange = (event) => {
    const mood = event.target.value;
    setSelectedMood(mood);
    onMoodSelect(mood); 
  };

  return (
    <div className="mood-search">
      <p className="mood-search__descr">
        Select your mood from the options below to discover a Spotify playlist
        that matches it!
      </p>
      <FormControl fullWidth>
        <InputLabel
          id="mood-search__dropdown"
          className="mood-search__prompt-description"
        >
          Select Your Mood
        </InputLabel>
        <Select
          labelId="mood-search__dropdown"
          id="mood-search__dropdown"
          className="mood-search__dropdown"
          value={selectedMood}
          onChange={handleMoodChange}
          label="Select your mood."
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="happy">Happy</MenuItem>
          <MenuItem value="sad">Sad</MenuItem>
          <MenuItem value="relaxed">Relaxed</MenuItem>
          <MenuItem value="energetic">Energetic</MenuItem>
          <MenuItem value="focused">Focused</MenuItem>
          <MenuItem value="chill">Chill</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Mood;
