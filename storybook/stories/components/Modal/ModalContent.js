import React from "react";
import { Text, View } from "native-base";
import { Image } from "react-native";
import Button from "../Button";
import styles from "./styles";
class ModalContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ContentMainViewStyle}>
        <Text style={[styles.ContentMainViewTextStyle, styles.Text1]}>
          {this.props.GreetingLine1}
        </Text>
        {this.props.Line2needed ? (
          <Text style={[styles.ContentMainViewTextStyle, styles.Text2]}>
            {this.props.GreetingLine2}
          </Text>
        ) : (
          <View />
        )}
        <Image
          source={this.props.Stars}
          style={styles.ContentMainViewImageStyle}
        />
        <Text style={styles.ContentMainViewPointsTextStyle}>
          {this.props.DisplayPoints}
        </Text>
        <Text style={styles.ContentMainViewLevelDescriptionStyle}>
          {this.props.Description}
        </Text>
        {this.props.IsButtonNeeded ? (
          <View style={styles.ContentMainViewInnerView}>
            <Button
              OnPress={this.props.PlayNext}
              ButtonText="Play Next Level &rarr;"
              SubmitButtonStyle={styles.ContentMainViewInnerViewButton1Style}
              SubmitButtonTextStyle={
                styles.ContentMainViewInnerViewButton1TextStyle
              }
            />
            <Button
              OnPress={this.props.PlayAgain}
              ButtonText="Play Again &rarr;"
              SubmitButtonStyle={styles.ContentMainViewInnerViewButton2Style}
              SubmitButtonTextStyle={
                styles.ContentMainViewInnerViewButton2TextStyle
              }
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
