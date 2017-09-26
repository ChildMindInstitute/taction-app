import React from "react";
import PropTypes from "prop-types";
import HeaderCommon from "../../components/Header";
import HomeFooter from "../../components/HomeFooter";
import HomeTimer from "../../components/HomeTimer";
import HomeContent from "../../components/HomeContent";
import { Container, Content, View, Text } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
const Home = props => (
  <Container style={{ backgroundColor: "#eee" }}>
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
      <Text style={styles.ExcerciseText}>Touch the Spider</Text>
      <HomeContent
        HomeContentStyle={styles.ExcerciseContentStyle}
        Image1={props.Image1}
        Image2={props.Image2}
        Image3={props.Image3}
        Image4={props.Image4}
      />
    </View>
    <HomeFooter
      FooterStyle={styles.FooterStyle}
      Left={props.LeftImages}
      Total={props.TotalImages}
    />
  </Container>
);

Home.propTypes = {
  Back: PropTypes.func,
  TotalPoints: PropTypes.number,
  TimeLeftDenomination: PropTypes.string,
  TimeLeft: PropTypes.string,
  Image1: PropTypes.node.isRequired,
  Image2: PropTypes.node.isRequired,
  Image3: PropTypes.node.isRequired,
  Image4: PropTypes.node.isRequired,
  LeftImages: PropTypes.number,
  TotalImages: PropTypes.number
};
Home.defaultProps = {
  Back: () => {}
};

export { Home as default };
