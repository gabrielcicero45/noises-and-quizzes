import React, { Fragment } from "react";
import {GlobalStyle} from "./ui/theme/globalStyles";
import Content from "./ui/components/Content";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Content />
    </Fragment>
  );
}

export default App;
