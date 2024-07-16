// InputOutputs.tsx
"use client";
import React from "react";

type Props = {
  Output: number;
  testResults: { [key: string]: "Pass" | "Fail" | null | undefined };
};

export const InputOutputs: React.FC<Props> = ({ Output, testResults }) => {
  const getColor = (
    result: string | undefined | null
  ):
    | "bg-gradient-to-r from-green-500 via-green-400 to-green-500"
    | "bg-gradient-to-r from-red-500 via-red-400 to-red-500"
    | "bg-white dark:bg-gray-700" => {
    if (result === "Pass")
      return "bg-gradient-to-r from-green-500 via-green-400 to-green-500";
    if (result === "Fail")
      return "bg-gradient-to-r from-red-500 via-red-400 to-red-500";
    return "bg-white dark:bg-gray-700";
  };
  const array: string[] = ["Chassis", "Input"];

  const numbers = Array.from({ length: Output + 2 }, (_, index) => {
    const id = index < 2 ? array[index] : `Output ${index - 1}`;
    const result = testResults[id];
    const bgColor = getColor(result);

    return (
      <div
        id={id}
        key={index}
        className={`m-2 px-4 py-8 border border-black rounded ${bgColor} hover:scale-125 transition-transform duration-300`}
      >
        <p className="text-center font-bold sm:text-2xl">{id}</p>
        {result && <p className="text-center mt-2">{result}</p>}
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-start gap-2 m-2 p-2 dark:text-white">
      {numbers}
    </div>
  );
};
