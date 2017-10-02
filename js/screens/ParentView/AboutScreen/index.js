import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#0067a0"
          translucent={true}
          barStyle="light-content"
        />
        <Text
          button
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        >
          This is About.js
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
module.exports = About;
