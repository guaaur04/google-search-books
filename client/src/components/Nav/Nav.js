import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>

    <button variant="danger" href="../pages/Search">Search</button>
    <button variant="danger" href="../pages/Saved">Saved</button>

    {/* <Button variant="danger" href="/saved">Saved</Button> */}

      {/* <NavItem>
      <NavLink href="/search">Search</NavLink>
     </NavItem>

     <NavItem>
      <NavLink href="/saved">Saved</NavLink>
     </NavItem> */}


    </nav>
  );
}

export default Nav;
