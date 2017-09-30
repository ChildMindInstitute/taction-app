import React from "react";
import { StackNavigator } from "react-navigation";
import Splash from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import ConsentScreen from "./screens/ConsentScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AlmostThereScreen from "./screens/AlmostThereScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ParentDrawerScreen from "./screens/ParentDrawerScreen";
import LoginAsScreen from "./screens/LoginAsScreen";
import DashboardScreen from "./screens/ChildView/DashboardScreen";
import OpeningScreen from "./screens/ChildView/OpeningScreen";
import GameScreen from "./screens/ChildView/GameScreen";
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
    DashboardChild: { screen: DashboardScreen },
    GameScreen: { screen: GameScreen },
    Login: { screen: LoginScreen },
    LoginAs: { screen: LoginAsScreen },
    OpeningScreen: { screen: OpeningScreen },
    SignUp: { screen: SignUpScreen },
    SplashScreen: { screen: Splash },
    Welcome: { screen: WelcomeScreen }
  },
  { initialRouteName: "SplashScreen", headerMode: "none" }
);
export default NavigationDetails;
