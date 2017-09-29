import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import { Text } from "native-base";
import Dashboard from "../../../../storybook/stories/screens/Dashboard";
import Expo from "expo";
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
  constructor(props) {
    super(props);
    this.state = {
      IsContentVisible: new Array(ExcerciseData.length).fill(false)
    };
    for (let i = 0; i < ExcerciseData.length; i++) {
      ExcerciseData[i].IsContentVisible = this.state.IsContentVisible[i];
    }
    console.log(ExcerciseData);
  }

  render() {
    return (
      <Dashboard
        DrawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
        TotalPoints={100}
        OnPressSubmitButton={() => {}}
        SubmitButtonStyle={{ backgroundColor: "#eeae30" }}
        SubmitButtonTextStyle={{ color: "white" }}
        ExcerciseData={ExcerciseData}
        IsContentVisible={this.state.IsContentVisible}
        ListItemPress={(item => {
          let previousState = this.state.IsContentVisible.slice();
          previousState[ExcerciseData.indexOf(item)] = !previousState[
            ExcerciseData.indexOf(item)
          ];
          this.setState({ IsContentVisible: previousState });
          console.log(this.state);
        }).bind(this)}
      >
        <Text style={{ fontSize: 22 }}>Today's Activities</Text>
      </Dashboard>
    );
  }
}
export default DashboardScreen;
