import React from "react";
import PropTypes from "prop-types";
import { Input, Item, View, Text } from "native-base";
const FormInput = props => (
  <View style={props.ViewStyle}>
    <Item regular style={props.ItemStyle}>
      <Text style={props.LabelStyle}>{props.Label}</Text>
      <Input
        style={props.InputStyle}
        onChange={props.OnChange}
        secureTextEntry={props.IsPassword}
      />
    </Item>
  </View>
);

FormInput.propTypes = {
  ViewStyle: PropTypes.object,
  InputStyle: PropTypes.object,
  Label: PropTypes.string,
  OnChange: PropTypes.func,
  IsPassword: PropTypes.bool,
  LabelStyle: PropTypes.object,
  ItemStyle: PropTypes.object
};
FormInput.defaultProps = {
  onPress: () => {},
  onChange: () => {}
};

export { FormInput as default };
