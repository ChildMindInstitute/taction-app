import React from "react";
import { StackNavigator } from "react-navigation";
import Splash from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import ConsentScreen from "./screens/ConsentScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AlmostThereScreen from "./screens/AlmostThereScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ParentDrawerScreen from "./screens/ParentDrawerScreen";
const NavigationDetails = StackNavigator(
  {
    AlmostThere: { screen: AlmostThereScreen },
    Consent: { screen: ConsentScreen },
    ParentDrawer: {
      screen: ({ navigation, screenProps }) => (
        <ParentDrawerScreen
          screenProps={{ parentNavigation: navigation, ...screenProps }}
        />
      )
    },
    // DashboardChild: { screen: AddTranscation },
    // Game: { screen: AddTranscation },
    Login: { screen: LoginScreen },
    // LoginAs: { screen: AddTranscation },
    // NewIntroScreen: { screen: AddTranscation },
    SignUp: { screen: SignUpScreen },
    SplashScreen: { screen: Splash },
    Welcome: { screen: WelcomeScreen }
  },
  { initialRouteName: "SplashScreen", headerMode: "none" }
);
export default NavigationDetails;
