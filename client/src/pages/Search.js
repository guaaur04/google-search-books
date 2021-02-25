import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import API from "../utils/API";
import axios from "axios";

function Search() {

  // // Setting our component's initial state
  const[books, setBooks] = useState([])
  const[formObject, setFormObject] = useState({
     title: "",
     authors: "",
     description: "",
     image: "",
     link: ""
   })
 

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.saveBook({
        title: formObject.title,
        authors: formObject.authors,
        description: formObject.description,
        image: formObject.image,
        link: formObject.link
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

//Should save to array of users books in DB
// I am getting a 404 api/books 

  axios.post("/api/books", {formObject} )
  .then((result) => {
    console.log(result, "We're getting somewhere");
  })

  
    return (
      <div>
        <Nav />
        <Hero />
        <h1>Search</h1>

        <form>
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Book (required)"
            value={formObject.title}

          />
          <FormBtn
            // disabled={!(formObject.author && formObject.title)}
            onClick={handleFormSubmit}
          >
            Book Search
                </FormBtn >

          <Card />

{/* 
Here we were to map through book details to render to appropriate parts of the page */}
          {/* <List>
            {books.map(book => (
              <ListItem key={book._id}>
                <Link to={"/books/" + book._id}>
                  <strong>
                    {book.title} by {book.authors}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => deleteBook(book._id)} />
              </ListItem>
            ))}
          </List> */}

        </form>

      </div>
    );
  }

export default Search;
