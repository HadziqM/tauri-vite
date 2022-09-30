import * as React from "react";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  state = {};
  render() {
    return (
      <div className="bg-yellow-100 dark:bg-gray-800 flex flex-col justify-center items-center space-y-4 w-3/4 h-screen absolute top-0 right-0 transition duration-500">
        <h1 className="dark:text-white">This Is HomePage</h1>
      </div>
    );
  }
}

export default Home;
