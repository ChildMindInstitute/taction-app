import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo2 from "../../components/Logo.2";
import Button2 from "../../components/Button";
import { View, Text, Button, Icon } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
const NewIntro = props => (
  <View style={styles.mainOuterView}>
    <View style={styles.mainView}>
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
          <Button transparent onPress={props.menuPress}>
            <Icon name="menu" style={{ color: "white" }} />
          </Button>
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
          <Button2
            onPress={props.playOnPress}
            buttonText="Play"
            disabled={props.isPlayDisabled}
            submitButtonStyle={styles.playButtonStyle}
            submitButtonTextStyle={styles.playButtonTextStyle}
          />
          <Button2
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
