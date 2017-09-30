import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import { Text } from "native-base";
import Dashboard from "../../../../storybook/stories/screens/Dashboard";
import Expo from "expo";
import { StatusBar } from "react-native";
let count = 0;
const ExcerciseData = [
  {
    Name: "Spider",
    Points: 100,
    Taps: 13,
    TotalTaps: 20,
    Stars: require("../../../assets/all_stars.png"),
    IsContentVisible: true,
    DataFolderContent: [
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      }
    ]
  },
  {
    Name: "Ball",
    Taps: 13,
    TotalTaps: 20,
    Points: 80,
    Stars: require("../../../assets/two_stars.png"),
    IsContentVisible: true,
    DataFolderContent: [
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      }
    ]
  }
];
class DashboardScreen extends Component {
  static navigationOptions = {
    title: "DashboardScreen",
    header: null
  };
  componentWillMount() {
    if (this.props.IsNewRegistration && count <= 0) {
      this.props.navigation.navigate("AddChild");
      count++;
    }
  }
  render() {
    return (
      <Dashboard
        DrawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
        TotalPoints={100}
        ExcerciseData={ExcerciseData}
        StatusBarStyle="light-content"
      >
        <Text style={{ fontSize: 22 }}>Today's Activities</Text>
      </Dashboard>
    );
  }
}
export default DashboardScreen;
