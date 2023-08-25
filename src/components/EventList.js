import React from "react";
import EventCard from "./EventCard";

function EventList({games}) {
  return (
    <div className="row">
          {games.map(game =>{
      return  <EventCard key={game.id} game={game}/>
    })}
    </div>
  );
}

export default EventList;