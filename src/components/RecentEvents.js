import React from "react";
import NewEventsForm from "./NewEventsForm";
import EventList from "./EventList";
import Search from "./Search";


function RecentEvents({games, addGames, updateSearchText, updateFormData}) {

  return (
    <main>
      <NewEventsForm updateFormData={updateFormData} addGames={addGames} />
      <Search updateSearchText={updateSearchText} />
      <EventList games={games} />
    </main>
  );
}

export default RecentEvents;

// lay these right into 

// lecture 7 (last one)