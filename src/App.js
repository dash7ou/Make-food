import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Recipes from "./Recipes/Recipes";
import { async } from "q";

const App = () => {
  const APPID = "715ccf54";
  const APPKEY = "43ebd5b10e8c6ffe2469e8f916d26117";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  //for get it one time
  useEffect(() => {
    getRecipes();
  }, [query]);

  //get data and put it in recipes
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div class="recipes">
        {recipes.map(recipe => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
