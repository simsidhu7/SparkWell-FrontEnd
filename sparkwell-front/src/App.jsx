import "./App.scss";
import Header from '../src/components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import JournalEntries from "./pages/JournalEntries/JournalEntries";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/journalentries" element={<JournalEntries/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
