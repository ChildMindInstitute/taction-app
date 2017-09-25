import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

const Logo = props => (
  <Image source={props.source} style={props.imageDimensions} />
);

Logo.propTypes = {
  source: PropTypes.node.isRequired,
  imageDimensions: PropTypes.number
};

export { Logo as default };
