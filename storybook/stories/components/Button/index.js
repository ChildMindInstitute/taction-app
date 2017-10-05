import React from "react";
import PropTypes from "prop-types";
import { Button, Text, Icon, View, Spinner } from "native-base";
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
    {props.Submitted ? (
      <Spinner color="white" />
    ) : (
      <Text style={props.SubmitButtonTextStyle}>
        {props.ButtonText} {props.ExtraText}
      </Text>
    )}
  </Button>
);

CustomButton.propTypes = {
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
  onPress: () => {}
};

export { CustomButton as default };
