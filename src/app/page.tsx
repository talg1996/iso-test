// pages/index.tsx (or .jsx if not using TypeScript)
"use client";
import React, { useState } from "react";
import Input from "@/app/components/Input"; // Adjust the path alias as per your project's setup

const Home: React.FC = () => {
  const [outToChassisVoltage, setOutToChassisVoltage] = useState<
    number | undefined
  >();
  const [inputToChassisVoltage, setInputToChassisVoltage] = useState<
    number | undefined
  >();

  const [inputToOutput, setInputToOutput] = useState<number | undefined>();
  const [outputToOutput, setOutputToOutput] = useState<number | undefined>();

  return (
    <div className="mx-2 my-2 sm:max-w-[400px]  px-4 py-8 flex flex-col flex-wrap gap-5 border border-black rounded">
      <h1>Configure Test</h1>

      <Input
        label="Output to Chassis"
        value={outToChassisVoltage}
        units="Voltage"
      />

      <Input
        label="Input to Chassis"
        value={inputToChassisVoltage}
        units="Voltage"
      />

      <Input label="Input to Output" value={inputToOutput} units="Voltage" />

      <Input label="Output to Output" value={outputToOutput} units="Voltage" />

      <div>
        <label
          htmlFor="quantity-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Choose quantity:
        </label>
        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="999"
            required
          />
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Please select a 5 digit number from 0 to 9.
        </p>
      </div>

      <div>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default Home;
