import React from "react";
import PropTypes from "prop-types";
import { Input, Item, View, Text } from "native-base";
const FormInput = props => (
  <View style={props.ViewStyle}>
    <Item
      regular
      style={{
        flex: 1,
        flexDirection: "column",
        borderColor: "transparent"
      }}
      error={props.Error}
    >
      <Text
        style={{
          fontSize: 16,
          color: props.LabelColor,
          alignSelf: "flex-start"
        }}
      >
        {props.Label}
      </Text>
      <Input
        style={{
          width: "102%",
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#0067a0"
        }}
        onChange={props.OnChange}
        secureTextEntry={props.IsPassword}
        keyboardType={props.OnlyNumberEntry ? "numeric" : "default"}
      />

      <Text
        style={{
          position: "absolute",
          top: "50%",
          alignSelf: "flex-end",
          color: "#EF3350"
        }}
      >
        {props.Error ? props.ErrorText : " "}
      </Text>
    </Item>
  </View>
);

FormInput.propTypes = {
  Error: PropTypes.bool,
  LabelColor: PropTypes.string,
  ErrorText: PropTypes.string,
  OnlyNumberEntry: PropTypes.bool,
  ViewStyle: PropTypes.object,
  Label: PropTypes.string,
  OnChange: PropTypes.func,
  IsPassword: PropTypes.bool
};
FormInput.defaultProps = {
  onPress: () => {},
  onChange: () => {}
};

export { FormInput as default };
