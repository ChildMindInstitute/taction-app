import React from "react";
import { DrawerNavigator } from "react-navigation";
import SideBar from "./Sidebar";
import AboutScreen from "../../../../js/screens/ParentView/AboutScreen";
import DashboardScreen from "../../../../js/screens/ParentView/DashboardScreen";
import SettingsScreen from "../../../../js/screens/ParentView/SettingsScreen";
import ImagesFolderScreen from "../../../../js/screens/ParentView/ImagesFolderScreen";
import AddChildScreen from "../../../../js/screens/ParentView/AddChildScreen";
import AddFolderScreen from "../../../../js/screens/ParentView/AddFolderScreen";
import LogoutTemp from "../../../../js/screens/ParentView/LogoutTemp";
import StockImages from "../../../../js/screens/ParentView/StockImagesScreen";
const DrawerParent = DrawerNavigator(
  {
    StockImages: { screen: StockImages },
    Dashboard: {
      screen: ({ screenProps, navigation }) => (
        <DashboardScreen
          isNewRegistration={screenProps.state.params.newRegistration}
          navigation={navigation}
        />
      )
    },
    AddChild: {
      screen: ({ screenProps, navigation }) => (
        <AddChildScreen
          isNewRegistration={screenProps.state.params.newRegistration}
          navigation={navigation}
        />
      )
    },
    Settings: { screen: SettingsScreen },
    Images: { screen: ImagesFolderScreen },
    About: { screen: AboutScreen },
    AddFolder: { screen: AddFolderScreen },
    Logout: { screen: navProps => <LogoutTemp parentNavProps={navProps} /> }
  },
  {
    initialRouteName: "Dashboard",
    contentOptions: {
      activeTintColor: "#ffffff"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerParent;
