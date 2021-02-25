import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>

    <div>

    <Button variant="danger" href="/search">Search</Button>
    <Button variant="danger" href="/saved">Saved</Button>

    </div>

    </nav>
    </div>
  );
}

export default Nav;
