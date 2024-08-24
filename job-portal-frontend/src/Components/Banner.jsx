import React, { useState } from "react";

export const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 md:py-32">
      <h1 className="text-5xl font-bold text-primary ">
        Find Your <span className="text-blue-500">New Job</span> Today
      </h1>
      <p className=" text-lg text-black/70 mb-8">
        Thosands of jobs in the computer, engineering and technology sectors are
        waiting for you.
      </p>
      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-insert focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for ?"
              className=" flex-1 block border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />

            <svg
              className="absolute mt-2.5 ml-2 text-gray-400"
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
            </svg>
          </div>
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-insert focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Location for ?"
              className=" flex-1 block border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />

            <svg
              className="absolute mt-2.5 ml-2 text-gray-400"
              viewBox="0 0 500 1000"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
            </svg>
          </div>
          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
