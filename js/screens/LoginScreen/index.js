import React from "react";
import { NavigationActions } from "react-navigation";
import Login from "../../../storybook/stories/screens/Login";
import { connect } from "react-redux";

@connect(store => {
  return { loaded: store.loaded, user: store.user };
})
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "LoginScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.Input = {
      UserName: "",
      Password: ""
    };

    this.state = {
      EmailHasError: false,
      PasswordHasError: false,
      HasSubmitError: false
    };
    this.Error = {
      Username: "Required",
      Password: "Required",
      SubmitError: "Invalid Credentials"
    };
  }

  loginUser(){
    this.props.dispatch({type: "USER_SIGN_IN", payload:{ username: this.Input.UserName, password: this.Input.Password} });
    if(this.props.loaded){
      this.navigate();
    } else {
      this.setState({ HasSubmitError: true });
    }
  }

  navigate() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "LoginAs" })]
      })
    );
  }

  render() {
    return (
      <Login
        UsernameChange={event => {
          this.Input.UserName = event.nativeEvent.text;
          if (this.Input.UserName == "") {
            this.setState({ EmailHasError: true });
          } else this.setState({ EmailHasError: false });
        }}
        LabelColor="white"
        StatusBarStyle="light-content"
        InputViewStyle={{ flex: 1, margin: "3%" }}
        PasswordChange={event => {
          this.Input.Password = event.nativeEvent.text;
          if (this.Input.Password == "") {
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
          this.loginUser();
        }}
        Error={this.Error}
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
        HasSubmitError={this.state.HasSubmitError}
        EmailHasError={this.state.EmailHasError}
        PasswordHasError={this.state.PasswordHasError}
      />
    );
  }
}
export default LoginScreen;
