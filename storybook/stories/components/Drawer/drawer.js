import React from "react";
import { DrawerNavigator } from "react-navigation";
import SideBar from "./Sidebar";
import AboutScreen from "../../../../js/screens/ParentView/AboutScreen";
import DashboardScreen from "../../../../js/screens/ParentView/DashboardScreen";
import SettingsScreen from "../../../../js/screens/ParentView/SettingsScreen";
import ImagesFolderScreen from "../../../../js/screens/ParentView/ImagesFolderScreen";
import AddChildScreen from "../../../../js/screens/ParentView/AddChildScreen";
import AddFolderScreen from "../../../../js/screens/ParentView/AddFolderScreen";
import LoginScreen from "../../../../js/screens/LoginScreen";

const DrawerExample = DrawerNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    AddChild: { screen: AddChildScreen },
    Settings: { screen: SettingsScreen },
    Images: { screen: ImagesFolderScreen },
    About: { screen: AboutScreen },
    AddFolder: { screen: AddFolderScreen }
  },
  {
    initialRouteName: "Dashboard",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
