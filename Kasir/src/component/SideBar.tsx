import * as React from "react";

interface SideBarProps {}

interface SideBarState {}

class SideBar extends React.Component<SideBarProps, SideBarState> {
  render() {
    return (
      <div className="bg-blue-400 dark:bg-blue-900 flex flex-col justify-start items-center space-y-4 w-1/4 h-screen absolute top-0 left-0 py-4 px-4">
        <div className="relative w-full flex justify-start">
          <button
            onClick={this.chState}
            className="bg-gray-800 text-white dark:bg-yellow-100 dark:text-gray-700 rounded-lg px-2 py-2 shadow-md shadow-black active:translate-y-1"
          >
            <span className="hidden dark:inline-block">🌑</span>
            <span className="inline-block dark:hidden">🌕</span>
          </button>
        </div>
        <div className="relative w-full flex flex-col items-center pt-10">
          <h1 className="font-bold dark:text-white text-xl hover:bg-white hover:bg-opacity-20 hover:rounded-lg w-full text-center cursor-pointer">
            Home
          </h1>
        </div>
      </div>
    );
  }
  chState = () => {
    document.documentElement.classList.toggle("dark");
  };
}

export default SideBar;
