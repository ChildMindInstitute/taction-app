import React from "react";
import { Text } from "native-base";
import Dashboard from "../../../../storybook/stories/screens/Dashboard";
let count = 0;
const ExcerciseData = [
  {
    Name: "Spider",
    Points: 100,
    Taps: 13,
    WrongTaps: 20,
    Stars: require("../../../assets/all_stars.png"),
    IsContentVisible: true,
    DataFolderContent: [
      {
        Image: require("../../../assets/spiderman.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: false
      }
    ]
  },
  {
    Name: "Ball",
    Taps: 13,
    WrongTaps: 20,
    Points: 80,
    Stars: require("../../../assets/two_stars.png"),
    IsContentVisible: true,
    DataFolderContent: [
      {
        Image: require("../../../assets/ball1.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        CorrectTaps: 3,
        WrongTaps: 8,
        IsCompleted: false
      }
    ]
  }
];
class DashboardScreen extends React.Component {
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
