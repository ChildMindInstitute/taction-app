import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "native-base";

const LoginForm = props => (
  <Button
    transparent
    onPress={props.OnPressForgotPassword}
    style={props.ForgotPasswordButtonStyle}
  >
    <Text style={props.ForgotPasswordTextStyle}>Forgot Password?</Text>
  </Button>
);

LoginForm.propTypes = {
  ForgotPasswordTextStyle: PropTypes.object,
  ForgotPasswordButtonStyle: PropTypes.object,
  OnPressForgotPassword: PropTypes.func
};
LoginForm.defaultProps = {
  onPressForgotPassword: () => {}
};

export { LoginForm as default };
