import React, { Component } from "react";
import { Text, View } from "native-base";
import { Image } from "react-native";
import Button from "../Button";
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
            fontSize: 32,
            marginBottom: "3%"
          }}
        >
          {this.props.GreetingLine1}
        </Text>
        {this.props.Line2needed ? (
          <Text
            style={{
              color: "#eeae30",
              fontSize: 32,
              marginBottom: "7%"
            }}
          >
            {this.props.GreetingLine2}
          </Text>
        ) : (
          <View />
        )}
        <Image source={this.props.Stars} style={{ width: 200, height: 60 }} />
        <Text
          style={{
            color: "white",
            fontSize: 26,
            fontStyle: "italic",
            fontWeight: "bold",
            marginTop:"5%"
          }}
        >
          {this.props.DisplayPoints}
        </Text>
        <Text style={{ color: "white", fontSize: 14 }}>
          {this.props.Description}
        </Text>
        {this.props.IsButtonNeeded ? (
          <View style={{ alignContent: "center" }}>
            <Button
              OnPress={this.props.PlayNext}
              ButtonText="Play Next Level &rarr;"
              SubmitButtonStyle={{
                backgroundColor: "#eeae30",
                opacity: 1,
                margin: "5%",
                borderRadius: 50
              }}
              SubmitButtonTextStyle={{
                color: "#ffffff",
                fontSize: 20,
                fontWeight: "bold"
              }}
            />
            <Button
              OnPress={this.props.PlayAgain}
              ButtonText="Play Again &rarr;"
              SubmitButtonStyle={{
                backgroundColor: "#ffffff",
                opacity: 1,
                marginLeft: "10%",
                marginRight: "10%",
                borderRadius: 50
              }}
              SubmitButtonTextStyle={{
                color: "#eeae30",
                fontSize: 20,
                fontWeight: "bold"
              }}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  }
}
module.exports = ModalContent;
