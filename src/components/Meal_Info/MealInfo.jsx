import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealdb } = useParams();

  const [mealDetails, setMealDetails] = useState({});
  console.log(mealDetails);

  useEffect(() => {
    const url = ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}
          `;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals[0]));
  }, []);
  const { strMealThumb, strMeal, strInstructions } = mealDetails;
  return (
    <div className="container rounded-sm mx-2 w-full my-5 md:mx-auto ">
      <div className="  mt-5 ">
        <img
          className="rounded-t-lg shadow-lg w-2/4 mx-auto "
          src={strMealThumb}
          alt=""
        />

        <div className="p-5 text-center  ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
            {strMeal}
          </h5>

          <p className="mb-3 font-normal text-black ">
            {strInstructions?.slice(0, 1200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealInfo;
