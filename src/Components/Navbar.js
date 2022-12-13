import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar ()
{
  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href='void:' className="navbar-brand text-light">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link">Crud</NavLink>
              <NavLink to="/Cart" className="nav-link ">Cart</NavLink>
              <NavLink to="/form-redux" className="nav-link ">Form-redux</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;