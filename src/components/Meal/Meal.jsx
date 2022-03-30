import React from "react";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strInstructions, strMealThumb, strMeal } = meal;
  const navigate = useNavigate();
  const orderNow = () => {
    navigate(`/foods/${meal.idMeal}`);
  };

  return (
    <div className="max-w-sm m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-full ">
      <img className="rounded-t-lg" src={strMealThumb} alt="" />

      <div className="p-5 text-center ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {strMeal}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {strInstructions.slice(0, 100)}
        </p>
        <button
          href=""
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={orderNow}
        >
         Read More
        </button>
      </div>
    </div>
  );
};

export default Meal;
