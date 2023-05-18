import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import RecentEvents from "./components/RecentEvents";

import { useState, useEffect } from "react";

function App() {

  const [games, setGames] = useState([])
  const [formData, setFormData] = useState({})
  const [searchText, setSearchText] = useState("")

  useEffect(()=> {
    fetch('http://localhost:4000/games')
    .then(response => response.json())
    .then(gameData => setGames(gameData))
  }, [])

  console.log(games)
  
  function addGames(event){
    event.preventDefault()

    fetch('http://localhost:3000/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newGame => setGames(...games, newGame))
  }

  function updateFormData(event) {
    if(event.target.name === "likes" || event.target.name === "dislikes") {
      setFormData({...formData, [event.target.name]: Number(event.target.value)})
    } {
      setFormData({...formData, [event.target.name]: event.target.value})
    }
  }

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  const filteredGames = games.filter(game => {
    if(searchText === ""){
      return true
    }
    return game.name.toLowerCase().includes(searchText.toLowerCase())
  })
  
  return (
    <div className="app">
      <Header />
      <RecentEvents games={filteredGames} addGames={addGames} updateSearchText={updateSearchText} updateFormData={updateFormData} />
    </div>
  );
}

export default App;

