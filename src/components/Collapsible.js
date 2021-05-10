import React from "react";
import "./Collapsible.scss";

const Collapsible = ({ summary, children }) => {
  return (
    <details>
      <summary>{summary}</summary>
      {children}
    </details>
  );
};

export default Collapsible;
