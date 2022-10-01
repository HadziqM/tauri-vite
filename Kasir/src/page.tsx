import * as React from "react";
import SideBar from "./component/SideBar";
import Home from "./component/home";
import Inventory from "./component/Inventory";
import Calculator from "./component/Calculator";
import History from "./component/History";
import Title from "./component/title";
import { Style } from "util";

interface PageProps {}

interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  styleH = {
    filter: "invert(100%)",
  };
  styleN = {
    filter: "none",
  };
  state = {
    front: <Home />,
    styles: [this.styleH, this.styleN, this.styleN, this.styleN],
  };
  render() {
    return (
      <div>
        <Title />
        {this.state.front}
        <SideBar
          histS={this.state.styles[3]}
          calcS={this.state.styles[2]}
          inventS={this.state.styles[1]}
          homeS={this.state.styles[0]}
          hist={this.histClick}
          calc={this.calcClick}
          home={this.PageClick}
          inventory={this.inventClick}
        />
      </div>
    );
  }
  inventClick = () => {
    this.setState({
      front: <Inventory />,
      styles: [this.styleN, this.styleH, this.styleN, this.styleN],
    });
  };
  PageClick = () => {
    this.setState({
      front: <Home />,
      styles: [this.styleH, this.styleN, this.styleN, this.styleN],
    });
  };
  histClick = () => {
    this.setState({
      front: <History />,
      styles: [this.styleN, this.styleN, this.styleN, this.styleH],
    });
  };
  calcClick = () => {
    this.setState({
      front: <Calculator />,
      styles: [this.styleN, this.styleN, this.styleH, this.styleN],
    });
  };
}

export default Page;
