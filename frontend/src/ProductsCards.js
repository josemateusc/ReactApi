import React, { Component } from "react";

const CardRow1 = (props) => {
  const rows = props.productData1.map((row) => {
    return (
      <div className="card-group card-group1 col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{row.name}</h5>
            <p className="card-text">{row.price}</p>
          </div>
        </div>
      </div>
    );
  });
  return rows;
};

const CardRow2 = (props) => {
  const rows = props.productData2.map((row) => {
    return (
      <div className="card-group card-group2 col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{row.name}</h5>
            <p className="card-text">{row.price}</p>
          </div>
        </div>
      </div>
    );
  });
  return rows;
};

const ProductsCards = (props) => {
  const { productData1, productData2 } = props;
  return (
    <div>
      <div className="row mt-5">
        <CardRow1 productData1={productData1} />
      </div>
      <div className="row mt-5">
        <CardRow2 productData2={productData2} />
      </div>
    </div>
  );
};

export default ProductsCards;
