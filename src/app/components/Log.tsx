"use client";
import React from "react";
type Props = {
  testResult: string;
  detailesResult: string;
};

export const Log: React.FC<Props> = ({ testResult, detailesResult }) => {
  const color = { red: "bg-red-300", green: "bg-green-300", white: "bg-white" };

  return (
    <div className="m-2 px-4 py-8 flex flex-col flex-wrap gap-5 border border-black rounded  shadow-xl grow">
      <div className="text-2xl text-gray-900 dark:text-white border-b-2">
        <h1>LOG RESULTS</h1>
      </div>

      <div className="mx-2 my-2 px-4 py-8 flex-1 flex-wrap border border-black rounded">
        <p className=" text-1xl">{detailesResult}</p>
      </div>

      <div className="flex justify-center items-center mx-2 my-2">
        <div
          className={`px-4 py-8 border border-black rounded ${
            testResult === "Pass"
              ? color.green
              : testResult === "Fail"
              ? color.red
              : color.white
          } w-full sm:w-96`}
        >
          <p className="text-center font-bold text-2xl">{testResult}</p>
        </div>
      </div>
    </div>
  );
};

export default Log;
