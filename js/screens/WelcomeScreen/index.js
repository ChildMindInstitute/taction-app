import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import Welcome from "../../../storybook/stories/screens/Welcome";
import Expo from "expo";
class WelcomeScreen extends Component {
  static navigationOptions = {
    title: "WelcomeScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Welcome
        OnPressSubmitButton={() =>
          this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  params: { NewRegistration: "true" },
                  routeName: "ParentDrawer"
                })
              ]
            })
          )}
        SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "5%" }}
        SubmitButtonTextStyle={{ color: "white", fontWeight: "500" }}
        StatusBarStyle="light-content"
      />
    );
  }
}
export default WelcomeScreen;
