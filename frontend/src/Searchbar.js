import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg search-navbar">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 form-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button type="button" class="btn btn-outline-light">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Searchbar;
