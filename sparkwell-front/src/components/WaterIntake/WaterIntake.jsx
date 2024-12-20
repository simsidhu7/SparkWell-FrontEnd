import { useState } from "react";
import waterBottle from "../../assets/images/waterbottle.png";
import "./WaterIntake.scss";

function WaterIntake() {
  const [bottleFilter, setBottleFilter] = useState("hue-rotate(0deg)");
  const [message, setMessage] = useState("");
  const [totalWater, setTotalWater] = useState(0);

  const updateWaterIntake = (event) => {
    event.preventDefault();
    const amountOfWater = Number(event.target.waterintake.value);

    setTotalWater(amountOfWater);

    if (amountOfWater < 2) {
      //red
      setBottleFilter(
        "brightness(0) saturate(100%) invert(10%) sepia(73%) saturate(7317%) hue-rotate(10deg) brightness(91%) contrast(117%)"
      );
      setMessage("Let's get hydating! 🚰");
      //orange
    } else if (amountOfWater < 4) {
      setBottleFilter(
        "brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(3682%) hue-rotate(357deg) brightness(95%) contrast(99%)"
      );
      setMessage("You're almost halfway there. Keep going! 🙂");
      //light blue
    } else if (amountOfWater < 6) {
      setBottleFilter(
        "brightness(0) saturate(100%) invert(93%) sepia(67%) saturate(4633%) hue-rotate(175deg) brightness(105%) contrast(98%)"
      );
      setMessage("Good progress! 😊");
      //blue
    } else if (amountOfWater < 8) {
      setBottleFilter(
        "brightness(0) saturate(100%) invert(48%) sepia(46%) saturate(671%) hue-rotate(163deg) brightness(94%) contrast(101%)"
      );
      setMessage("You are almost at the goal of 8 glasses. Nice job! 🚀");
      //green
    } else if (amountOfWater >= 8) {
      setBottleFilter(
        "brightness(0) saturate(100%) invert(59%) sepia(38%) saturate(792%) hue-rotate(96deg) brightness(96%) contrast(92%)"
      );
      setMessage("Amazing! You reached the daily water goal of 8 glasses! 🎉");
    }
  };

  return (
    <>
      <h3 className="waterintake-header">Daily Water Intake</h3>
      <form className="waterintake-form" onSubmit={updateWaterIntake}>
        <label htmlFor="waterintake" className="waterintake__label">
          Please enter the total amount of water that you drank today:
        </label>
        <input
          type="number"
          id="waterintake"
          name="waterintake"
          className="waterintake"
          min="0"
          placeholder="Daily Water Intake"
        />
        <button className="waterintake-form__button" type="submit">
          Submit
        </button>
      </form>

      <article className="waterintake-results">
        <p className="waterintake-results__glasses">
          {totalWater}/8 recommended glasses consumed.
        </p>
        <p className="waterintake-results__message">{message}</p>
      </article>
      <div className="waterintake-bottle">
        <img
          className="waterintake-bottle__image"
          src={waterBottle}
          alt="Water Bottle"
          style={{
            filter: bottleFilter,
            transition: "filter 0.5s ease",
          }}
        />
      </div>
    </>
  );
}

export default WaterIntake;
