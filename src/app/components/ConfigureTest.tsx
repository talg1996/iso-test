"use client";
import React from "react";
import { SelectInput } from "./SelectInput";
import { useConfigureTest } from "../hooks/useConfigureTest";

const voltageOptions = [
  { value: "50", label: "50 Volt" },
  { value: "200", label: "200 Volt" },
  { value: "500", label: "500 Volt" },
  { value: "1000", label: "1000 Volt" },
  { value: "1500", label: "1500 Volt" },
];

const outputOptions = Array.from({ length: 8 }, (_, i) => ({
  value: `${i + 1}`,
  label: `${i + 1}`,
}));

export const ConfigureTest: React.FC = () => {
  const {
    formValues,
    isLoading,
    handleSelectChange,
    allSelectsHaveValue,
    handleTestClick,
  } = useConfigureTest();

  return (
    <div className="mx-2 my-2 sm:max-w-[400px] px-4 py-8 flex flex-col flex-wrap gap-5 border border-black rounded">
      <h1>Configure Test</h1>

      <SelectInput
        id="outputToChassis"
        label="Output To Chassis"
        value={formValues.outputToChassis}
        onChange={handleSelectChange}
        options={voltageOptions}
      />

      <SelectInput
        id="inputToChassis"
        label="Input To Chassis"
        value={formValues.inputToChassis}
        onChange={handleSelectChange}
        options={voltageOptions}
      />

      <SelectInput
        id="inputToOutput"
        label="Input To Output"
        value={formValues.inputToOutput}
        onChange={handleSelectChange}
        options={voltageOptions}
      />

      <SelectInput
        id="outputToOutput"
        label="Output To Output"
        value={formValues.outputToOutput}
        onChange={handleSelectChange}
        options={voltageOptions}
      />

      <SelectInput
        id="numberOfOutput"
        label="Number Of Output"
        value={formValues.numberOfOutput}
        onChange={handleSelectChange}
        options={outputOptions}
      />

      <div className="flex items-center">
        <button
          type="button"
          disabled={!allSelectsHaveValue() || isLoading}
          onClick={handleTestClick}
          className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
            allSelectsHaveValue() && !isLoading
              ? "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Test
        </button>
        {isLoading && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};
