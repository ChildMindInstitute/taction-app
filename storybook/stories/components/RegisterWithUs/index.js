import React from "react";
import PropTypes from "prop-types";
import { Text } from "native-base";
const RegisterWithUs = props => (
  <Text style={props.TextStyle}>
    Don't have an Account?{" "}
    <Text
      button
      onPress={props.OnPressRegisterNow}
      style={props.TextButtonStyle}
    >
      Register Now
    </Text>
  </Text>
);

RegisterWithUs.propTypes = {
  TextStyle: PropTypes.object,
  TextButtonStyle: PropTypes.object,
  OnPressRegisterNow: PropTypes.func
};
RegisterWithUs.defaultProps = {
  onPressRegisterNow: () => {}
};

export { RegisterWithUs as default };
