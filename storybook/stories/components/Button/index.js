import React from "react";
import PropTypes from "prop-types";
import { Button, Text, Icon, View, Spinner } from "native-base";
const CustomButton = props => (
  <Button
    iconLeft
    iconRight
    full
    style={[
      {
        backgroundColor: props.disabled
          ? "rgba(238, 174, 48, 0.7)"
          : "rgba(238, 174, 48, 1)"
      },
      props.submitButtonStyle
    ]}
    disabled={props.disabled}
    onPress={props.onPress}
  >
    {props.iconLeft ? (
      <Icon name={props.iconName} style={{ color: props.iconColor }} />
    ) : (
      false
    )}
    {props.submitted ? (
      <Spinner color="white" />
    ) : props.isTextRequired ? (
      <Text
        style={[
          props.submitButtonTextStyle,
          { paddingLeft: 0, paddingRight: 0 }
        ]}
      >
        {props.buttonText} {props.extraText}
      </Text>
    ) : (
      false
    )}
    {props.iconRight ? (
      <Icon name={props.iconName} style={{ color: props.iconColor }} />
    ) : (
      false
    )}
  </Button>
);

CustomButton.propTypes = {
  isTextRequired: PropTypes.bool,
  extraText: PropTypes.string,
  submitted: PropTypes.bool,
  isIconRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  buttonText: PropTypes.string,
  submitButtonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  submitButtonTextStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};
CustomButton.defaultProps = {
  onPress: () => {},
  isTextRequired: true,
  extraText: "",
  iconLeft: true,
  iconRight: false
};

export { CustomButton as default };
