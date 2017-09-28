import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "native-base";
const CustomButton = props => (
  <Button
    full
    style={props.SubmitButtonStyle}
    disabled={props.Disabled}
    onPress={props.OnPress}
  >
    <Text style={props.SubmitButtonTextStyle}>{props.ButtonText}</Text>
  </Button>
);

CustomButton.propTypes = {
  Disabled: PropTypes.bool,
  OnPress: PropTypes.func,
  ButtonText: PropTypes.string,
  SubmitButtonStyle: PropTypes.object,
  SubmitButtonTextStyle: PropTypes.object
};
CustomButton.defaultProps = {
  onPress: () => {}
};

export { CustomButton as default };
