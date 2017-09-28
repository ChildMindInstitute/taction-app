import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

const Logo = props => (
  <Image
    source={require("../../../../js/assets/CMI-Logo.png")}
    style={props.imageDimensions}
  />
);

Logo.propTypes = {
  imageDimensions: PropTypes.number
};

export { Logo as default };
