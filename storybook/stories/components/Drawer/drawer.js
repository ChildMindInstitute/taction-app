import React from "react";
import { DrawerNavigator } from "react-navigation";
import SideBar from "./Sidebar";
import About from "./About";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import HomeView from "./Home";
const DrawerExample = DrawerNavigator(
  {
    Dashboard: { screen: Dashboard },
    Home: { screen: HomeView },
    About: { screen: About },
    Settings: { screen: Settings }
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
