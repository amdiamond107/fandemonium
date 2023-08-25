import logo from './logo.svg';
import './normalize.css';
import './bootstrap.min.css';
import './App.css';
import React from "react";
import Header from "./components/Header";
import EventList from "./components/EventList";
import NewEventsForm from "./components/NewEventsForm";
import Search from "./components/Search";
import NavBar from "./components/NavBar"
import ContainerHeader from './components/ContainerHeader';
import { useState, useEffect } from "react";
import {Route, Switch} from "react-router-dom"

function App() {

  const [games, setGames] = useState([])
  const [formData, setFormData] = useState({})
  const [searchText, setSearchText] = useState("")

  useEffect(()=> {
    fetch('http://localhost:4000/games')
    .then(response => response.json())
    .then(gameData => setGames(gameData))
  }, [])
  
  function addGames(event){
    event.preventDefault()

    fetch('http://localhost:4000/games', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newGame => setGames([...games, newGame]))
  }

  function updateFormData(event) {
      setFormData({...formData, [event.target.name]: event.target.value})
    }

  const filteredGames = games.filter(game => {
    if(searchText === ""){
      return true
    } {return game.matchup.toLowerCase().includes(searchText.toLowerCase()) || game.knicks_high_scorer.toLowerCase().includes(searchText.toLowerCase()) || game.opponent_high_scorer.toLowerCase().includes(searchText.toLowerCase()) || game.win_loss.toLowerCase().includes(searchText.toLowerCase()) || game.game_type.toLowerCase().includes(searchText.toLowerCase()) || game.date.toLowerCase().includes(searchText.toLowerCase())
}})

  return (
    <div className="app">
      <Header />
      <NavBar />
    <div className="container">
      <Switch>
        <Route path="/add_events">
          <NewEventsForm updateFormData={updateFormData} addGames={addGames} />
          <EventList games={filteredGames} />
        </Route>

        <Route path="/search_events">
          <Search setSearchText={setSearchText} searchText={searchText} />
          <EventList games={filteredGames} />
        </Route>

        <Route exact path="/">
          <ContainerHeader />
          <EventList games={games} />
        </Route>
      </Switch>
    </div>
    </div>
  );
}

export default App;

// <div class="card" style={{marginRight: 500, marginLeft: 500, marginBottom: 500, marginTop: 50}}>
// <img src={game.image} class="card-img-top" alt={game.matchup}/>
// <div class="card-body">
//   <h5 class="card-title">{game.matchup}</h5>
//   <p class="card-text">{game.date} </p>
//   <a href={game.full_game_highlights} class="btn btn-primary">Full Game Highlights</a>
// </div>
// </div>