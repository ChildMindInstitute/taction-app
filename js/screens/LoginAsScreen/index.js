import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import LoginAs from "../../../storybook/stories/screens/LoginAs";
const data = [{ Name: "Shubham" }, { Name: "Praneet" }, { Name: "Arno" }];
class LoginAsScreen extends Component {
  static navigationOptions = {
    title: "LoginAsScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginAs
        BackgroundColor="#0067a0"
        ListStyle={{}}
        Data={data}
        CheckBoxPress={(item, checked) => {
          if (checked && data.indexOf(item) === 0) {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    params: { NewRegistration: false },
                    routeName: "ParentDrawer"
                  })
                ]
              })
            );
          } else {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    params: { NewRegistration: false },
                    routeName: "OpeningScreen"
                  })
                ]
              })
            );
          }
        }}
      />
    );
  }
}
export default LoginAsScreen;
