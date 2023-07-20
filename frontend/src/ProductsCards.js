import React, { Component } from "react";

const CardRow1 = () => {
  return (
    <div class="card-group card-group1">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Celular</h5>
          <p class="card-text">R$3000,00</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Notebook</h5>
          <p class="card-text">R$4500,00</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">PC</h5>
          <p class="card-text">R$2500,00</p>
        </div>
      </div>
    </div>
  );
};

const CardRow2 = () => {
  return (
    <div class="card-group card-group2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Mouse</h5>
          <p class="card-text">R$50,00</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Teclado</h5>
          <p class="card-text">R$150,00</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Monitor</h5>
          <p class="card-text">R$1500,00</p>
        </div>
      </div>
    </div>
  );
};

class ProductsCards extends Component {
  render() {
    return (
      <div>
        <CardRow1 />
        <CardRow2 />
      </div>
    );
  }
}

export default ProductsCards;
