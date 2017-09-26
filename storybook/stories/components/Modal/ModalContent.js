import React, { Component } from "react";
import { Text, View } from "native-base";
import { Image } from "react-native";
class ModalContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: "#eeae30",
            fontWeight: "bold",
            fontSize: 32,
            margin: "10%"
          }}
        >
          Congratulations!
        </Text>
        <Image
          source={require("../../../../js/assets/two_stars.png")}
          style={{ width: 200, height: 60 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 26,
            fontStyle: "italic",
            fontWeight: "bold",
            margin: "5%"
          }}
        >
          100
        </Text>
        <Text style={{ color: "white", fontSize: 14, margin: "5%" }}>
          You have earned 10 points!
        </Text>
      </View>
    );
  }
}
module.exports = ModalContent;
