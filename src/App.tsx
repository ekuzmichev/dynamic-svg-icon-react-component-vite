import React, { FC } from "react";
import "./App.css";
import AlignCenterIcon from "./assets/align-center.svg?react";
import AlignJustifyIcon from "./assets/align-justify.svg?react";
import AlignRightIcon from "./assets/align-left.svg?react";
import { AddIcon } from "./individual-icon-components/AddIcon";
import { AddressBookIcon } from "./individual-icon-components/AddressBookIcon";
import { AlarmClockIcon } from "./individual-icon-components/AlarmClockIcon";

export const App: FC = () => {
  return (
    <div className="container">
      <div className="example">
        <p>Manual component with SVG code inside:</p>
        <div className="icons-container">
          <AddIcon />
          <AddressBookIcon />
          <AlarmClockIcon />
        </div>
      </div>
      <div className="example">
        <p>Imported as ReactComponent from assets:</p>
        <div className="icons-container">
          <AlignRightIcon />
          <AlignCenterIcon />
          <AlignJustifyIcon />
        </div>
      </div>
      <div className="example">
        <p>Dynamic SVG Icon component:</p>
        <div className="icons-container"></div>
      </div>
    </div>
  );
};
