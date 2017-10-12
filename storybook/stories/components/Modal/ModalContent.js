import React from "react";
import { Text, View, Button } from "native-base";
import { Image } from "react-native";
import Button2 from "../Button";
import styles from "./styles";
class ModalContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ContentMainViewStyle}>
        <View style={{ flex: 1.3 }}>
          <Text style={[styles.ContentMainViewTextStyle, styles.Text1]}>
            {this.props.GreetingLine1}
          </Text>
        </View>
        {this.props.Line2needed ? (
          <View style={{ flex: 1 }}>
            <Text style={[styles.ContentMainViewTextStyle, styles.Text2]}>
              {this.props.GreetingLine2}
            </Text>
          </View>
        ) : (
          <View />
        )}
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Image
            source={this.props.Stars}
            style={styles.ContentMainViewImageStyle}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.ContentMainViewPointsTextStyle}>
            {this.props.DisplayPoints}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.ContentMainViewLevelDescriptionStyle}>
            {this.props.Description}
          </Text>
        </View>
        {this.props.IsButtonNeeded ? (
          <View style={styles.ContentMainViewInnerView}>
            <View style={{ flex: 1 }}>
              <Button2
                OnPress={this.props.PlayNext}
                ButtonText={"Play Level " + this.props.NextLevelName}
                ExtraText=" &rarr;"
                SubmitButtonStyle={styles.ContentMainViewInnerViewButton1Style}
                SubmitButtonTextStyle={
                  styles.ContentMainViewInnerViewButton1TextStyle
                }
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button2
                OnPress={this.props.PlayAgain}
                ButtonText="Play Again &rarr;"
                SubmitButtonStyle={styles.ContentMainViewInnerViewButton2Style}
                SubmitButtonTextStyle={
                  styles.ContentMainViewInnerViewButton2TextStyle
                }
              />
            </View>
          </View>
        ) : (
          <View />
        )}
        <View
          style={
            ([styles.ContentMainViewInnerView], { marginLeft: "10%", flex: 1 })
          }
        >
          <Button transparent onPress={this.props.toggleVisiblity}>
            <Text style={styles.ContentMainViewInnerViewButton1TextStyle}>
              {this.props.PlayLaterText} &rarr;
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
module.exports = ModalContent;
