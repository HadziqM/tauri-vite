import * as React from "react";
import SideBar from "./component/SideBar";
import Home from "./component/home";

interface PageProps {}

interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  render() {
    return (
      <div>
        <Home />
        <SideBar />
      </div>
    );
  }
}

export default Page;
