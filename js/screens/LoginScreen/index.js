import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import Login from "../../../storybook/stories/screens/Login";
import {connect} from 'react-redux';

var userName;
var password;


@connect(store=>{
  return{
    user: store.user.parent,
    loaded: store.loaded
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

  loginUser(){
    this.props.dispatch({type: "USER_SIGN_IN", payload:{ username: userName, password: password} });
    if(this.props.loaded){
      this.navigate();
    }
  }

  navigate(){
      this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "LoginAs" })]
        }));
  }

  // componentWillMount(){
  //   if (this.props.loaded) {
  //     this.navigate();
  //   }
  // }

  render() {    
    return (
      <Login
        BackgroundColor="#0067a0"
        ViewStyle={{ flex: 1 }}
        UsernameChange={event => userName=event.nativeEvent.text}
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
        StatusBarStyle="light-content"
        InputViewStyle={{ flex: 1, margin: "3%" }}
        PasswordChange={event => password= event.nativeEvent.text}
        ForgotPasswordTextStyle={{ color: "white", fontWeight: "bold" }}
        ForgotPasswordButtonStyle={{
          flex: 1,
          alignSelf: "flex-end",
          justifyContent: "flex-end"
        }}
        OnPressForgotPassword={() => {}}
        OnPressSubmitButton={() => {
          this.loginUser();
          {/* this.props.navigation.navigate("LoginAs"); */}
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
      />
    );
  }
}
export default LoginScreen;
