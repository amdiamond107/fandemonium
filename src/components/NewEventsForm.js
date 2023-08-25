function NewEventsForm({addGames, updateFormData}) {
  return (
    <div className="new-event-form">
      <h3>Add More Recaps For Events Attended...</h3>
      <form onSubmit={addGames}>
        <input onChange={updateFormData} type="text" name="date" placeholder="Date 📆" required />
        <input onChange={updateFormData} type="text" name="matchup" placeholder="Matchup 🤜 🤛" required />
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL 📷" required />
        <input onChange={updateFormData} type="text" name="final_score" placeholder="Final Score 🥇🥈" required />
        <p>
        <input onChange={updateFormData} type="text" name="win_loss" placeholder="Win 🙂 or Loss 😠" required />
        <input onChange={updateFormData} type="text" name="game_type" placeholder="Season⏳ or Playoffs⌛️" required />
        <input onChange={updateFormData} type="text" name="knicks_high_scorer" placeholder="Home High Scorer 🥇" required />
        <input onChange={updateFormData} type="text" name="opponent_high_scorer" placeholder="Away High Scorer 🥇" required />
        </p>
        <p><button type="submit">Add Event</button></p>
      </form>
    </div>
  );
}

export default NewEventsForm;

        