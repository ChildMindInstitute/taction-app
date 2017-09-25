import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Item, Label, Button, Text, View } from "native-base";
import Logo from "../Logo";
const LoginForm = props => (
  <Button
    transparent
    onPress={props.OnPressForgotPassword}
    style={props.ForgotPasswordButtonStyle}
  >
    <Text style={props.ForgotPasswordTextStyle}>ForgotPassword?</Text>
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
