import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className=" mt-3  text-center text-3xl ">
        Welcome To Hungry Heros Restaurants
      </h1>

      {/* search field */}
      <div className=" mt-5 justify-center items-center flex ">
        <input
          className="border-2 rounded-sm  p-2 border-black mr-3 focus:bg-green-200 "
          type="text"
          placeholder="Search Your Favorite Food Now"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-5 font-bold rounded-lg ">
          {" "}
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
