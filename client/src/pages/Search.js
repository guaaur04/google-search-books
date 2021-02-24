import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
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
                Search
              </FormBtn>
            </form>



    </div>
  );
}

export default Search;
