// ConfigureTest.tsx
import React from "react";
import { SelectInput } from "./SelectInput";

type ConfigureTestProps = {
  outputToChassis: string;
  setOutputToChassis: (value: string) => void;
  inputToChassis: string;
  setInputToChassis: (value: string) => void;
  inputToOutput: string;
  setInputToOutput: (value: string) => void;
  outputToOutput: string;
  setOutputToOutput: (value: string) => void;
  numberOfOutput: string;
  setNumberOfOutput: (value: string) => void;
  isLoading: boolean;
  allSelectsHaveValue: () => boolean;
  handleTestClick: () => void;
  voltageOptions: { value: string; label: string }[];
  outputOptions: { value: string; label: string }[];
};

export const ConfigureTest: React.FC<ConfigureTestProps> = ({
  outputToChassis,
  setOutputToChassis,
  inputToChassis,
  setInputToChassis,
  inputToOutput,
  setInputToOutput,
  outputToOutput,
  setOutputToOutput,
  numberOfOutput,
  setNumberOfOutput,
  isLoading,
  allSelectsHaveValue,
  handleTestClick,
  voltageOptions,
  outputOptions,
}) => {
  return (
    <div className="mx-2 my-2 px-4 py-8 flex flex-col flex-wrap gap-5   rounded w-auto  bg-white/30 shadow-xl">
      <div className="border-b-2 pb-2 mb-4 ">
        <h1 className="text-2xl text-gray-900 dark:text-white">
          Configure Isolation Test
        </h1>
      </div>

      <SelectInput
        id="outputToChassis"
        label="Output To Chassis"
        value={outputToChassis}
        onChange={(e) => setOutputToChassis(e.target.value)}
        options={voltageOptions}
      />

      <SelectInput
        id="inputToChassis"
        label="Input To Chassis"
        value={inputToChassis}
        onChange={(e) => setInputToChassis(e.target.value)}
        options={voltageOptions}
      />

      <SelectInput
        id="inputToOutput"
        label="Input To Output"
        value={inputToOutput}
        onChange={(e) => setInputToOutput(e.target.value)}
        options={voltageOptions}
      />

      <SelectInput
        id="outputToOutput"
        label="Output To Output"
        value={outputToOutput}
        onChange={(e) => setOutputToOutput(e.target.value)}
        options={voltageOptions}
      />

      <SelectInput
        id="numberOfOutput"
        label="Number Of Output"
        value={numberOfOutput}
        onChange={(e) => setNumberOfOutput(e.target.value)}
        options={outputOptions}
      />

      <div className="flex items-center">
        <button
          type="button"
          disabled={!allSelectsHaveValue() || isLoading}
          onClick={handleTestClick}
          className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex gap-2 ${
            allSelectsHaveValue() && !isLoading
              ? "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Test
          <svg
            className="invert "
            height="20px"
            version="1.1"
            viewBox="0 0 32 32"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_1" />
            <g id="play_x5F_alt">
              <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M10,24V8l16.008,8L10,24z   " />
            </g>
          </svg>
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
