import React, { useEffect, useState } from "react";
import "./styles/Strength.scss";

const Strength = () => {
  const animationDuration = 1500; 

  const countdown = (targetNumber, setCount) => {
    let startTimestamp;

    function updateCount(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;

      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(1, elapsed / animationDuration);
      const newCount = Math.floor(progress * targetNumber);

      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    }

    requestAnimationFrame(updateCount);
  };

  // Initialize state variables for each count
  const [countExperience, setCountExperience] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [countCompanies, setCountCompanies] = useState(0);
  const [countAwards, setCountAwards] = useState(0);

  // Call the countdown function for each number with its target
  useEffect(() => {
    countdown(5, setCountExperience);
  }, []);

  useEffect(() => {
    countdown(25, setCountProjects);
  }, []);

  useEffect(() => {
    countdown(18, setCountCompanies);
  }, []);

  useEffect(() => {
    countdown(5, setCountAwards);
  }, []);

  return (
    <div className="strength">
      <div className="focus-details">
        <div className="focus-number">
          <span>{countExperience}+</span>
        </div>
        <p>Years Working Experience</p>
      </div>
      <div className="focus-details">
        <div className="focus-number">
          <span>{countProjects}+</span>
        </div>
        <p>Completed Projects</p>
      </div>
      <div className="focus-details">
        <div className="focus-number">
          <span>{countCompanies}+</span>
        </div>
        <p>Worked Company</p>
      </div>
      <div className="focus-details">
        <div className="focus-number">
          <span>{countAwards}+</span>
        </div>
        <p>Rewarded</p>
      </div>
    </div>
  );
};

export default Strength;
