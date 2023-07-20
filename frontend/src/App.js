import React, { Component } from "react";
import Table from "./Table";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import ProductsCards from "./ProductsCards";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Searchbar />
        <ProductsCards />
      </div>
    );
  }
}

export default App;
