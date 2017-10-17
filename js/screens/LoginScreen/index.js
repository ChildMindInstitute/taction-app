import React from "react";
import { Toast } from "native-base";
import { NavigationActions } from "react-navigation";
import Login from "../../../storybook/stories/screens/Login";
import { connect } from "react-redux";

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
      HasSubmitError: false,
      Submitted: false
    };
    this.Error = {
      Username: "Required",
      Password: "Required",
      SubmitError: "Please enter a valid userName and password"
    };
  }

  loginUser() {
    if (this.Input.UserName != "" && this.Input.Password != "") {
      this.props.dispatch({
        type: "USER_SIGN_IN",
        payload: {
          username: this.Input.UserName,
          password: this.Input.Password
        }
      });
    } else if (this.Input.UserName == "" && this.Input.Password == "") {
      this.setState({ Submitted: false });
    }
  }

  componentDidUpdate() {
    if (this.state.Submitted) {
      if (this.props.loaded && !this.props.error) {
        this.redirect();
        this.setState({ Submitted: false, HasSubmitError: false });
      } else if (
        this.props.loaded &&
        this.props.error &&
        !this.state.HasSubmitError
      ) {
        {
          this.setState({
            HasSubmitError: true,
            Submitted: false
          });
        }
      }
    }
  }

  redirect() {
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
        InputViewStyle={{ flex: 1 }}
        PasswordChange={event => {
          this.Input.Password = event.nativeEvent.text;
          if (this.Input.Password == "") {
            this.setState({ PasswordHasError: true });
          } else this.setState({ PasswordHasError: false });
        }}
        ForgotPasswordTextStyle={{ color: "white" }}
        ForgotPasswordButtonStyle={{
          flex: 1,
          alignSelf: "flex-end",
          justifyContent: "flex-end"
        }}
        OnPressForgotPassword={() => {
          this.props.dispatch({
            type: "RESET_PASSWORD",
            payload: this.Input.UserName
          });
          Toast.show({
            text: "A password reset mail has been sent!",
            position: "bottom",
            buttonText: "Okay"
          });
        }}
        OnPressSubmitButton={(() => {
          this.setState({ Submitted: true, HasSubmitError: false });
          this.loginUser();
        }).bind(this)}
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
          color: "#ccc"
        }}
        Submitted={this.state.Submitted}
        HasSubmitError={this.state.HasSubmitError}
        EmailHasError={this.state.EmailHasError}
        PasswordHasError={this.state.PasswordHasError}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    loaded: store.loaded.userLoaded,
    user: store.user,
    error: store.error.signinError
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
