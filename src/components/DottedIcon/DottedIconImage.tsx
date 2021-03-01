import React from "react";

export const DottedIconImage: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill={props.fill}
      {...props}
    >
      <circle cx={20} cy={20} r={20} fill="#232323" />
      <circle cx={20} cy={29.5} r={2.2} fill="#ffffff" />
      <circle cx={20} cy={21.5} r={2.2} fill="#ffffff" />
      <circle cx={20} cy={13.5} r={2.2} fill="#ffffff" />
    </svg>
  );
};
