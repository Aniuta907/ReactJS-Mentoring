import React from "react";

import { DottedIconImage } from "./DottedIconImage";
import "./DottedIcon.scss";

export const DottedIcon: React.FC = () => {
  return (
    <div className="dotted-icon">
      <div className="dotted-icon-image">
        <DottedIconImage width={34} height={34} viewBox="0 0 44 44" fill="none" />
      </div>
      <div className="dotted-icon-modal dotted-icon-modal-hidden">
        <div className="dotted-icon-close-icon">X</div>
        <div className="dotted-icon-option">Edit</div>
        <div className="dotted-icon-option">Delete</div>
      </div>
    </div>
  );
};
