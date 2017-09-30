import React from "react";
import PropTypes from "prop-types";
import HeaderCommon from "../../components/Header";
import HomeFooter from "../../components/HomeFooter";
import HomeTimer from "../../components/HomeTimer";
import HomeContent from "../../components/HomeContent";
import { Container, Content, View, Text } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
import { StatusBar } from "react-native";
const Home = props => (
  <View style={{ flex: 1, backgroundColor: "#0067a0" }}>
    <Container style={{ backgroundColor: "#eee" }}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={props.StatusBarStyle}
      />
      <HeaderCommon
        isRightRequired={true}
        leftIconStyle={styles.HeaderLeftStyle}
        leftPress={props.Back}
        leftIconName="arrow-back"
        headerStyle={styles.HeaderStyle}
        Title=""
        TitleStyle={styles.HeaderLeftStyle}
      >
        <View style={styles.HeaderRightStyle}>
          <View style={styles.HeaderRightImageSpace}>
            <Image source={require("../../../../js/assets/star_filled.png")} />
          </View>
          <View style={styles.HeaderRightTextSpace}>
            <View style={styles.HeaderRightTextAlign} />
            <Text style={styles.HeaderRightTotalPointsStyle}>
              {props.TotalPoints}
            </Text>
            <Text style={styles.HeaderRightTotalPointsTextStyle}>points</Text>
            <View style={styles.HeaderRightTextAlign} />
          </View>
        </View>
      </HeaderCommon>
      <HomeTimer
        TimeLeftDenomination={props.TimeLeftDenomination}
        TimeLeft={props.TimeLeft}
        ViewStyle={styles.HomeTimerStyle}
      />

      <View style={styles.ExcerciseSpace}>
        <Text style={styles.ExcerciseText}>{props.Question}</Text>
        <HomeContent
          HomeContentStyle={styles.ExcerciseContentStyle}
          Image1={props.Image1}
          Image2={props.Image2}
          Image3={props.Image3}
          Image4={props.Image4}
          TickImage={props.TickImage}
          CrossImage={props.CrossImage}
          CorrectOption={props.CorrectOption}
          Pressed={props.Pressed}
        />
      </View>
      <HomeFooter
        FooterStyle={styles.FooterStyle}
        Left={props.LeftImages}
        Total={props.TotalImages}
      />
    </Container>
  </View>
);

Home.propTypes = {
  Back: PropTypes.func,
  Question: PropTypes.string,
  TotalPoints: PropTypes.number,
  TimeLeftDenomination: PropTypes.string,
  TimeLeft: PropTypes.string,
  Image1: PropTypes.node.isRequired,
  Image2: PropTypes.node.isRequired,
  Image3: PropTypes.node.isRequired,
  Image4: PropTypes.node.isRequired,
  TickImage: PropTypes.node.isRequired,
  CrossImage: PropTypes.node.isRequired,
  CorrectOption: PropTypes.node.isRequired,
  Pressed: PropTypes.func,
  LeftImages: PropTypes.number,
  TotalImages: PropTypes.number
};
Home.defaultProps = {
  Back: () => {}
};

export { Home as default };
