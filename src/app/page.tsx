"use client";
import { useState, useEffect } from "react";
import { ConfigureTest } from "@/app/components/ConfigureTest";
import { Log } from "@/app/components/Log";
import { InputOutputs } from "@/app/components/InputOutputs";
import { Header } from "@/app/components/Header";

const voltageOptions = [
  { value: "50", label: "50 Volt" },
  { value: "100", label: "100 Volt" },
  { value: "200", label: "200 Volt" },
  { value: "500", label: "500 Volt" },
  { value: "1000", label: "1000 Volt" },
  { value: "1500", label: "1500 Volt" },
];

const outputOptions = Array.from({ length: 30 }, (_, i) => ({
  value: `${i + 1}`,
  label: `${i + 1}`,
}));

export default function ConfigureTestPage() {
  const [outputToChassis, setOutputToChassis] = useState<string>("");
  const [inputToChassis, setInputToChassis] = useState<string>("");
  const [inputToOutput, setInputToOutput] = useState<string>("");
  const [outputToOutput, setOutputToOutput] = useState<string>("");
  const [numberOfOutput, setNumberOfOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [passOrFail, setPassOrFail] = useState<string>("Wait test");
  const [testResults, setTestResults] = useState<{
    [key: string]: "Pass" | "Fail";
  }>({});
  const [detailsResult, setDetailsResult] = useState<string>("");

  const allSelectsHaveValue = (): boolean => {
    return (
      outputToChassis !== "" &&
      inputToChassis !== "" &&
      inputToOutput !== "" &&
      outputToOutput !== "" &&
      numberOfOutput !== ""
    );
  };

  const handleTestClick = async () => {
    setIsLoading(true);
    setPassOrFail("Wait for test");
    setTestResults({});
    setDetailsResult("Wait for test");

    try {
      const payload = {
        OutputToChassis: parseInt(outputToChassis),
        InputToChassis: parseInt(inputToChassis),
        InputToOutput: parseInt(inputToOutput),
        OutputToOutput: parseInt(outputToOutput),
        NumberOfOutput: parseInt(numberOfOutput),
      };

      const response = await fetch("http://localhost:5215/api/Isolation/Test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setTestResults(data.testResults);
      setDetailsResult(data.detailsResult);
      setPassOrFail(data.passOrFail);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dark:text-white">
      <div className="flex flex-col">
        <Header />
        <div className="flex gap-2">
          <ConfigureTest
            outputToChassis={outputToChassis}
            setOutputToChassis={setOutputToChassis}
            inputToChassis={inputToChassis}
            setInputToChassis={setInputToChassis}
            inputToOutput={inputToOutput}
            setInputToOutput={setInputToOutput}
            outputToOutput={outputToOutput}
            setOutputToOutput={setOutputToOutput}
            numberOfOutput={numberOfOutput}
            setNumberOfOutput={setNumberOfOutput}
            isLoading={isLoading}
            allSelectsHaveValue={allSelectsHaveValue}
            handleTestClick={handleTestClick}
            voltageOptions={voltageOptions}
            outputOptions={outputOptions}
          />
          <Log testResult={passOrFail} detailesResult={detailsResult} />
        </div>
        <div>
          <InputOutputs
            Output={numberOfOutput ? parseInt(numberOfOutput) : 1}
            testResults={testResults}
          />
        </div>
      </div>
    </div>
  );
}
