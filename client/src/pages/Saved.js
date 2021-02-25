import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import API from "../utils/API";

// Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }


function Saved() {

  return (
    <div>
        <Nav />
        <Hero />
      <h1>Saved</h1>
    </div>
  );
}

export default Saved;
