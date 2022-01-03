import React, { useEffect } from "react";
import '../styles/showJoke.scss';


const ShowJoke = () => {
   
    useEffect(() => {
     fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => document.querySelector('p').textContent = data.joke );
  });

  return (
    <div className="ShowJoke">
      <p></p>
    </div>
  );
};

export default ShowJoke;
