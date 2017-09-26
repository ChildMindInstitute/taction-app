import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";
const HomeTimer = props => (
  <View style={[props.ViewStyle]}>
    <View
      style={{
        position: "absolute",
        borderRadius: 50,
        backgroundColor: "#f2cd32",
        width: 70,
        height: 70
      }}
    >
      <View
        style={{
          left: 5,
          top: 5,
          position: "relative",
          borderRadius: 50,
          backgroundColor: "#0067a0",
          width: 60,
          height: 60,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white" }}>{props.TimeLeft}</Text>
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
