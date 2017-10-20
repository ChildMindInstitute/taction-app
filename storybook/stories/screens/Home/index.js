import React from "react";
import PropTypes from "prop-types";
import HeaderCommon from "../../components/Header";
import HomeFooter from "../../components/HomeFooter";
import HomeTimer from "../../components/HomeTimer";
import HomeContent from "../../components/HomeContent";
import { Container, View, Text } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevelAnswerSubmitted: false,
      timeExpired: false
    };
  }
  render() {
    return (
      <View style={styles.containerOuterViewStyle}>
        <Container style={styles.containerStyle}>
          <HeaderCommon
            isRightRequired={true}
            leftIconStyle={styles.headerLeftStyle}
            leftPress={this.props.back}
            leftIconName="arrow-back"
            headerStyle={styles.headerStyle}
            title=""
            titleStyle={styles.headerLeftStyle}
          >
            <View style={styles.headerRightStyle}>
              <View style={styles.headerRightImageSpace}>
                <Image
                  source={require("../../../../js/assets/star-filled.png")}
                  style={{ width: 30, height: 30 }}
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>
              <View style={styles.headerRightTextSpace}>
                <View style={styles.headerRightTotalPointsViewStyle}>
                  <Text style={styles.headerRightTotalPointsStyle}>
                    {this.props.totalPoints}
                  </Text>
                </View>
                <View style={styles.headerRightTotalPointsTextViewStyle}>
                  <Text style={styles.headerRightTotalPointsTextStyle}>
                    points
                  </Text>
                </View>
              </View>
            </View>
          </HeaderCommon>
          <View style={styles.excerciseSpace}>
            <Text style={styles.excerciseText}>{this.props.question}</Text>
            <View style={styles.excerciseContentStyle}>
              <HomeContent
                image1={this.props.image1}
                image2={this.props.image2}
                image3={this.props.image3}
                image4={this.props.image4}
                tickImage={this.props.tickImage}
                crossImage={this.props.crossImage}
                correctOption={this.props.correctOption}
                pressed={item => {
                  this.setState({ currentLevelAnswerSubmitted: true });
                  this.props.pressed(item);
                }}
                hasToReset={this.props.hasToReset}
                isTimeExpired={this.state.timeExpired}
                timeExpiredCounterSwitch={() =>
                  this.setState({ timeExpired: false })}
                isLast={this.props.isLast}
              />
            </View>
          </View>
          <HomeFooter
            footerStyle={styles.footerStyle}
            left={this.props.leftImages}
            total={this.props.totalImages}
          />
          {this.props.children}
        </Container>
        <HomeTimer
          timeLeftDenomination={this.props.timeLeftDenomination}
          timeLeft={this.props.timeLeft}
          viewStyle={styles.homeTimerStyle}
          finishedFunc={this.props.finishedFunc}
          currentLevelAnswerSubmitted={this.state.currentLevelAnswerSubmitted}
          currentLevelAnswerSubmittedSwitch={() => {
            this.setState({ currentLevelAnswerSubmitted: false });
          }}
          timeExpiredFunc={() => {
            this.setState({ timeExpired: true });
            this.props.timeExpiredImageShuffle();
          }}
        />
      </View>
    );
  }
}

export { Home as default };
