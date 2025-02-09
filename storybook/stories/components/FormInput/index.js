import React from "react";
import PropTypes from "prop-types";
import { Input, Item, View, Text, Icon } from "native-base";
import styles from "./styles";
const FormInput = props => (
  <View style={props.viewStyle}>
    <Item regular style={styles.itemStyle} error={props.error}>
      <Text
        style={[
          styles.labelStyle,
          {
            color: props.labelColor
          }
        ]}
      >
        {props.label}
      </Text>
      <View style={styles.inputStyle}>
        <Input
          defaultValue={props.value}
          style={{
            borderColor: props.error && props.isSignUpPorCP ? "red" : "white",
            borderWidth: 1.5,
            height: 40,
            flex: 1,
            paddingVertical: 0
          }}
          autoCapitalize="none"
          disabled={props.disabled}
          onChange={props.onChange}
          secureTextEntry={props.isPassword}
          keyboardType={props.onlyNumberEntry ? "numeric" : "default"}
          maxLength={props.isAge ? 2 : 50}
          placeholder={props.placeholder}
          onFocus={props.onFocus}
        />
        {props.error && props.isSignUpPorCP ? (
          <Icon
            name="information-circle"
            style={styles.errorContentStyle}
            active={true}
          />
        ) : (
          <View />
        )}
      </View>
    </Item>
  </View>
);

FormInput.propTypes = {
  isAge: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.bool,
  labelColor: PropTypes.string,
  errorText: PropTypes.string,
  onlyNumberEntry: PropTypes.bool,
  viewStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string,
  onChange: PropTypes.func,
  isPassword: PropTypes.bool
};
FormInput.defaultProps = {
  isAge: false,
  disabled: false,
  onPress: () => {},
  onChange: () => {}
};

export { FormInput as default };
