import React from "react";

//styles
import styles from "../styles/Tabs.module.css";

//components
import ProductItem from "./ProductItem";

export default class Tabs extends React.Component {
  // button to togglebetween products shown in home page
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      veg: true,
    };
  }

  componentDidMount() {
    this.fetchProd(0);
  }

  fetchProd(prodType) {
    var type;
    if (prodType === 0) {
      type = "vegetables";
    } else {
      type = "fruits";
    }

    const url = process.env.REACT_APP_BACKEND_URL + "/api/product/" + type;

    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);

        if (prodType === 0) {
          type = "vegetables";
          this.setState({
            products: res.vegetables,
            veg: true,
          });
        } else {
          type = "fruits";
          this.setState({
            products: res.fruits,
            veg: false,
          });
        }
      });
  }

  getVeg() {
    this.fetchProd(0);
  }

  getFruits() {
    this.fetchProd(1);
  }

  render() {
    const { veg } = this.state;
    return (
      <>
        <div className={styles.tabsContainer}>
          <button
            className="toggleButton"
            onClick={() => {
              // sets state on clicks
              this.getVeg();
            }}
          >
            <h3 style={veg ? { color: "black" } : { color: "grey" }}>
              VEGETABLES
            </h3>
          </button>

          <div className={styles.Toggleborder}></div>
          <button
            className="toggleButton"
            // sets state on clicks
            onClick={() => {
              this.getFruits();
            }}
          >
            <h3 style={veg ? { color: "grey" } : { color: "black" }}>FRUITS</h3>
          </button>
        </div>
        <div className="container">
          <div className="row ">
            {this.state.products.map((product) => {
              return <ProductItem product={product} key={product._id} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
