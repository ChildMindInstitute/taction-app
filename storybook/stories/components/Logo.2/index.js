import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

const Logo = props => (
  <Image
    source={require("../../../../js/assets/back-logo.jpg")}
    style={props.imageDimensions}
  />
);

Logo.propTypes = {
  imageDimensions: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export { Logo as default };
