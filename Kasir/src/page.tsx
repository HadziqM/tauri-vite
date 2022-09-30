import * as React from "react";
import SideBar from "./component/SideBar";
import Home from "./component/home";
import Inventory from "./component/Inventory";
import Calculator from "./component/Calculator";
import History from "./component/History";

interface PageProps {}

interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  state = { front: <Home /> };
  render() {
    return (
      <div>
        {this.state.front}
        <SideBar
          hist={this.histClick}
          calc={this.calcClick}
          home={this.PageClick}
          inventory={this.inventClick}
        />
      </div>
    );
  }
  inventClick = () => {
    this.setState({ front: <Inventory /> });
  };
  PageClick = () => {
    this.setState({ front: <Home /> });
  };
  histClick = () => {
    this.setState({ front: <History /> });
  };
  calcClick = () => {
    this.setState({ front: <Calculator /> });
  };
}

export default Page;
