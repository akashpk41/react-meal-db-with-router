import React from "react";

const SearchField = ({search}) => {
  return (
    <div className=" mt-5 justify-center items-center flex ">

      <input
        className="border-2 rounded-xl  p-2 border-black mr-3 focus:bg-sky-100 w-2/4 focus:outline-none "
        type="search"
        placeholder="Search Your Favorite Food Now"
        onChange={search}
      />

    </div>
  );
};

export default SearchField;
