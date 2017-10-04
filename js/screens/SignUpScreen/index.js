import React from "react";
import SignUp from "../../../storybook/stories/screens/SignUp";
import {connect} from 'react-redux';

var username, email, password, cnfpassword;


const RegExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
@connect(store=>{
  return{
    consent: store.consent,
    user: store.user
  }
})
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "LoginScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.Input = {
      ConfirmPassword: "",
      Password: "",
      Email: "",
      Username: ""
    };
    this.state = {
      ConfirmPasswordError: false,
      PasswordError: false,
      EmailError: false,
      UsernameError: false
    };
    this.Error = {
      ConfirmPassword: "Must Match Password",
      Password: "Required",
      Email: "Invalid Email ID",
      Username: "Username Already Taken"
    };
  }

  signUp(){
    if(password== cnfpassword){
      this.props.dispatch({type:"USER_SIGNUP", payload:{
        consent: this.props.consent,
        username: username,
        email: email,
        password: password
      }});
      this.props.navigation.navigate("AlmostThere");
    }else{
      console.log(username+":"+email+":"+password, "logging user data")
      alert("password mismatch !!!");
    }
  }

  render() {
    return (
      <SignUp
        BackgroundColor="#0067a0"
        UsernameChange={event => {
          this.Input.Username = event.nativeEvent.text;
          if (this.Input.Username == "") {
            this.setState({ UsernameError: true });
          } else {
            this.setState({ UsernameError: false });
          }
        }}
        InputViewStyle={{
          flex: 1,
          margin: "2.5%",
          marginLeft: "5%",
          marginRight: "5%"
        }}
        PasswordChange={event => {
          this.Input.Password = event.nativeEvent.text;
          if (this.Input.Password == "") {
            this.setState({ PasswordError: true });
          } else {
            this.setState({ PasswordError: false });
            if (this.Input.Password == this.Input.ConfirmPassword) {
              this.setState({ ConfirmPasswordError: false });
            }
          }
        }}
        OnPressSubmitButton={() =>
          this.props.navigation.navigate("AlmostThere")}
        StatusBarStyle="light-content"
        ConfirmPasswordChange={event => {
          this.Input.ConfirmPassword = event.nativeEvent.text;
          if (
            this.Input.ConfirmPassword == this.Input.Password &&
            this.Input.Password != ""
          ) {
            this.setState({ ConfirmPasswordError: false });
          } else if (this.Input.Password == "") {
            this.setState({ ConfirmPasswordError: true });
            this.setState({ PasswordError: true });
          } else {
            this.setState({ ConfirmPasswordError: true });
          }
        }}
        EmailChange={event => {
          this.Input.Email = event.nativeEvent.text;
          if (RegExEmail.test(this.Input.Email)) {
            this.setState({ EmailError: false });
          } else {
            this.setState({ EmailError: true });
          }
        }}
        ConfirmPasswordError={this.state.ConfirmPasswordError}
        PasswordError={this.state.PasswordError}
        EmailError={this.state.EmailError}
        UsernameError={this.state.UsernameError}
        Error={this.Error}
      />
    );
  }
}
export default LoginScreen;
