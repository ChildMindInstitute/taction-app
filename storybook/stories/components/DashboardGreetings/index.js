import React from "react";
import PropTypes from "prop-types";
import { View } from "native-base";
const DashboardGreetings = props => (
  <View style={props.ViewStyle}>{props.children}</View>
);

DashboardGreetings.propTypes = {
  children: PropTypes.node.isRequired,
  ViewStyle: PropTypes.object
};

export { DashboardGreetings as default };
