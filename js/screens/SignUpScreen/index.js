import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import SignUp from "../../../storybook/stories/screens/SignUp";
import {connect} from 'react-redux';

var username, email, password, cnfpassword;

@connect(store=>{
  return{
    consent: store.consent,
    user: store.user
  }
})
class LoginScreen extends Component {
  static navigationOptions = {
    title: "LoginScreen",
    header: null
  };
  constructor(props) {
    super(props);
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
        UsernameChange={event => username= event.nativeEvent.text}
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
        PasswordChange={event => password=event.nativeEvent.text}
        OnPressSubmitButton={() => this.signUp()}
        SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "3%" }}
        SubmitButtonTextStyle={{ color: "white" }}
        StatusBarStyle="light-content"
        ConfirmPasswordChange={event => cnfpassword= event.nativeEvent.text}
        EmailChange={event => email= event.nativeEvent.text}
      />
    );
  }
}
export default LoginScreen;
