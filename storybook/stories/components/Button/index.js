import React from "react";
import PropTypes from "prop-types";
import { Button, Text, Icon, View } from "native-base";
const CustomButton = props => (
  <Button
    full
    style={props.SubmitButtonStyle}
    disabled={props.Disabled}
    onPress={props.OnPress}
  >
    {props.IsIconRequired ? (
      <Icon
        name={props.IconName}
        style={{ color: props.IconColor, marginRight: "-4%" }}
      />
    ) : (
      <View />
    )}
    <Text style={props.SubmitButtonTextStyle}>{props.ButtonText}</Text>
  </Button>
);

CustomButton.propTypes = {
  IsIconRequired: PropTypes.bool,
  Disabled: PropTypes.bool,
  OnPress: PropTypes.func,
  IconName: PropTypes.string,
  IconColor: PropTypes.string,
  ButtonText: PropTypes.string,
  SubmitButtonStyle: PropTypes.object,
  SubmitButtonTextStyle: PropTypes.object
};
CustomButton.defaultProps = {
  onPress: () => {}
};

export { CustomButton as default };
