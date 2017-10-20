import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "native-base";

const ForgotPassword = props => (
  <Button
    transparent
    onPress={props.onPressForgotPassword}
    style={props.forgotPasswordButtonStyle}
  >
    <Text style={props.forgotPasswordTextStyle}>Forgot password?</Text>
  </Button>
);

ForgotPassword.propTypes = {
  forgotPasswordTextStyle: PropTypes.object,
  forgotPasswordButtonStyle: PropTypes.object,
  onPressForgotPassword: PropTypes.func
};
ForgotPassword.defaultProps = {
  onPressForgotPassword: () => {}
};

export { ForgotPassword as default };
