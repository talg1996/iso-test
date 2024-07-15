"use client";
import { useState } from "react";

type FormValues = {
  outputToChassis: string;
  inputToChassis: string;
  inputToOutput: string;
  outputToOutput: string;
  numberOfOutput: string;
};

export const useConfigureTest = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    outputToChassis: "",
    inputToChassis: "",
    inputToOutput: "",
    outputToOutput: "",
    numberOfOutput: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const allSelectsHaveValue = () => {
    return Object.values(formValues).every((value) => value !== "");
  };

  const handleTestClick = async () => {
    setIsLoading(true);
    try {
      const payload = {
        OutputToChassis: parseInt(formValues.outputToChassis),
        InputToChassis: parseInt(formValues.inputToChassis),
        InputToOutput: parseInt(formValues.inputToOutput),
        OutputToOutput: parseInt(formValues.outputToOutput),
        NumberOfOutput: parseInt(formValues.numberOfOutput),
      };

      const response = await fetch("http://localhost:5215/api/Isolation/Test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.text(); // Change this to .text() if the response is not JSON
      console.log(data);
      // Handle successful response
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formValues,
    isLoading,
    handleSelectChange,
    allSelectsHaveValue,
    handleTestClick,
  };
};
