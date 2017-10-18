import React from "react";
import { Text, View, Button, Right, Left, Body, Icon } from "native-base";
import { Image } from "react-native";
import Button2 from "../Button";
import styles from "./styles";
class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNextLevel: "flex"
    };
  }
  componentDidUpdate() {
    if (this.props.playNextDisabled && this.state.displayNextLevel == "flex")
      this.setState({ displayNextLevel: "none" });
    else if (
      !this.props.playNextDisabled &&
      this.state.displayNextLevel == "none"
    )
      this.setState({ displayNextLevel: "flex" });
  }
  render() {
    return (
      <View style={styles.contentMainViewStyle}>
        {this.props.isCloseButtonRequired ? (
          <View style={{ flexDirection: "row" }}>
            <Right>
              <Button transparent onPress={this.props.toggleVisiblity}>
                <Icon
                  name="md-close"
                  style={{ color: "#eeae30", fontSize: 32 }}
                />
              </Button>
            </Right>
          </View>
        ) : (
          <View />
        )}
        <View
          style={[
            styles.contentMainViewStyle,
            {
              flex: 1,
              paddingTop: "7%",
              paddingBottom: "15%",
              paddingLeft: "5%",
              paddingRight: "5%"
            }
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.contentMainViewTextStyle, styles.text1]}>
              {this.props.greetingLine1}
            </Text>
          </View>
          {this.props.line2needed ? (
            <View style={{ flex: 1 }}>
              <Text style={[styles.contentMainViewTextStyle, styles.text2]}>
                {this.props.greetingLine2}
              </Text>
            </View>
          ) : (
            <View />
          )}
          <View
            style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={this.props.stars}
              style={[
                styles.contentMainViewImageStyle,
                this.props.starExtraStyle
              ]}
              resizeMethod="auto"
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.contentMainViewPointsTextStyle}>
              {this.props.displayPoints}
            </Text>
          </View>
          <View
            style={{
              flex: this.props.isDescriptionLine2Required ? 2 : 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <Text
                style={[
                  styles.contentMainViewLevelDescriptionStyle,
                  this.props.extraDescriptionStyle
                ]}
              >
                {this.props.description}
              </Text>
            </View>
            {this.props.isDescriptionLine2Required ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "flex-start"
                }}
              >
                <Text style={styles.contentMainViewLevelDescriptionStyle}>
                  {this.props.descriptionLine2}
                </Text>
              </View>
            ) : (
              <View />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.contentMainViewNextPrizeDescriptionStyle}>
              {this.props.nextPrizeDescription}
            </Text>
          </View>
          {this.props.isButtonNeeded ? (
            <View style={styles.contentMainViewInnerView}>
              <View style={{ flex: 1 }}>
                <Button
                  onPress={this.props.playNext}
                  style={[
                    styles.contentMainViewInnerViewButton1Style,
                    { display: this.state.displayNextLevel }
                  ]}
                  disabled={this.props.playNextDisabled}
                >
                  <Text style={styles.contentMainViewInnerViewButton1TextStyle}>
                    {"Play Level " + this.props.nextLevelName}
                    <Text
                      style={styles.contentMainViewInnerViewButton1TextStyle}
                    >
                      &rarr;
                    </Text>
                  </Text>
                </Button>
              </View>
              <View style={{ flex: 1 }}>
                <Button2
                  OnPress={this.props.playAgain}
                  ButtonText="Play Again &rarr;"
                  SubmitButtonStyle={
                    styles.contentMainViewInnerViewButton2Style
                  }
                  SubmitButtonTextStyle={
                    styles.contentMainViewInnerViewButton2TextStyle
                  }
                />
              </View>
            </View>
          ) : (
            <View />
          )}
          {this.props.playLaterRequired ? (
            <View style={([styles.contentMainViewInnerView], { flex: 1 })}>
              <Button transparent onPress={this.props.toggleVisiblity}>
                <Text style={styles.contentMainViewInnerViewButton1TextStyle}>
                  {this.props.playLaterText} &rarr;
                </Text>
              </Button>
            </View>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}
module.exports = ModalContent;
