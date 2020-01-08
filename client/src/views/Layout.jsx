import React from "react";

const layout = props => {
  return (
    <div>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
};

export default layout;
