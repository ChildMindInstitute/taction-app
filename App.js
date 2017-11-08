import React from "react";
import { Provider } from "react-redux";
import { Root, Button } from "native-base";
import NavigationDetails from "./js/Navigator";
import { NetInfo, Dimensions, View, Text } from "react-native";
import store from "./js/store";
import Orientation from "react-native-orientation";
console.ignoredYellowBox = ["Setting a timer", "Warning: Can only update"];
let { height, width } = Dimensions.get("screen");
class App extends React.Component {
  state = {
    isConnected: false
  };
  componentWillMount() {
    Orientation.lockToPortrait();
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange.bind(this)
    );
  }
  handleConnectivityChange(isConnected) {
    {
      isConnected
        ? this.setState({ isConnected: true })
        : this.setState({ isConnected: false });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Root>
          <Provider store={store}>
            <NavigationDetails />
          </Provider>
        </Root>
        {this.state.isConnected ? (
          true
        ) : (
          <Button
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.4)"
            }}
            disabled
          >
            <View
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "rgba(0,0,0,1)",
                alignSelf: "flex-end",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "white"
                }}
              >
                Please enable internet connection
              </Text>
            </View>
          </Button>
        )}
      </View>
    );
  }
}
export default App;
