import React from "react";
// import { useState } from "react"


function EventCard({game}) {
  // const [like, setLike] = useState(true)

  // function handleClick(){
  //   setLike(!like)
  // }
  
  return (
    <div class="col-md-6 col-xl-4">
    <div class="card event">
  <img src={game.image} class="card-img-top" alt={game.matchup}/>
  <div class="card-body">
    <h5 class="card-title">{game.matchup}</h5>
    <p class="card-text">{game.game_type} Game {game.date} </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{game.final_score}  <p>
      </p>Knicks {game.win_loss}</li>
    <li class="list-group-item">Knicks High Scorer:  <p>
      </p>{game.knicks_high_scorer}</li>
    <li class="list-group-item">{game.opponent} High Scorer: <p>
      </p>{game.opponent_high_scorer}</li>
  </ul>
  <div class="card-body">
    <a href={game.full_game_highlights} class="btn btn-primary">Full Game Highlights</a>
    {/* <a href="#" class="card-link">Another link</a> */}
  </div>
</div>
</div>
  )
}



export default EventCard;

