import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { Input, FormBtn } from "../components/Form";

function Search() {
  return (
    <div>
        <Nav />
        <Hero />
      <h1>Search</h1>

      <form>
              <Input
                // onChange={handleInputChange}
                name="title"
                placeholder="Book (required)"
              />
              <FormBtn
                // onClick={handleFormSubmit}
              >
                Book Search
              </FormBtn>

              <Card /> 
              
            </form>



    </div>
  );
}

export default Search;
