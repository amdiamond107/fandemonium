import React from "react";
import { useState } from "react"


function EventCard({game}) {
  const [like, setLike] = useState(true)

  function handleClick(){
    setLike(!like)
  }
  
  return (
    <li className="card">
      <img src={game.image} alt={game.matchup} />
      <h4>TBD</h4>
      <p>TBD </p>
      {like ? (
        <button onClick={handleClick} className="primary">Like</button>
      ) : (
        <button onClick={handleClick}>Dislike</button>
      )}
    </li>
  );
}

export default EventCard;
