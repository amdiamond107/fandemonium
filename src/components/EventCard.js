import React from "react";
import { useState } from "react"


function EventCard({game}) {
  const [like, setLike] = useState(true)

  function handleClick(){
    setLike(!like)
  }
  
  return (
      <li className="card">
        <h1>{game.matchup}</h1> 
        <p>{game.date}</p>
        <img src={game.image} alt={game.matchup}/>
        <p>{game.final_score}</p>
        <header> High Scorers </header>
        <p></p>
        <span>{game.knicks_high_scorer} | {game.opponent_high_scorer}</span>
      </li>
  );
}

export default EventCard;
