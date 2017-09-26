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
        ExcerciseDataIcon="home"
        ExcerciseData={[
          { Name: "Spider", Points: 100 },
          { Name: "Ball", Points: 80 }
        ]}
        ListItemPress={item => console.log(item)}
      >
        <Text>Time to earn some points</Text>
      </Dashboard>
    );
  }
}
module.exports = DashboardExp;
