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
    this.UserName = "";
    this.Password = "";
    this.state = {
      EmailHasError: false,
      PasswordHasError: false,
      SubmitError: false
    };
  }
  render() {
    return (
      <Login
        BackgroundColor="#0067a0"
        ViewStyle={{ flex: 1 }}
        UsernameChange={event => {
          this.UserName = event.nativeEvent.text;
          if (this.UserName == "") {
            this.setState({ EmailHasError: true });
          } else this.setState({ EmailHasError: false });
        }}
        LabelColor="white"
        StatusBarStyle="light-content"
        InputViewStyle={{ flex: 1, margin: "3%" }}
        PasswordChange={event => {
          this.Password = event.nativeEvent.text;
          if (this.Password == "") {
            this.setState({ PasswordHasError: true });
          } else this.setState({ PasswordHasError: false });
        }}
        ForgotPasswordTextStyle={{ color: "white", fontWeight: "bold" }}
        ForgotPasswordButtonStyle={{
          flex: 1,
          alignSelf: "flex-end",
          justifyContent: "flex-end"
        }}
        OnPressForgotPassword={() => {}}
        OnPressSubmitButton={() => {
          this.setState({ SubmitError: true });
          if (this.state.SubmitError)
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    params: { NewRegistration: true },
                    routeName: "LoginAs"
                  })
                ]
              })
            );
        }}
        SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "5%" }}
        SubmitButtonTextStyle={{ color: "white" }}
        OnPressRegisterNow={() => {
          this.props.navigation.navigate("Consent");
        }}
        RegisterWithUsTextButtonStyle={{
          color: "white",
          fontWeight: "bold"
        }}
        RegisterWithUsTextStyle={{
          alignSelf: "center",
          marginTop: "20%",
          color: "#ccc"
        }}
        HasSubmitError={this.state.SubmitError}
        ErrorSubmissionText="Username and Password Do not match"
        EmailHasError={this.state.EmailHasError}
        PasswordHasError={this.state.PasswordHasError}
      />
    );
  }
}
export default LoginScreen;
