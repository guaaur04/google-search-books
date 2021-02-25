import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Image from 'react-bootstrap/Image';
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";


//Here we're calling to display our saved books from the DB


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
      <h2>Sorry. There's an error here. Come back tomorrow for your saved books.</h2>


    {/* Here we render our modified list to include a delete (rather than a "view") */}

    <Image alt="error" src="https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/500-internal-server-error-featured-image-1.png" />



    </div>
  );
}

export default Saved;
