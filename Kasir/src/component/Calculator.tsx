import * as React from "react";

interface CalculatorProps {}

interface CalculatorState {}

class Calculator extends React.Component<CalculatorProps, CalculatorState> {
  state = {};
  render() {
    return (
      <div className="bg-white dark:bg-gray-800 flex flex-col justify-center items-center pl-10 w-full h-screen transition duration-500">
        <h1 className="dark:text-white">This Is Calculator</h1>
      </div>
    );
  }
}

export default Calculator;
