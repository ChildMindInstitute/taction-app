import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { Root } from "native-base";
import Splash from "./js/screens/SplashScreen";
import LoginScreen from "./js/screens/LoginScreen";
import ConsentScreen from "./js/screens/ConsentScreen";
import SignUpScreen from "./js/screens/SignUpScreen";
import AlmostThereScreen from "./js/screens/AlmostThereScreen";
import WelcomeScreen from "./js/screens/WelcomeScreen";
import ParentDrawerScreen from "./js/screens/ParentDrawerScreen";
import StorybookUI from "./storybook";
const App = StackNavigator(
  {
    AlmostThere: { screen: AlmostThereScreen },
    Consent: { screen: ConsentScreen },
    ParentDrawer: { screen: ParentDrawerScreen },
    // DashboardChild: { screen: AddTranscation },
    // Game: { screen: AddTranscation },
    Login: { screen: LoginScreen },
    // LoginAs: { screen: AddTranscation },
    // NewIntroScreen: { screen: AddTranscation },
    SignUp: { screen: SignUpScreen },
    SplashScreen: { screen: Splash },
    Welcome: { screen: WelcomeScreen }
  },
  { initialRouteName: "SplashScreen" }
);
export default () => (
  <Root>
    <App />
  </Root>
);
