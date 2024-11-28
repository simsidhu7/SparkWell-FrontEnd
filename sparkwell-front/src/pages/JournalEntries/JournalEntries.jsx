import "../../App.scss";
import "./JournalEntries.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function JournalEntries() {
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    const fetchJournalEntries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/journalentries`
        );
        setJournalEntries(response.data);
      } catch (err) {
        console.error("Error fetching journal entries: ", err);
      }
    };
    fetchJournalEntries();
  }, []);

  return (
    <div className="journal-entries">
      {journalEntries.length > 0 ? (
        journalEntries.map((entry) => (
          <div key={entry.id} className="journal-entry">
            <p className="journal-entry__content">Entry: {entry.entry}</p>
            <span className="journal-entry__date">Date: {entry.timestamp}</span>
            <div className="journal-entry__divider"></div>
          </div>
        ))
      ) : (
        <p className="journal-entries__nonefound">Journal entries not found.</p>
      )}
    </div>
  );
}
export default JournalEntries;
