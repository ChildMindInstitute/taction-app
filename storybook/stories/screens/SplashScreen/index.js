import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Spinner";
import Logo from "../../components/Logo.3";
import Logo1 from "../../components/Logo.1";
import { View } from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const SplashScreen = props => (
  <View style={styles.mainOuterView}>
    <StatusBar barStyle="light-content" />
    <View style={styles.mainView}>
      <View style={styles.logoSpace} />
      <Logo imageDimensions={styles.logoStyles} />
      <View style={styles.lodaerSpace} />
      <Loader color={props.color} style={styles.loaderStyle} />
      <View style={styles.bottomLogoSpace}>
        <Logo1 imageDimensions={styles.logoStyles2} />
      </View>
    </View>
  </View>
);

SplashScreen.propTypes = {
  color: PropTypes.string
};

export { SplashScreen as default };
