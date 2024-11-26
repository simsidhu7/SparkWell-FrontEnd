import "./Journal.scss";
import { Link } from "react-router-dom";

const Journal = () => {
  return (
    <div className="journal">
      <p className="journal__entry">
        Journal about your day. Reflect on the best parts of your day and
        release what doesn't serve you.
      </p>

      {/* add a form */}
      <input
        className="journal__input"
        name="journal__input"
        placeholder="Let's reflect."
      />
      <button className="journal__button" type="submit">
        Reflect
      </button>
    </div>
  );
};

export default Journal;
