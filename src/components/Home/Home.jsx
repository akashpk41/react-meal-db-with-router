import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import SearchField from "../Search/SearchField";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  const [meals, setMeals] = useState([]);
  console.log(meals);

  //! fetch data from mealdb api
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
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
      <div className="container grid md:grid-cols-3 mx-auto m-3 gap-4 md:w-4/5 ">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
