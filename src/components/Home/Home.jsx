import React, { useEffect, useState } from "react";
import SearchField from "../Search/SearchField";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  
  const [meals, setMeals] = useState([]);
  //! fetch data from mealdb api
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, [searchText]);
  const searchFieldText = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h1 className=" mt-3  text-center text-3xl ">
        Welcome To Hungry Heros Restaurants
      </h1>
      {/* search field */}
     <SearchField search={searchFieldText} />
    </div>
  );
};

export default Home;
