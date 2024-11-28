import "./Journal.scss";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Journal = () => {
  const [journalEntry, setJournalEntry] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!journalEntry.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Please enter in a reflection before submitting.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/journalentries`,
        { entry: journalEntry }
      );
      Swal.fire({
        title: "Success!",
        text: "Your reflection has been saved into the Journal Entries tab!",
        icon: "success",
        confirmButtonText: "OK",
      });
      //Clear after submission
      setJournalEntry("");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to save your reflection. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className="journal">
      <p className="journal__entry">
        Journal about your day. Reflect on the best parts of your day and
        release what doesn't serve you.
      </p>

      <form className="journal__form" onSubmit={handleSubmit}>
        <label htmlFor="journal__input" className="journal__label">
          Journal Entry:
        </label>
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
