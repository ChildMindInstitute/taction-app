import React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import NavigationDetails from "./js/Navigator";
import store from './js/store';
const App = NavigationDetails;
export default () => (
  <Root>
    <Provider store={store}>
      <App />
    </Provider>
  </Root>
);
