"use client";
import React from "react";

type Props = {
  Output: number;
  testResults: { [key: string]: "Pass" | "Fail" };
};

export const InputOutputs: React.FC<Props> = ({ Output, testResults }) => {
  const getColor = (result: string | undefined) => {
    if (result === "Pass") return "bg-green-300";
    if (result === "Fail") return "bg-red-300";
    return "bg-white";
  };

  const array = ["Chassis", "Input"];

  const numbers = Array.from({ length: Output + 2 }, (_, index) => {
    const id = index < 2 ? array[index] : `Output ${index - 1}`;
    const result = testResults[id];
    const bgColor = getColor(result);

    return (
      <div
        id={id}
        key={index}
        className={`px-4 py-8 border border-black rounded ${bgColor}`}
      >
        <p className="text-center font-bold sm:text-2xl">{id}</p>
        {result && <p className="text-center mt-2">{result}</p>}
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-start gap-2 m-2 p-2">{numbers}</div>
  );
};
