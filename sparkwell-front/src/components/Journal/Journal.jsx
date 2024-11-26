import "./Journal.scss";
import { useState } from "react";
import axios from "axios";

const Journal = ({ onNewEntry }) => {
  const [journalEntry, setJournalEntry] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/journalentries",
        { entry: journalEntry }
      );
    } catch (error) {
      alert("Failed to save your reflection. Please try again.");
    }

    //Clear after submission
    setJournalEntry("");
    alert("Your reflection has been saved into the Journal Entries tab!");
  };

  return (
    <div className="journal">
      <p className="journal__entry">
        Journal about your day. Reflect on the best parts of your day and
        release what doesn't serve you.
      </p>

      <form className="journal__form" onSubmit={handleSubmit}>
        <label htmlFor="journal__input" className="journal__label"></label>
        <textarea
          id="journal__input"
          className="journal__input"
          name="journal__input"
          placeholder="Let's reflect."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
        />
        <button className="journal__button" type="submit">
          Reflect
        </button>
      </form>
    </div>
  );
};

export default Journal;
