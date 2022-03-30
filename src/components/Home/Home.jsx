import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Meal from "../Meal/Meal";
const Home = () => {
  const [meals, setMeals] = useState([]);
  //! fetch data from mealdb api
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div>
      <h1 className=" mt-3  text-center text-3xl ">
        Welcome To Hungry Heros Restaurants
      </h1>
      {/* search field */}
      <div  className="text-center mt-4 " >
      <Link
        to="/foods"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3 w-48  mx-auto"
      >
        {" "}
        Search Food{" "}
      </Link>
</div>
      <div className="container grid md:grid-cols-3 mx-auto m-3 gap-4 md:w-4/5 ">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
