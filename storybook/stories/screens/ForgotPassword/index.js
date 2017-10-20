import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import FormInput from "../../components/FormInput";
import Button2 from "../../components/Button";
import { View, Form, Text, Icon, Left, Body, Button } from "native-base";
import styles from "./styles";
import { KeyboardAvoidingView, StatusBar } from "react-native";
const Login = props => (
  <KeyboardAvoidingView
    style={styles.mainView}
    behavior="position"
    contentContainerStyle={styles.mainView}
    keyboardVerticalOffset={-200}
  >
    <StatusBar barStyle="light-content" />
    <View style={styles.mainInnerView}>
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
            label="Username / Email address"
            onChange={props.emailChange}
            viewStyle={props.inputViewStyle}
            error={props.emailHasError}
            labelColor={props.labelColor}
            value={props.prevValue}
          />
        </Form>
      </View>
      <View style={styles.submitButtonSpace}>
        <Button2
          onPress={props.onPressSubmitButton}
          submitButtonStyle={styles.submitButtonStyle}
          submitButtonTextStyle={styles.submitButtonTextStyle}
          buttonText="Submit &rarr;"
          submitted={props.submitted}
          disabled={props.submitDisabled}
        />
      </View>

      <View style={styles.registerNowSpace}>
        <Text style={{ color: "#fff", opacity: 0.8, marginLeft: "10%" }}>
          Back to the
          <Button transparent style={styles.loginRedirectButtonStyle}>
            <Text style={styles.loginRedirectButtonTextStyle}>Login</Text>
          </Button>
        </Text>
      </View>
      <View style={styles.bottomLogoSpace}>
        <Logo1 imageDimensions={styles.subLogoStyles} />
      </View>
    </View>
  </KeyboardAvoidingView>
);

Login.propTypes = {
  prevValue: PropTypes.string,
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
  onPressSubmitButton: () => {},
  onPressForgotPassword: () => {},
  onPressRegisterNow: () => {},
  usernameChange: () => {},
  SubmitButtonOnPress: () => {},
  passwordChange: () => {}
};

export { Login as default };
