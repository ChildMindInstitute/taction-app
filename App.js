import React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import { StatusBar } from "react-native";
import NavigationDetails from "./js/Navigator";
import store from "./js/store";
class App extends React.Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <Root>
        <Provider store={store}>
          <NavigationDetails />
        </Provider>
      </Root>
    );
  }
}
export default App;
