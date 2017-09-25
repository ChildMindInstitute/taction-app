import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import FormInput from "../../components/FormInput";
import ForgotPassword from "../../components/ForgotPassword";
import Button from "../../components/Button";
import RegisterWithUs from "../../components/RegisterWithUs";
import { View, Form } from "native-base";
import styles from "./styles";
const Login = props => (
  <View style={[styles.MainView, { backgroundColor: props.BackgroundColor }]}>
    <View style={styles.TopSpace} />
    <Logo
      source={props.MainLogoSource}
      imageDimensions={styles.MainLogoStyles}
    />
    <View style={styles.FormSpace}>
      <Form style={styles.FormStyle}>
        <FormInput
          IsPassword={false}
          Label="Username"
          OnChange={props.UsernameChange}
          InputStyle={props.InputStyle}
          LabelStyle={props.InputLabelStyle}
          ItemStyle={props.InputItemStyle}
          ViewStyle={props.InputViewStyle}
        />
        <FormInput
          IsPassword={true}
          Label="Password"
          OnChange={props.PasswordChange}
          InputStyle={props.InputStyle}
          LabelStyle={props.InputLabelStyle}
          ItemStyle={props.InputItemStyle}
          ViewStyle={props.InputViewStyle}
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
    <View style={styles.RegisterNowSpace}>
      <RegisterWithUs
        TextStyle={props.RegisterWithUsTextStyle}
        TextButtonStyle={props.RegisterWithUsTextButtonStyle}
        OnPressRegisterNow={props.OnPressRegisterNow}
      />
    </View>
    <View style={styles.BottomLogoSpace}>
      <Logo
        source={props.SubLogoSource}
        imageDimensions={styles.SubLogoStyles}
      />
    </View>
  </View>
);

Login.propTypes = {
  ViewStyle: PropTypes.object,
  BackgroundColor: PropTypes.string,
  MainLogoSource: PropTypes.node.isRequired,
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
  OnPressRegisterNow: PropTypes.func,
  SubLogoSource: PropTypes.node.isRequired
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
