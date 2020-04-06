import React from "react";
import Aux from "../../hoc/Auxilaxy.js";

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, Side drawer, Back drop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
