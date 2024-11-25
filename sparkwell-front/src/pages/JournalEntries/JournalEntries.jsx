import "../../App.scss";
import "../HomePage/Homepage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function JournalEntries() {
  //use effect with empty dependency array to call axios to fetch journal entries from teh backend
  //set state for teh response for the backend journal entries
  return <div className="journal-entries"></div>;
}
export default JournalEntries;
