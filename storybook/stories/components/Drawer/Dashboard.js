import React from "react";
import { StyleSheet, Text, View } from "react-native";
class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          button
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        >
          This is Dashboard.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
module.exports = Dashboard;
