import React from "react";
import PropTypes from "prop-types";
import { Button, Text, Icon, View, Spinner } from "native-base";
const CustomButton = props => (
  <Button
    iconLeft
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
    {props.Submitted ? (
      <Spinner color="white" />
    ) : props.IsTextRequired ? (
      <Text style={props.SubmitButtonTextStyle}>
        {props.ButtonText} {props.ExtraText}
      </Text>
    ) : (
      <View />
    )}
  </Button>
);

CustomButton.propTypes = {
  IsTextRequired: PropTypes.bool,
  ExtraText: PropTypes.string,
  Submitted: PropTypes.bool,
  IsIconRequired: PropTypes.bool,
  Disabled: PropTypes.bool,
  OnPress: PropTypes.func,
  IconName: PropTypes.string,
  IconColor: PropTypes.string,
  ButtonText: PropTypes.string,
  SubmitButtonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  SubmitButtonTextStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};
CustomButton.defaultProps = {
  onPress: () => {},
  IsTextRequired: true
};

export { CustomButton as default };
