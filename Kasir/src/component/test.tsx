import React, { PureComponent } from "react";

interface TestProps {}

interface TestState {}

class Test extends React.Component<TestProps, TestState> {
  render() {
    return (
      <div className="bg-yellow-100 dark:bg-gray-800 flex flex-col justify-center items-center space-y-4 w-screen h-screen">
        <p>
          <span className="inline-block dark:hidden text-black">
            Light Mode
          </span>
          <span className="hidden dark:inline-block text-white">Dark Mode</span>
        </p>
        <button
          onClick={this.chState}
          className="bg-gray-800 text-white dark:bg-yellow-100 dark:text-gray-700 rounded px-4 py-2"
        >
          Switch theme
          <span className="hidden dark:inline-block">🌑</span>
          <span className="inline-block dark:hidden">🌕</span>
        </button>
      </div>
    );
  }
  chState = () => {
    document.documentElement.classList.toggle("dark");
  };
}

export default Test;
