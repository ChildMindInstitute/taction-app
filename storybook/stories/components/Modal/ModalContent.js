import React from "react";
import { Text, View, Button, Right, Left, Body, Icon } from "native-base";
import { Image } from "react-native";
import Button2 from "../Button";
import styles from "./styles";
class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DisplayNextLevel: "flex"
    };
  }
  componentDidUpdate() {
    if (this.props.PlayNextDisabled && this.state.DisplayNextLevel == "flex")
      this.setState({ DisplayNextLevel: "none" });
    else if (
      !this.props.PlayNextDisabled &&
      this.state.DisplayNextLevel == "none"
    )
      this.setState({ DisplayNextLevel: "flex" });
  }
  render() {
    return (
      <View style={styles.ContentMainViewStyle}>
        {this.props.IsCloseButtonRequired ? (
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
            styles.ContentMainViewStyle,
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
          <View
            style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={this.props.Stars}
              style={[
                styles.ContentMainViewImageStyle,
                this.props.StarExtraStyle
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
            <Text style={styles.ContentMainViewPointsTextStyle}>
              {this.props.DisplayPoints}
            </Text>
          </View>
          <View
            style={{
              flex: this.props.IsDescriptionLine2Required ? 2 : 1,
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
                  styles.ContentMainViewLevelDescriptionStyle,
                  this.props.ExtraDescriptionStyle
                ]}
              >
                {this.props.Description}
              </Text>
            </View>
            {this.props.IsDescriptionLine2Required ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "flex-start"
                }}
              >
                <Text style={styles.ContentMainViewLevelDescriptionStyle}>
                  {this.props.DescriptionLine2}
                </Text>
              </View>
            ) : (
              <View />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.ContentMainViewNextPrizeDescriptionStyle}>
              {this.props.NextPrizeDescription}
            </Text>
          </View>
          {this.props.IsButtonNeeded ? (
            <View style={styles.ContentMainViewInnerView}>
              <View style={{ flex: 1 }}>
                <Button
                  onPress={this.props.PlayNext}
                  style={[
                    styles.ContentMainViewInnerViewButton1Style,
                    { display: this.state.DisplayNextLevel }
                  ]}
                  disabled={this.props.PlayNextDisabled}
                >
                  <Text style={styles.ContentMainViewInnerViewButton1TextStyle}>
                    {"Play Level " + this.props.NextLevelName}
                    <Text
                      style={styles.ContentMainViewInnerViewButton1TextStyle}
                    >
                      &rarr;
                    </Text>
                  </Text>
                </Button>
              </View>
              <View style={{ flex: 1 }}>
                <Button2
                  OnPress={this.props.PlayAgain}
                  ButtonText="Play Again &rarr;"
                  SubmitButtonStyle={
                    styles.ContentMainViewInnerViewButton2Style
                  }
                  SubmitButtonTextStyle={
                    styles.ContentMainViewInnerViewButton2TextStyle
                  }
                />
              </View>
            </View>
          ) : (
            <View />
          )}
          {this.props.PlayLaterRequired ? (
            <View style={([styles.ContentMainViewInnerView], { flex: 1 })}>
              <Button transparent onPress={this.props.toggleVisiblity}>
                <Text style={styles.ContentMainViewInnerViewButton1TextStyle}>
                  {this.props.PlayLaterText} &rarr;
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
