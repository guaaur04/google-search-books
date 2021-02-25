import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Image from 'react-bootstrap/Image';
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";


function Saved() {

   // // Setting our component's initial state
  //  const[books, setBooks] = useState([])
  //  const[formObject, setFormObject] = useState({
  //     title: "",
  //     authors: "",
  //     description: "",
  //     image: "",
  //     link: ""
  //   })

  //Here we're calling to display our saved books from the DB

   // Loads all books and sets them to books
  //  function loadBooks() {
  //   API.getBooks()
  //     .then(res =>
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };


// Deletes a book from the database with a given id, then reloads books from the db

  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }


  return (
    <div>
        <Nav />
        <Hero />
      <h1>Saved</h1>
      <h2>Sorry. There's an error here. Come back tomorrow for your saved books.</h2>

{/* Let the user know we're still under construction */}
    

    <Image alt="error" src="https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/500-internal-server-error-featured-image-1.png" />

{/* Here we render our modified list to include a delete (rather than a "view") */}

    </div>
  );
}

export default Saved;
