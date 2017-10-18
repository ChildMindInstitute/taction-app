import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "native-base";

const LoginForm = props => (
  <Button
    transparent
    onPress={props.onPressForgotPassword}
    style={props.forgotPasswordButtonStyle}
  >
    <Text style={props.forgotPasswordTextStyle}>Forgot password?</Text>
  </Button>
);

LoginForm.propTypes = {
  forgotPasswordTextStyle: PropTypes.object,
  forgotPasswordButtonStyle: PropTypes.object,
  onPressForgotPassword: PropTypes.func
};
LoginForm.defaultProps = {
  onPressForgotPassword: () => {}
};

export { LoginForm as default };
