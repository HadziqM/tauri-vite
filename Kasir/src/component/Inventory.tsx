import * as React from "react";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  state = {};
  render() {
    return (
      <div className="bg-white dark:bg-gray-800 flex flex-col justify-center items-center pl-10 w-full h-screen transition duration-500">
        <h1 className="dark:text-white">This Is Inventory</h1>
      </div>
    );
  }
}

export default Home;
