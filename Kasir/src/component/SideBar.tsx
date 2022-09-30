import * as React from "react";

interface SideBarProps {
  inventory: any;
  home: any;
  calc: any;
  hist: any;
}

interface SideBarState {}

class SideBar extends React.Component<SideBarProps, SideBarState> {
  render() {
    return (
      <div className="dark:bg-blue-900 flex flex-col justify-start items-center w-16 h-screen absolute top-0 left-0 py-4 px-2 hover:w-40 group transition-all duration-75 bg-sky-400">
        <button
          onClick={this.chState}
          className="bg-sky-700 text-white dark:text-gray-400 rounded-lg px-2 py-2 shadow-md shadow-black active:translate-y-1 group-hover:w-36"
        >
          <span className="hidden dark:flex">
            🌑
            <span className="pl-4 hidden group-hover:block text-white font-semibold">
              Dark
            </span>
          </span>
          <span className="flex dark:hidden">
            🌕
            <span className="pl-4 hidden group-hover:block font-semibold">
              Light
            </span>
          </span>
        </button>
        <div className="relative w-full flex flex-col items-center pt-10 text-black gap-4">
          <a
            onClick={this.props.home}
            target="_blank"
            className="flex items-center py-2 px-2 rounded-lg w-full cursor-pointer hover:bg-white hover:bg-opacity-20"
          >
            <img src="/home.svg" className="h-8 w-8 mr-6" />
            <span className="text-center hidden group-hover:block font-semibold text-black dark:text-white">
              Home
            </span>
          </a>
          <a
            onClick={this.props.inventory}
            target="_blank"
            className="flex items-center py-2 px-2 rounded-lg w-full cursor-pointer hover:bg-white hover:bg-opacity-20"
          >
            <img src="/inventory.svg" className="h-8 w-8 mr-6" />
            <span className="text-center hidden group-hover:block font-semibold dark:text-white text-black">
              Inventory
            </span>
          </a>
          <a
            onClick={this.props.calc}
            target="_blank"
            className="flex items-center py-2 px-2 rounded-lg w-full cursor-pointer hover:bg-white hover:bg-opacity-20"
          >
            <img src="/calculator.svg" className="h-8 w-8 mr-4" />
            <span className="text-center hidden group-hover:block font-semibold dark:text-white text-black">
              Calculator
            </span>
          </a>
          <a
            onClick={this.props.hist}
            target="_blank"
            className="flex items-center py-2 px-2 rounded-lg w-full cursor-pointer hover:bg-white hover:bg-opacity-20"
          >
            <img src="/history.svg" className="h-8 w-8 mr-6" />
            <span className="text-center hidden group-hover:block font-semibold dark:text-white text-black">
              History
            </span>
          </a>
        </div>
      </div>
    );
  }
  chState = () => {
    document.documentElement.classList.toggle("dark");
  };
}

export default SideBar;
