"use client";
import { useState } from "react";
import { ConfigureTest } from "@/app/components/ConfigureTest";
import { Log } from "@/app/components/Log";
import { InputOutputs } from "@/app/components/InputOutputs";
import { Header } from "@/app/components/Header";

export default function ConfigureTestPage() {
  const [numberOfOutput, setNumberOfOutput] = useState<string>("");
  const [testResult, setTestResult] = useState<string>("Fail");

  const testResults: { [key: string]: "Pass" | "Fail" } = {
    Chassis: "Pass",
    Input: "Fail",
    "Output 1": "Pass",
    "Output 2": "Pass",
    "Output 3": "Fail",
    // ... any other results
  };
  const detailesResult =
    "There has been leakage detected from Input to Output 3.";

  return (
    <div>
      <div className="flex flex-col">
        <Header />
        <div className="flex  gap-2">
          <ConfigureTest setNumberOfOutput={setNumberOfOutput} />
          <Log testResult={testResult} detailesResult={detailesResult} />
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
