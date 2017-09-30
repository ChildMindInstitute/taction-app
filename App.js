import React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import NavigationDetails from "./js/Navigator";
const App = NavigationDetails;
export default () => (
  <Root>
    <App />
  </Root>
);
