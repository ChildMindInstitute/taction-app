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
  <View style={styles.MainOuterView}>
    <View style={styles.MainView}>
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
            Error={props.UsernameError}
            ErrorText={props.Error.Username}
          />
          <FormInput
            IsPassword={false}
            Label="Email"
            LabelColor="white"
            OnChange={props.EmailChange}
            ViewStyle={props.InputViewStyle}
            Error={props.EmailError}
            ErrorText={props.Error.Email}
          />
          <FormInput
            IsPassword={true}
            LabelColor="white"
            Label="Password"
            OnChange={props.PasswordChange}
            ViewStyle={props.InputViewStyle}
            Error={props.PasswordError}
            ErrorText={props.Error.Password}
          />
          <FormInput
            IsPassword={true}
            LabelColor="white"
            Label="ConfirmPassword"
            OnChange={props.ConfirmPasswordChange}
            ViewStyle={props.InputViewStyle}
            Error={props.ConfirmPasswordError}
            ErrorText={props.Error.ConfirmPassword}
          />
        </Form>
      </View>

      <View style={styles.SubmitButtonSpace}>
        <Button
          OnPress={props.OnPressSubmitButton}
          SubmitButtonStyle={styles.SubmitButtonStyle}
          SubmitButtonTextStyle={styles.SubmitButtonTextStyle}
          ButtonText="Submit &rarr;"
        />
      </View>
      <View style={styles.BottomLogoSpace}>
        <Logo1 imageDimensions={styles.SubLogoStyles} />
      </View>
    </View>
  </View>
);

SignUp.propTypes = {
  ConfirmPasswordError: PropTypes.bool,
  PasswordError: PropTypes.bool,
  EmailError: PropTypes.bool,
  UsernameError: PropTypes.bool,
  BackgroundColor: PropTypes.string,
  UsernameChange: PropTypes.func,
  PasswordChange: PropTypes.func,
  ConfirmPasswordChange: PropTypes.func,
  OnPressSubmitButton: PropTypes.func,
  EmailChange: PropTypes.func,
  Error: PropTypes.object,
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
