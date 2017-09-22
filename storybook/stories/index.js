import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import CenterView from "./CenterView";
import Welcome from "./Welcome";
import Spinner from "./Spinner";
import LoginForm from "./LoginForm";
import Logo from "./Logo";
import SplashScreen from "./SplashScreen";
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));
storiesOf("Spinner", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Base Color Spinner", () => <Spinner color="#0067a0" />);
storiesOf("LoginForm", module).add("Login Form", () => (
  <LoginForm
    onPress={action("form-submitted")}
    buttonStyle={{ backgroundColor: "#eeae30" }}
    uNameLabel="UserName"
    password="Password"
    onPressForgotPassword={action("forgotPassword-clicked")}
    onPressRegisterNow={action("onPressRegisterNow-clicked")}
    ImageSource={require("../../js/assets/minion.jpg")}
  />
));
storiesOf("Common", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Logo", () => (
    <Logo
      source={require("../../js/assets/minion.jpg")}
      imageDimensions={{ width: 200, height: 300 }}
    />
  ));
storiesOf("SplashScreen", module).add("Splash", () => (
  <SplashScreen
    ImageSource={require("../../js/assets/minion.jpg")}
    ImageDimensions={{ width: 200, height: 300 }}
    color="#0067a0"
  />
));
