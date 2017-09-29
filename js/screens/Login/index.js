import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import Login from "../../../storybook/stories/screens/Login";
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
      <Login
        BackgroundColor="#0067a0"
        ViewStyle={{ flex: 1 }}
        UsernameChange={event => console.log(event.nativeEvent.text)}
        InputStyle={{
          width: "102%",
          backgroundColor: "white"
        }}
        InputLabelStyle={{
          fontSize: 16,
          color: "white",
          alignSelf: "flex-start",
          marginTop: "-13%"
        }}
        InputItemStyle={{
          flex: 1,
          flexDirection: "column"
        }}
        InputViewStyle={{ flex: 1, margin: "6%" }}
        PasswordChange={event => console.log(event.nativeEvent.text)}
        ForgotPasswordTextStyle={{ color: "white", fontWeight: "bold" }}
        ForgotPasswordButtonStyle={{
          flex: 1,
          alignSelf: "flex-end",
          justifyContent: "flex-end"
        }}
        OnPressForgotPassword={() => {}}
        OnPressSubmitButton={() => {}}
        SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "5%" }}
        SubmitButtonTextStyle={{ color: "white" }}
        OnPressRegisterNow={() => this.props.navigation.navigate("Consent")}
        RegisterWithUsTextButtonStyle={{
          color: "white",
          fontWeight: "bold"
        }}
        RegisterWithUsTextStyle={{
          alignSelf: "center",
          marginTop: "20%",
          color: "#ccc"
        }}
      />
    );
  }
}
export default LoginScreen;
