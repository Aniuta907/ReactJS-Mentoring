import React from "react";

import { DottedIconImage } from './DottedIconImage';
import './DottedIcon.scss';

export const DottedIcon = () => {
  return (
    <div className="dotted-icon">
      <div className="dotted-icon-image">
        <DottedIconImage />
      </div>
      <div className="dotted-icon-modal dotted-icon-modal-hidden">
        <div className="dotted-icon-close-icon">X</div>
        <div className="dotted-icon-option">Edit</div>
        <div className="dotted-icon-option">Delete</div>
      </div>
    </div>
  )
}