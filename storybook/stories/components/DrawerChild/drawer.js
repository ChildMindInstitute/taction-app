import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import SideBar from "./Sidebar";
import AboutScreen from "../../../../js/screens/ParentView/AboutScreen";
import LogoutTemp from "../../../../js/screens/ParentView/LogoutTemp";
import NewIntroScreen from "../../../../js/screens/ChildView/OpeningScreen";
import GameScreen from "../../../../js/screens/ChildView/GameScreen";
import HowToPlayScreen from "../../../../js/screens/ChildView/HowToPlayScreen";

const DrawerParent = DrawerNavigator(
  {
    GameNavigator: {
      screen: StackNavigator({
        IntroScreen: { screen: NewIntroScreen },
        GameScreen: { screen: GameScreen },
        HowToPlayScreen: { screen: HowToPlayScreen }
      })
    },
    About: { screen: AboutScreen },
    Logout: { screen: NavProps => <LogoutTemp ParentNavProps={NavProps} /> }
  },
  {
    initialRouteName: "GameNavigator",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerParent;
