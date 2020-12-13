import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

var fetchURL = "";
const url = "https://the-cocktail-db.p.rapidapi.com/filter.php?i=";
const App = () => {
  const [drinks, setDrinks] = useState([]);

  const setURL = (text) => {
    fetchURL = url + text;
    return fetchURL;
  };

  const clickhandler = async (text) => {
    const response = await Axios.get(setURL(text), {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b9cae0c425mshcf1d76cb7ab0306p141e00jsn2123b0d3da81",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      },
    });

    console.log(response);
    const data = response.data.drinks;

    setDrinks(data);

    // data.drinks.map((item, index) => {
    //   console.log(item.strDrink);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Cocktail Recommender</h1>
      <p style={{ fontStyle: "italic", textAlign: "center" }}>
        Find the best cocktails from around the world{" "}
        <span style={{ fontStyle: "normal", fontSize: 1.2 + "rem" }}>🌍</span>
      </p>
      <p>Choose your main ingriedient from the below</p>
      <div>
        <button
          onClick={() => {
            clickhandler("beer");
          }}
        >
          Beer
        </button>
        <button
          onClick={() => {
            clickhandler("whiskey");
          }}
        >
          Whiskey
        </button>
        <button
          onClick={() => {
            clickhandler("rum");
          }}
        >
          Rum
        </button>

        <button
          onClick={() => {
            clickhandler("vodka");
          }}
        >
          Vodka
        </button>
        <button
          onClick={() => {
            clickhandler("gin");
          }}
        >
          Gin
        </button>
      </div>
      <div className="row justify-content-center">
        {drinks.map((drink, index) => {
          return (
            <div key={index} className="col-4 list">
              <h6>
                <img src={drink.strDrinkThumb} />
              </h6>
              {drink.strDrink}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
