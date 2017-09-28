import React from "react";
import { Text } from "react-native";
import Dashboard from "../../screens/Dashboard";
class DashboardExp extends React.Component {
  render() {
    return (
      <Dashboard
        DrawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
        TotalPoints={100}
        OnPressSubmitButton={() => {}}
        SubmitButtonStyle={{ backgroundColor: "#eeae30" }}
        SubmitButtonTextStyle={{ color: "white" }}
        ExcerciseData={[
          {
            Name: "Spider",
            Points: 100,
            Duration: "1:00",
            Stars: require("../../../../js/assets/all_stars.png"),
            IsContentVisible: false,
            DataFolderContent: [
              require("../../../../js/assets/spiderman.jpg"),
              require("../../../../js/assets/spiderman.jpg"),
              require("../../../../js/assets/spiderman.jpg"),
              require("../../../../js/assets/spiderman.jpg"),
              require("../../../../js/assets/spiderman.jpg"),
              require("../../../../js/assets/spiderman.jpg"),
              require("../../../../js/assets/spiderman.jpg"),
              require("../../../../js/assets/spiderman.jpg")
            ]
          },
          {
            Name: "Ball",
            Duration: "1:00",
            Points: 80,
            Stars: require("../../../../js/assets/two_stars.png"),
            IsContentVisible: false,
            DataFolderContent: [
              require("../../../../js/assets/ball1.jpg"),
              require("../../../../js/assets/ball1.jpg"),
              require("../../../../js/assets/ball1.jpg"),
              require("../../../../js/assets/ball1.jpg"),
              require("../../../../js/assets/ball1.jpg"),
              require("../../../../js/assets/ball1.jpg"),
              require("../../../../js/assets/ball1.jpg"),
              require("../../../../js/assets/ball1.jpg")
            ]
          }
        ]}
        IsContentVisible={true}
        ListItemPress={item => console.log(item)}
      >
        <Text style={{ fontSize: 22 }}>Today Played Games</Text>
      </Dashboard>
    );
  }
}
module.exports = DashboardExp;
