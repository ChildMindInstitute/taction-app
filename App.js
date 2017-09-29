import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { Root } from "native-base";
import Splash from "./js/screens/SplashScreen";
import LoginScreen from "./js/screens/Login";
import ConsentScreen from "./js/screens/Consent";
import StorybookUI from "./storybook";
const App = StackNavigator(
  {
    //AddChild: { screen: Splash },
    //AddFolder: { screen: Dashboard },
    // AlmostThere: { screen: AddGroup },
    Consent: { screen: ConsentScreen },
    // Dashboard: { screen: AddTranscation },
    // DashboardChild: { screen: AddTranscation },
    // Game: { screen: AddTranscation },
    // ImagesFolder: { screen: AddTranscation },
    Login: { screen: LoginScreen },
    // LoginAs: { screen: AddTranscation },
    // NewIntroScreen: { screen: AddTranscation },
    // Settings: { screen: AddTranscation },
    // SignUp: { screen: AddTranscation },
    SplashScreen: { screen: Splash }
    //Welcome: { screen: AddTranscation }
  },
  { headerMode: "screen", initialRouteName: "SplashScreen" }
);
export default () => (
  <Root>
    <App />
  </Root>
);
