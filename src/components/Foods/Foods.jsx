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
      {/* search field */}
      <h1 className='text-3xl text-center my-3 ' >  Search Food Now  </h1>
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
