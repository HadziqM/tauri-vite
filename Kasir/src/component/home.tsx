import * as React from "react";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  state = {};
  render() {
    return (
      <div className="bg-white dark:bg-gray-800 flex flex-col justify-center items-center pl-10 w-full h-screen transition duration-500">
        <div className="row">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo vite" alt="Vite logo" />
          </a>
          <a href="https://tauri.app" target="_blank">
            <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src="/react.svg" className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
