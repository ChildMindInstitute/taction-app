import React from "react";
import PropTypes from "prop-types";
import HeaderCommon from "../../components/Header";
import HomeFooter from "../../components/HomeFooter";
import HomeTimer from "../../components/HomeTimer";
import HomeContent from "../../components/HomeContent";
import { Container, View, Text } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
import { StatusBar } from "react-native";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentLevelAnswerSubmitted: false,
      TimeExpired: false
    };
  }
  render() {
    return (
      <View style={styles.ContainerOuterViewStyle}>
        <Container style={styles.ContainerStyle}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle={this.props.StatusBarStyle}
          />
          <HeaderCommon
            isRightRequired={true}
            leftIconStyle={styles.HeaderLeftStyle}
            leftPress={this.props.Back}
            leftIconName="arrow-back"
            headerStyle={styles.HeaderStyle}
            Title=""
            TitleStyle={styles.HeaderLeftStyle}
          >
            <View style={styles.HeaderRightStyle}>
              <View style={styles.HeaderRightImageSpace}>
                <Image
                  source={require("../../../../js/assets/star_filled.png")}
                  style={{ width: 30, height: 30 }}
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>
              <View style={styles.HeaderRightTextSpace}>
                <View style={styles.HeaderRightTotalPointsViewStyle}>
                  <Text style={styles.HeaderRightTotalPointsStyle}>
                    {this.props.TotalPoints}
                  </Text>
                </View>
                <View style={styles.HeaderRightTotalPointsTextViewStyle}>
                  <Text style={styles.HeaderRightTotalPointsTextStyle}>
                    points
                  </Text>
                </View>
              </View>
            </View>
          </HeaderCommon>
          <View style={styles.ExcerciseSpace}>
            <Text style={styles.ExcerciseText}>{this.props.Question}</Text>
            <View style={styles.ExcerciseContentStyle}>
              <HomeContent
                Image1={this.props.Image1}
                Image2={this.props.Image2}
                Image3={this.props.Image3}
                Image4={this.props.Image4}
                TickImage={this.props.TickImage}
                CrossImage={this.props.CrossImage}
                CorrectOption={this.props.CorrectOption}
                Pressed={item => {
                  this.setState({ CurrentLevelAnswerSubmitted: true });
                  this.props.Pressed(item);
                }}
                HasToReset={this.props.HasToReset}
                IsTimeExpired={this.state.TimeExpired}
                TimeExpiredCounterSwitch={() =>
                  this.setState({ TimeExpired: false })}
                IsLast={this.props.IsLast}
              />
            </View>
          </View>
          <HomeFooter
            FooterStyle={styles.FooterStyle}
            Left={this.props.LeftImages}
            Total={this.props.TotalImages}
          />
          {this.props.children}
        </Container>
        <HomeTimer
          TimeLeftDenomination={this.props.TimeLeftDenomination}
          TimeLeft={this.props.TimeLeft}
          ViewStyle={styles.HomeTimerStyle}
          FinishedFunc={this.props.FinishedFunc}
          CurrentLevelAnswerSubmitted={this.state.CurrentLevelAnswerSubmitted}
          CurrentLevelAnswerSubmittedSwitch={() => {
            this.setState({ CurrentLevelAnswerSubmitted: false });
          }}
          TimeExpiredFunc={() => {
            this.setState({ TimeExpired: true });
            this.props.TimeExpiredImageShuffle();
          }}
        />
      </View>
    );
  }
}

export { Home as default };
