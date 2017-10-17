import React from "react";
import PropTypes from "prop-types";
import { Input, Item, View, Text, Icon } from "native-base";
import styles from "./styles";
const FormInput = props => (
  <View style={props.ViewStyle}>
    <Item regular style={styles.ItemStyle} error={props.Error}>
      <Text
        style={[
          styles.LabelStyle,
          {
            color: props.LabelColor
          }
        ]}
      >
        {props.Label}
      </Text>
      <View style={styles.InputStyle}>
        <Input
          style={{
            borderColor: props.Error ? "red" : "white",
            borderWidth: 1.5
          }}
          onChange={props.OnChange}
          secureTextEntry={props.IsPassword}
          keyboardType={props.OnlyNumberEntry ? "numeric" : "default"}
          placeholder={props.Placeholder}
          onFocus={props.onFocus}
        />
        {props.Error ? (
          <Icon
            name="information-circle"
            style={styles.ErrorContentStyle}
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
  Error: PropTypes.bool,
  LabelColor: PropTypes.string,
  ErrorText: PropTypes.string,
  OnlyNumberEntry: PropTypes.bool,
  ViewStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  Label: PropTypes.string,
  OnChange: PropTypes.func,
  IsPassword: PropTypes.bool
};
FormInput.defaultProps = {
  onPress: () => {},
  onChange: () => {}
};

export { FormInput as default };
