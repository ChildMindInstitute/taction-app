import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";

const ForgotPassword = props => (
  <View transparent style={props.forgotPasswordButtonStyle}>
    <Text
      onPress={props.onPressForgotPassword}
      style={{ fontSize: 16, color: "#fff" }}
    >
      Forgot password?
    </Text>
  </View>
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
