import React from "react";

const Meal = ({ meal }) => {
  const { strInstructions, strMealThumb, strMeal } = meal;
  return (
    <div class="max-w-sm m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-full ">
      <a href="/">
        <img class="rounded-t-lg" src={strMealThumb} alt="" />
      </a>
      <div class="p-5 text-center ">
        <a href="/">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {strMeal}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {strInstructions.slice(0, 100)}
        </p>
        <button
          href=""
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Order Now >
        </button>
      </div>
    </div>
  );
};

export default Meal;
