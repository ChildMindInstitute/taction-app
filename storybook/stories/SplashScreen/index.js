import React from "react";
import PropTypes from "prop-types";
import Loader from "../Spinner";
import Logo from "../Logo";
import { View } from "native-base";
const SplashScreen = props => (
  <View style={{ flex: 7 }}>
    <View style={{ flex: 2 }} />
    <Logo
      source={props.ImageSource}
      imageDimensions={{
        width: 100,
        height: 150,
        alignSelf: "center",
        flex: 2
      }}
    />
    <View style={{ flex: 1 }} />
    <Loader
      color={props.color}
      style={{ alignSelf: "center", flex: 1, marging: "10%" }}
    />
    <View style={{ flex: 1 }} />
  </View>
);

SplashScreen.propTypes = {
  color: PropTypes.string,
  ImageSource: PropTypes.node.isRequired,
  ImageDimensions: PropTypes.object
};
SplashScreen.defaultProps = {
  onPress: () => {},
  onPressForgotPassword: () => {},
  onPressRegisterNow: () => {}
};

export { SplashScreen as default };
