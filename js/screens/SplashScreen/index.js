import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import SplashScreen from "../../../storybook/stories/screens/SplashScreen";
import Expo from "expo";
class Splash extends Component {
  static navigationOptions = {
    title: "Splash",
    header: null
  };
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf")
    });
  }

  render() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })]
        })
      );
    }, 3000);
    return (
      <SplashScreen
        ImageDimensions={{ width: 200, height: 300 }}
        backgroundColor="#0067a0"
        color="#ccc"
        StatusBarStyle="light-content"
      />
    );
  }
}
export default Splash;
