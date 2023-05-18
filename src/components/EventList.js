import React from "react";
import EventCard from "./EventCard";

function EventList({games}) {
  return (
    <ul className="cards"> {games.map(game =>{
      return  <EventCard key={game.id} game={game}/>
    })}</ul>
  );
}

export default EventList;