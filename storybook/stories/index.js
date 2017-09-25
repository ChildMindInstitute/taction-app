import React from "react";
import { Text, View } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Welcome from "./components/Welcome";
import Spinner from "./components/Spinner";
import FormInput from "./components/FormInput";
import Logo from "./components/Logo";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import RegisterWithUs from "./components/RegisterWithUs";
import SubmitButton from "./components/Button";
import ForgotPassword from "./components/ForgotPassword";
import HeaderCommon from "./components/Header";
import Drawer from "./components/Drawer";
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("LoginForm", module)
  .add("FormInputUName", () => (
    <FormInput
      InputStyle={{ margin: "5%" }}
      Label="UserName"
      onChange={event => console.log(event.nativeEvent.text)}
      isPassword={false}
    />
  ))
  .add("FormInputPassword", () => (
    <View style={{ flex: 1 }}>
      <FormInput
        InputStyle={{ margin: "5%" }}
        Label="password"
        onChange={event => console.log(event.nativeEvent.text)}
        isPassword={true}
        InputStyle={{ backgroundColor: "white", width: "100%", height: 50 }}
        labelStyle={{ fontSize: 12, color: "white", alignSelf: "flex-start" }}
        ItemStyle={{ flex: 1, flexDirection: "column" }}
        ViewStyle={{ backgroundColor: "blue", flex: 1 }}
      />
      <View style={{ flex: 12 }} />
    </View>
  ))
  .add("RegisterWithUs", () => (
    <RegisterWithUs
      onPressRegisterNow={action("onPressRegisterNow-clicked")}
      textButtonStyle={{ color: "gray", fontWeight: "bold" }}
      textStyle={{ alignSelf: "center", marginTop: "20%" }}
    />
  ))
  .add("ForgotPassword", () => (
    <ForgotPassword
      forgotPasswordTextStyle={{ color: "gray", fontWeight: "bold" }}
      forgotPasswordButtonStyle={{
        flex: 1,
        alignSelf: "flex-end",
        justifyContent: "flex-end"
      }}
      onPressForgotPassword={action("forgotPassword-clicked")}
    />
  ))
  .add("SubmitButton", () => (
    <SubmitButton
      onPress={action("form-submitted")}
      SubmitButtonStyle={{ backgroundColor: "#eeae30" }}
      SubmitButtonTextStyle={{ color: "white" }}
    />
  ));

storiesOf("Common", module)
  .add("Logo", () => (
    <Logo
      source={require("../../js/assets/minion.jpg")}
      imageDimensions={{ width: 200, height: 300 }}
    />
  ))
  .add("Base Color Spinner", () => <Spinner color="#0067a0" />)
  .add("HeaderCommon", () => (
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={{ color: "white" }}
      leftPress={() => {}}
      leftIconName="menu"
      headerStyle={{ backgroundColor: "#0067a0" }}
    >
      <Text style={{ color: "white" }}>CustomHeader</Text>
    </HeaderCommon>
  ))
  .add("Drawer", () => <Drawer />);

storiesOf("Screens", module)
  .add("Splash", () => (
    <SplashScreen
      MainLogoSource={require("../../js/assets/minion.jpg")}
      SubLogoSource={require("../../js/assets/minion.jpg")}
      ImageDimensions={{ width: 200, height: 300 }}
      backgroundColor="#0067a0"
      color="#ccc"
    />
  ))
  .add("Login", () => (
    <Login
      MainLogoSource={require("../../js/assets/minion.jpg")}
      SubLogoSource={require("../../js/assets/minion.jpg")}
      BackgroundColor="#0067a0"
      ViewStyle={{ flex: 1 }}
      UsernameChange={event => console.log(event.nativeEvent.text)}
      InputStyle={{ backgroundColor: "white", width: "100%", height: 50 }}
      InputLabelStyle={{
        fontSize: 16,
        color: "white",
        alignSelf: "flex-start",
        marginTop: "-7%"
      }}
      InputItemStyle={{ flex: 1, flexDirection: "column" }}
      InputViewStyle={{ flex: 1, margin: "6%" }}
      PasswordChange={event => console.log(event.nativeEvent.text)}
      ForgotPasswordTextStyle={{ color: "white", fontWeight: "bold" }}
      ForgotPasswordButtonStyle={{
        flex: 1,
        alignSelf: "flex-end",
        justifyContent: "flex-end"
      }}
      OnPressForgotPassword={action("forgotPassword-clicked")}
      OnPressSubmitButton={action("form-submitted")}
      SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "5%" }}
      SubmitButtonTextStyle={{ color: "white" }}
      OnPressRegisterNow={action("onPressRegisterNow-clicked")}
      RegisterWithUsTextButtonStyle={{ color: "white", fontWeight: "bold" }}
      RegisterWithUsTextStyle={{
        alignSelf: "center",
        marginTop: "20%",
        color: "#ccc"
      }}
    />
  ));
