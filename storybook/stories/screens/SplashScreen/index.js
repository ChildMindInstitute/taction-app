import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Spinner";
import Logo from "../../components/Logo";
import { View } from "native-base";
import styles from "./styles";
const SplashScreen = props => (
  <View style={[styles.MainView, { backgroundColor: props.backgroundColor }]}>
    <View style={styles.LogoSpace} />
    <Logo source={props.MainLogoSource} imageDimensions={styles.LogoStyles} />
    <View style={styles.LodaerSpace} />
    <Loader color={props.color} style={styles.LoaderStyle} />
    <View style={styles.BottomLogoSpace}>
      <Logo source={props.SubLogoSource} imageDimensions={styles.LogoStyles} />
    </View>
  </View>
);

SplashScreen.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  MainLogoSource: PropTypes.node.isRequired,
  SubLogoSource: PropTypes.node.isRequired,
  ImageDimensions: PropTypes.object
};
SplashScreen.defaultProps = {
  onPress: () => {},
  onPressForgotPassword: () => {},
  onPressRegisterNow: () => {}
};

export { SplashScreen as default };
