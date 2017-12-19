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
import PrizesScreen from "../../../../js/screens/ParentView/PrizesScreen";
import SwitchUserTemp from "../../../../js/screens/ParentView/SwitchUserTemp";
import HowtoUse from "../../../../js/screens/ParentView/HowToPlayScreen";
const DrawerParent = DrawerNavigator(
  {
    StockImages: { screen: StockImages },
    PrizesScreen: { screen: PrizesScreen },
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
    HowtoUse: { screen: HowtoUse },
    Settings: { screen: SettingsScreen },
    Images: { screen: ImagesFolderScreen },
    About: { screen: AboutScreen },
    AddFolder: { screen: AddFolderScreen },
    SwitchUser: {
      screen: navProps => <SwitchUserTemp parentNavProps={navProps} />
    },
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
