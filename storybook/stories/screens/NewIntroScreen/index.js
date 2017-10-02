import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo2 from "../../components/Logo.2";
import Button from "../../components/Button";
import { View, Text } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
import { StatusBar } from "react-native";
const NewIntro = props => (
  <View style={styles.MainOuterView}>
    <View style={styles.MainView}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={props.StatusBarStyle}
      />
      <Logo2 imageDimensions={styles.BackgroundImage} />
      <View style={styles.TopSpace}>
        <View
          style={[
            styles.TopViewStyle,
            {
              backgroundColor: props.TopViewBackgroundColor
            }
          ]}
        >
          <Logo />
        </View>
        <View
          style={[
            styles.BottomViewSpace,
            {
              backgroundColor: props.BottomViewBackGroundColor
            }
          ]}
        >
          <Text style={styles.TotalScoreTextStyle}>Total Score</Text>
          <Text
            style={[
              styles.TotalScoreStyle,
              {
                color: props.ScoreColor
              }
            ]}
          >
            {props.Score}
          </Text>
          <Image style={styles.StarsStyle} source={props.Stars} />
          <Button
            OnPress={props.PlayOnPress}
            ButtonText="Play"
            SubmitButtonStyle={styles.PlayButtonStyle}
            SubmitButtonTextStyle={styles.PlayButtonTextStyle}
          />
          <Button
            OnPress={props.HowToPlayOnPress}
            ButtonText="How To Play"
            SubmitButtonStyle={styles.HowToPlayButtonStyle}
            SubmitButtonTextStyle={styles.HowToPlayButtonTextStyle}
          />
        </View>
      </View>
    </View>
  </View>
);

NewIntro.propTypes = {
  BackgroundLogo: PropTypes.number,
  TopViewBackgroundColor: PropTypes.string,
  MainLogo: PropTypes.number,
  BottomViewBackGroundColor: PropTypes.string,
  ScoreColor: PropTypes.string,
  Score: PropTypes.number,
  Stars: PropTypes.number,
  PlayOnPress: PropTypes.func,
  HowToPlayOnPress: PropTypes.func
};
NewIntro.defaultProps = {
  PlayOnPress: () => {},
  HowToPlayOnPress: () => {}
};

export { NewIntro as default };
