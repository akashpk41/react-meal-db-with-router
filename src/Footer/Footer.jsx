import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="p-4 mt-5 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Hungry Heros Restaurants . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/about" class="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/foods" class="mr-4 hover:underline md:mr-6">
            Foods
          </Link>
        </li>
        <li>
          <Link to="/license" class="mr-4 hover:underline md:mr-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link to="/contact" class="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
