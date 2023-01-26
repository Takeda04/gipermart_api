import React from "react";

const Title = ({ title, style }) => {
  return <div className={`title ${style}`}>{title}</div>;
};

export default Title;
