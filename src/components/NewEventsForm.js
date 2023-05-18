import React from "react";

function NewEventsForm({addGames, updateFormData}) {
  return (
    <div className="new-event-form">
      <h2>Add Events</h2>
      <form onSubmit={addGames}>
        <input onChange={updateFormData} type="text" name="matchup" placeholder="Matchup 🤜 🤛" required />
        <input onChange={updateFormData} type="text" name="date" placeholder="Date 📆" required />
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL 📷" required />
        <input onChange={updateFormData} type="text" name="final_score" placeholder="Final Score 🥇🥈" required />
        <input onChange={updateFormData} type="text" name="win_loss" placeholder="Win 🙂 or Loss 😠" required />
        <input onChange={updateFormData} type="text" name="game_type" placeholder="Season⏳ or Playoffs⌛️" />
        <input onChange={updateFormData} type="text" name="knicks_high_scorer" placeholder="Home High Scorer 🥇" />
        <input onChange={updateFormData} type="text" name="opponent_high_scorer" placeholder="Away High Scorer 🥇" />
        <input onChange={updateFormData} type="text" name="full_game_highlights" placeholder="Video Highlight(s) 🎥" />
        <input onChange={updateFormData} type="number" name="Likes" step="1.0" placeholder="Likes 👍" />
        <input onChange={updateFormData} type="number" name="Dislikes" step="1.0" placeholder="Dislikes 👎" />
        <input onChange={updateFormData} type="text" name="Comments" placeholder="Comments 🗣" />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default NewEventsForm;