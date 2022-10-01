import * as React from "react";
import { appWindow } from "@tauri-apps/api/window";

interface TitleProps {}

interface TitleState {}

class Title extends React.Component<TitleProps, TitleState> {
  state = {};
  render() {
    return (
      <div data-tauri-drag-region className="titlebar">
        <div className="titlebar-button" onClick={this.minimize}>
          <img src="/minimize.svg" alt="minimize" />
        </div>
        <div className="titlebar-button" onClick={this.maximize}>
          <img src="/maximize.svg" alt="maximize" />
        </div>
        <div className="titlebar-button" onClick={this.close}>
          <img src="/close.svg" alt="close" />
        </div>
      </div>
    );
  }
  minimize = () => {
    appWindow.minimize();
  };
  maximize = () => {
    appWindow.toggleMaximize();
  };
  close = () => {
    appWindow.close();
  };
}

export default Title;
