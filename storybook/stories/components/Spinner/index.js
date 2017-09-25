import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "native-base";

const Loader = props => <Spinner color={props.color} />;

Loader.propTypes = {
  color: PropTypes.node.isRequired
};
Loader.defaultProps = {
  onPress: () => {}
};

export { Loader as default };
