import React from "react";
import { render } from "react-dom";

import MyReactComponent from "./components/myReactComponent";

if (document.getElementById("reactComponentDemo")) {
  render(<MyReactComponent />, document.getElementById("reactComponentDemo"));
}
