import React from "react";
import PropTypes from "prop-types";
import { Input, Item, View, Text, Icon, Button } from "native-base";
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
      <Input
        style={styles.InputStyle}
        onChange={props.OnChange}
        secureTextEntry={props.IsPassword}
        keyboardType={props.OnlyNumberEntry ? "numeric" : "default"}
      />
      <View style={styles.ErrorViewStyle}>
        {props.Error ? (
          <Button disabled iconLeft style={styles.ErrorButtonStyle}>
            <Icon
              name="information-circle"
              style={styles.ErrorContentStyle}
              active={true}
            />
            <Text style={styles.ErrorContentStyle}>{props.ErrorText}</Text>
          </Button>
        ) : (
          <Text> </Text>
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
