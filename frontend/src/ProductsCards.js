import React, { Component } from "react";

const CardRow1 = (props) => {
  const rows = props.productData1.map((row, index) => {
    return (
      <div className="card-group card-group1 col-4" key={index}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{row.name}</h5>
            <p className="card-text">{row.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => props.addToCart(row)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    );
  });
  return rows;
};

const CardRow2 = (props) => {
  const rows = props.productData2.map((row, index) => {
    return (
      <div className="card-group card-group2 col-4" key={index}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{row.name}</h5>
            <p className="card-text">{row.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => props.addToCart(row)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    );
  });
  return rows;
};

const ProductsCards = (props) => {
  const { productData1, productData2, addToCart } = props;

  return (
    <div>
      <div className="row mt-5">
        <CardRow1 productData1={productData1} addToCart={addToCart} />
      </div>
      <div className="row mt-5">
        <CardRow2 productData2={productData2} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ProductsCards;
