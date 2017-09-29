import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Spinner";
import Logo from "../../components/Logo.3";
import Logo1 from "../../components/Logo.1";
import { View } from "native-base";
import styles from "./styles";
const SplashScreen = props => (
  <View style={[styles.MainView, { backgroundColor: props.backgroundColor }]}>
    <View style={styles.LogoSpace} />
    <Logo imageDimensions={styles.LogoStyles} />
    <View style={styles.LodaerSpace} />
    <Loader color={props.color} style={styles.LoaderStyle} />
    <View style={styles.BottomLogoSpace}>
      <Logo1 imageDimensions={styles.LogoStyles} />
    </View>
  </View>
);

SplashScreen.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  ImageDimensions: PropTypes.object
};
SplashScreen.defaultProps = {
  onPress: () => {},
  onPressForgotPassword: () => {},
  onPressRegisterNow: () => {}
};

export { SplashScreen as default };
