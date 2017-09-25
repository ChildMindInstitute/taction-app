import React from "react";
import { DrawerNavigator } from "react-navigation";
import SideBar from "./Sidebar";
import About from "./About";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
const DrawerExample = DrawerNavigator(
  {
    Home: { screen: About },
    Dashboard: { screen: Dashboard },
    About: { screen: About },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
