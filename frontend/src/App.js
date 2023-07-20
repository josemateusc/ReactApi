import React, { Component } from "react";
import Table from "./Table";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import ProductsCards from "./ProductsCards";
import Cart from "./Cart";

class App extends Component {
  state = {
    characters: [
      {
        name: "Natacsha",
        email: "nat@mail.com",
      },
      {
        name: "Felipe",
        email: "felipe@mail.com",
      },
      {
        name: "Maite",
        email: "maite@mail.com",
      },
      {
        name: "Juliana",
        email: "ju@mail.com",
      },
    ],
    productsRow1: [
      {
        name: "Celular",
        price: "R$3000,00",
      },
      {
        name: "Notebook",
        price: "R$4500,00",
      },
      {
        name: "PC",
        price: "R$2500,00",
      },
    ],
    productsRow2: [
      {
        name: "Mouse",
        price: "R$50,00",
      },
      {
        name: "Teclado",
        price: "R$150,00",
      },
      {
        name: "Monitor",
        price: "R$1500,00",
      },
    ],
    cart: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  removeFromCart = (index) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((_, i) => i !== index),
    }));
  };

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  render() {
    const { characters } = this.state;
    const { productsRow1 } = this.state;
    const { productsRow2 } = this.state;
    const { cart } = this.state;
    return (
      <div className="container">
        <Menu
          title="Loja Virtual"
          loginText="Login"
          signupText="Signup"
          productsText="Produtos"
          registerText="Cadastrar"
          editText="Editar"
          deleteText="Deletar"
        />
        <Searchbar />
        <ProductsCards
          productData1={productsRow1}
          productData2={productsRow2}
          addToCart={this.addToCart}
        />
        {/* Se o carrinho estiver vazio, exiba uma mensagem de carrinho vazio */}
        {cart.length === 0 ? (
          <div>
            <h3 className="cart-title">Seu Carrinho</h3>
            <p>Seu Carrinho está Vazio</p>
          </div>
        ) : (
          <Cart cartItems={cart} removeFromCart={this.removeFromCart} />
        )}

        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;
