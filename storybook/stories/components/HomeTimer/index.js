import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";
import styles from "./styles";
const HomeTimer = props => (
  <View style={props.ViewStyle}>
    <View style={styles.OuterCircle}>
      <View style={styles.InnerCircle}>
        <Text style={styles.TimeTextStyle}>{props.TimeLeft}</Text>
        <Text note>{props.TimeLeftDenomination}</Text>
      </View>
    </View>
  </View>
);

HomeTimer.propTypes = {
  TimeLeftDenomination: PropTypes.string,
  TimeLeft: PropTypes.string,
  ViewStyle: PropTypes.number
};

export { HomeTimer as default };
