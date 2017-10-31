import React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import NavigationDetails from "./js/Navigator";
import store from "./js/store";
import Orientation from "react-native-orientation";
class App extends React.Component {
  componentWillMount() {
    Orientation.lockToPortrait();
  }
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
