import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import FormInput from "../../components/FormInput";
import ForgotPassword from "../../components/ForgotPassword";
import Button from "../../components/Button";
import RegisterWithUs from "../../components/RegisterWithUs";
import { View, Form, Text } from "native-base";
import styles from "./styles";
import { StatusBar } from "react-native";
const Login = props => (
  <View style={{ flex: 1, backgroundColor: "#0067a0" }}>
    <View style={[styles.MainView, { backgroundColor: props.BackgroundColor }]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={props.StatusBarStyle}
      />
      <View style={styles.TopSpace}>
        <Logo />
      </View>
      <View style={styles.FormSpace}>
        <Form style={styles.FormStyle}>
          <FormInput
            IsPassword={false}
            Label="Username"
            OnChange={props.UsernameChange}
            ViewStyle={props.InputViewStyle}
            Error={props.EmailHasError}
            LabelColor={props.LabelColor}
            ErrorText="Username Cannot Be Empty"
          />
          <FormInput
            IsPassword={true}
            Label="Password"
            OnChange={props.PasswordChange}
            ViewStyle={props.InputViewStyle}
            Error={props.PasswordHasError}
            LabelColor={props.LabelColor}
            ErrorText="Password Cannot Be Empty"
          />
        </Form>
      </View>
      <View style={styles.ForgotPasswordSpace}>
        <ForgotPassword
          ForgotPasswordTextStyle={props.ForgotPasswordTextStyle}
          ForgotPasswordButtonStyle={props.ForgotPasswordButtonStyle}
          OnPressForgotPassword={props.OnPressForgotPassword}
        />
      </View>
      <View style={styles.SubmitButtonSpace}>
        <Button
          OnPress={props.OnPressSubmitButton}
          SubmitButtonStyle={props.SubmitButtonStyle}
          ButtonText="Submit &rarr;"
          SubmitButtonTextStyle={props.SubmitButtonTextStyle}
        />
      </View>
      <View style={styles.ErrorSpace}>
        <Text style={styles.ErrorText}>
          {props.HasSubmitError ? props.ErrorSubmissionText : " "}
        </Text>
      </View>
      <View style={styles.RegisterNowSpace}>
        <RegisterWithUs OnPressRegisterNow={props.OnPressRegisterNow} />
      </View>
      <View style={styles.BottomLogoSpace}>
        <Logo1 imageDimensions={styles.SubLogoStyles} />
      </View>
    </View>
  </View>
);

Login.propTypes = {
  HasSubmitError: PropTypes.bool,
  ErrorSubmissionText: PropTypes.string,
  LabelColor: PropTypes.string,
  EmailHasError: PropTypes.bool,
  PasswordHasError: PropTypes.bool,
  ViewStyle: PropTypes.object,
  BackgroundColor: PropTypes.string,
  UsernameChange: PropTypes.func,
  PasswordChange: PropTypes.func,
  ForgotPasswordTextStyle: PropTypes.object,
  ForgotPasswordButtonStyle: PropTypes.object,
  OnPressForgotPassword: PropTypes.func,
  OnPressSubmitButton: PropTypes.func,
  SubmitButtonStyle: PropTypes.object,
  SubmitButtonTextStyle: PropTypes.object,
  RegisterWithUsTextStyle: PropTypes.object,
  RegisterWithUsTextButtonStyle: PropTypes.object,
  OnPressRegisterNow: PropTypes.func
};
Login.defaultProps = {
  onPress: () => {},
  OnPressForgotPassword: () => {},
  OnPressRegisterNow: () => {},
  UsernameChange: () => {},
  SubmitButtonOnPress: () => {},
  PasswordChange: () => {}
};

export { Login as default };
