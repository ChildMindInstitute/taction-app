import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { View, Form } from "native-base";
import { StatusBar } from "react-native";

import styles from "./styles";
const SignUp = props => (
  <View style={{ flex: 1, backgroundColor: "#0067a0" }}>
    <View style={[styles.MainView, { backgroundColor: props.BackgroundColor }]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={props.StatusBarStyle}
      />
      <View style={styles.TopSpace}>
        <Logo imageDimensions={styles.MainLogoStyles} />
      </View>
      <View style={styles.FormSpace}>
        <Form style={styles.FormStyle}>
          <FormInput
            IsPassword={false}
            Label="Username"
            OnChange={props.UsernameChange}
            LabelColor="white"
            ViewStyle={props.InputViewStyle}
          />
          <FormInput
            IsPassword={true}
            Label="Email"
            LabelColor="white"
            OnChange={props.EmailChange}
            ViewStyle={props.InputViewStyle}
          />
          <FormInput
            IsPassword={true}
            LabelColor="white"
            Label="Password"
            OnChange={props.PasswordChange}
            ViewStyle={props.InputViewStyle}
          />
          <FormInput
            IsPassword={true}
            LabelColor="white"
            Label="ConfirmPassword"
            OnChange={props.ConfirmPasswordChange}
            ViewStyle={props.InputViewStyle}
          />
        </Form>
      </View>

      <View style={styles.SubmitButtonSpace}>
        <Button
          OnPress={props.OnPressSubmitButton}
          SubmitButtonStyle={props.SubmitButtonStyle}
          ButtonText="Submit &rarr;"
          SubmitButtonTextStyle={props.SubmitButtonTextStyle}
        />
      </View>
      <View style={styles.BottomLogoSpace}>
        <Logo1 imageDimensions={styles.SubLogoStyles} />
      </View>
    </View>
  </View>
);

SignUp.propTypes = {
  BackgroundColor: PropTypes.string,
  UsernameChange: PropTypes.func,
  PasswordChange: PropTypes.func,
  ConfirmPasswordChange: PropTypes.func,
  OnPressSubmitButton: PropTypes.func,
  EmailChange: PropTypes.func,
  SubmitButtonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  SubmitButtonTextStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  InputStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  InputItemStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  InputViewStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};
SignUp.defaultProps = {
  EmailChange: () => {},
  OnPressSubmitButton: () => {},
  PasswordChange: () => {},
  UsernameChange: () => {},
  ConfirmPasswordChange: () => {}
};

export { SignUp as default };
