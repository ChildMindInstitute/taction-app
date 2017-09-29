import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import SignUp from "../../../storybook/stories/screens/SignUp";
class LoginScreen extends Component {
  static navigationOptions = {
    title: "LoginScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SignUp
        BackgroundColor="#0067a0"
        UsernameChange={event => console.log(event.nativeEvent.text)}
        InputStyle={{
          width: "102%",
          backgroundColor: "white"
        }}
        InputLabelStyle={{
          fontSize: 16,
          color: "white",
          alignSelf: "flex-start"
        }}
        InputItemStyle={{
          flex: 1,
          flexDirection: "column",
          borderColor: "transparent"
        }}
        InputViewStyle={{
          flex: 1,
          margin: "2.5%",
          marginLeft: "5%",
          marginRight: "5%"
        }}
        PasswordChange={event => console.log(event.nativeEvent.text)}
        OnPressSubmitButton={() =>
          this.props.navigation.navigate("AlmostThere")}
        SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "3%" }}
        SubmitButtonTextStyle={{ color: "white" }}
        ConfirmPassword={event => console.log(event.nativeEvent.text)}
        ChangeEmailChange={event => console.log(event.nativeEvent.text)}
      />
    );
  }
}
export default LoginScreen;
