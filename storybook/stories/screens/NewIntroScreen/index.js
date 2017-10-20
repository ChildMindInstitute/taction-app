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
  <View style={styles.mainOuterView}>
    <View style={styles.mainView}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Logo2 imageDimensions={styles.backgroundImage} />
      <View style={styles.topSpace}>
        <View
          style={[
            styles.topViewStyle,
            {
              backgroundColor: props.topViewBackgroundColor
            }
          ]}
        >
          <Logo imageDimensions={styles.logoStyle} />
        </View>
        <View
          style={[
            styles.bottomViewSpace,
            {
              backgroundColor: props.bottomViewBackGroundColor
            }
          ]}
        >
          <Text style={styles.totalScoreTextStyle}>TOTAL SCORE</Text>
          <Text
            style={[
              styles.totalScoreStyle,
              {
                color: props.scoreColor
              }
            ]}
          >
            {props.score}
          </Text>
          {props.children}
          <Image
            style={styles.starsStyle}
            source={props.stars}
            resizeMethod="auto"
            resizeMode="contain"
          />
          <Button
            onPress={props.playOnPress}
            buttonText="Play"
            disabled={props.isPlayDisabled}
            submitButtonStyle={styles.playButtonStyle}
            submitButtonTextStyle={styles.playButtonTextStyle}
          />
          <Button
            onPress={props.howToPlayOnPress}
            buttonText="How To Play"
            submitButtonStyle={styles.howToPlayButtonStyle}
            submitButtonTextStyle={styles.howToPlayButtonTextStyle}
          />
        </View>
      </View>
    </View>
  </View>
);

NewIntro.propTypes = {
  isPlayDisabled: PropTypes.bool,
  backgroundLogo: PropTypes.number,
  topViewBackgroundColor: PropTypes.string,
  mainLogo: PropTypes.number,
  bottomViewBackGroundColor: PropTypes.string,
  scoreColor: PropTypes.string,
  score: PropTypes.number,
  stars: PropTypes.number,
  playOnPress: PropTypes.func,
  howToPlayOnPress: PropTypes.func
};
NewIntro.defaultProps = {
  playOnPress: () => {},
  howToPlayOnPress: () => {}
};

export { NewIntro as default };
