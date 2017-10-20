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
    this.input = {
      userName: "",
      password: ""
    };

    this.state = {
      emailHasError: false,
      passwordHasError: false,
      hasSubmitError: false,
      submitted: false
    };
    this.Error = {
      username: "Required",
      password: "Required",
      submitError: "Please enter a valid userName and password"
    };
  }

  loginUser() {
    if (this.input.userName != "" && this.input.password != "") {
      this.props.dispatch({
        type: "USER_SIGN_IN",
        payload: {
          username: this.input.userName,
          password: this.input.password
        }
      });
    } else if (this.input.userName == "" && this.input.password == "") {
      this.setState({ submitted: false });
    }
  }

  componentDidUpdate() {
    if (this.state.submitted) {
      if (this.props.loaded && !this.props.error) {
        this.redirect();
        this.setState({ submitted: false, hasSubmitError: false });
      } else if (
        this.props.loaded &&
        this.props.error &&
        !this.state.hasSubmitError
      ) {
        {
          this.setState({
            hasSubmitError: true,
            submitted: false
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
        usernameChange={event => {
          this.input.userName = event.nativeEvent.text;
          if (this.input.userName == "") {
            this.setState({ emailHasError: true });
          } else this.setState({ emailHasError: false });
        }}
        labelColor="white"
        inputViewStyle={{ flex: 1 }}
        passwordChange={event => {
          this.input.password = event.nativeEvent.text;
          if (this.input.password == "") {
            this.setState({ passwordHasError: true });
          } else this.setState({ passwordHasError: false });
        }}
        forgotPasswordTextStyle={{ color: "white" }}
        forgotPasswordButtonStyle={{
          flex: 1,
          alignSelf: "flex-end",
          justifyContent: "flex-end"
        }}
        onPressForgotPassword={() => {
          this.props.navigation.navigate("ForgotPassword", {
            email: this.input.userName
          });
        }}
        onPressSubmitButton={(() => {
          this.setState({ submitted: true, hasSubmitError: false });
          this.loginUser();
        }).bind(this)}
        error={this.Error}
        onPressRegisterNow={() => {
          this.props.navigation.navigate("Consent");
        }}
        registerWithUsTextButtonStyle={{
          color: "white",
          fontWeight: "bold"
        }}
        registerWithUsTextStyle={{
          alignSelf: "center",
          color: "#ccc"
        }}
        submitted={this.state.submitted}
        hasSubmitError={this.state.hasSubmitError}
        emailHasError={this.state.emailHasError}
        passwordHasError={this.state.passwordHasError}
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
