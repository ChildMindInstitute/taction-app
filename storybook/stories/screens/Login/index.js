import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import FormInput from "../../components/FormInput";
import ForgotPassword from "../../components/ForgotPassword";
import Button from "../../components/Button";
import RegisterWithUs from "../../components/RegisterWithUs";
import { View, Form, Text, Icon, Left, Body } from "native-base";
import styles from "./styles";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "react-native";
const Login = props => (
  <KeyboardAvoidingView
    style={styles.mainView}
    behavior="position"
    contentContainerStyle={styles.mainView}
    keyboardVerticalOffset={-200}
  >
    <View style={styles.mainInnerView}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.topSpace}>
        <Logo imageDimensions={styles.mainLogoStyles} />
      </View>
      <View
        style={[
          styles.errorSpace,
          {
            backgroundColor: props.hasSubmitError ? "#EF3350" : "transparent"
          }
        ]}
      >
        {props.hasSubmitError ? (
          <Left style={{ flex: 1 }}>
            <Icon
              name="information-circle"
              active={true}
              style={{ color: "white" }}
            />
          </Left>
        ) : (
          <View />
        )}
        <Body style={{ flex: 9 }}>
          <Text style={styles.errorText}>
            {props.hasSubmitError ? props.error.submitError : " "}
          </Text>
        </Body>
      </View>
      <View style={styles.formSpace}>
        <Form style={styles.formStyle}>
          <FormInput
            isPassword={false}
            label="Username"
            onChange={props.usernameChange}
            viewStyle={props.inputViewStyle}
            error={props.emailHasError}
            labelColor={props.labelColor}
          />
          <FormInput
            isPassword={true}
            label="Password"
            onChange={props.passwordChange}
            viewStyle={props.inputViewStyle}
            error={props.passwordHasError}
            labelColor={props.labelColor}
          />
        </Form>
      </View>
      <View style={styles.forgotPasswordSpace}>
        <ForgotPassword
          forgotPasswordTextStyle={props.forgotPasswordTextStyle}
          forgotPasswordButtonStyle={props.forgotPasswordButtonStyle}
          onPressForgotPassword={props.onPressForgotPassword}
        />
      </View>
      <View style={styles.submitButtonSpace}>
        <Button
          onPress={props.onPressSubmitButton}
          submitButtonStyle={styles.submitButtonStyle}
          submitButtonTextStyle={styles.submitButtonTextStyle}
          buttonText="Submit &rarr;"
          submitted={props.submitted}
        />
      </View>

      <View style={styles.registerNowSpace}>
        <RegisterWithUs onPressRegisterNow={props.onPressRegisterNow} />
      </View>
      <View style={styles.bottomLogoSpace}>
        <Logo1 imageDimensions={styles.subLogoStyles} />
      </View>
    </View>
  </KeyboardAvoidingView>
);

Login.propTypes = {
  submitted: PropTypes.bool,
  error: PropTypes.object,
  hasSubmitError: PropTypes.bool,
  labelColor: PropTypes.string,
  emailHasError: PropTypes.bool,
  passwordHasError: PropTypes.bool,
  viewStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  usernameChange: PropTypes.func,
  passwordChange: PropTypes.func,
  forgotPasswordTextStyle: PropTypes.object,
  forgotPasswordButtonStyle: PropTypes.object,
  onPressForgotPassword: PropTypes.func,
  onPressSubmitButton: PropTypes.func,
  submitButtonStyle: PropTypes.object,
  submitButtonTextStyle: PropTypes.object,
  registerWithUsTextStyle: PropTypes.object,
  registerWithUsTextButtonStyle: PropTypes.object,
  onPressRegisterNow: PropTypes.func
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
