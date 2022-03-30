import React from "react";

const NotFound = () => {
  return (
    <div
      className="flex md:w-2/4 mx-2 md:mx-auto  mt-5 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg items-center justify-center dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <svg
        className="inline flex-shrink-0 mr-3 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <div>
        <span className="font-medium">
          {" "}
          <span className=" text-4xl font-bold text-black mr-3 ">404</span>{" "}
          Sorry ! The page you request was not found{" "}
        </span>
      </div>
    </div>
  );
};

export default NotFound;
