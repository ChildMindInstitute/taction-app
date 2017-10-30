import React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import NavigationDetails from "./js/Navigator";
import store from "./js/store";
console.ignoredYellowBox = ["Setting a timer", "Warning: Can only update"];
class App extends React.Component {
  render() {
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
