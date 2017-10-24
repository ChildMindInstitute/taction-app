import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import FormInput from "../../components/FormInput";
import ForgotPassword from "../../components/ForgotPassword";
import Button from "../../components/Button";
import RegisterWithUs from "../../components/RegisterWithUs";
import {
  View,
  Form,
  Text,
  Icon,
  Left,
  Body,
  Container,
  Content
} from "native-base";
import styles from "./styles";
import { StatusBar } from "react-native";
const Login = props => (
  <Container style={styles.mainView}>
    <Content>
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
            buttonText="Submit"
            submitted={props.submitted}
            iconName="ios-arrow-round-forward"
            iconRight={true}
            iconLeft={false}
            iconColor="white"
          />
        </View>

        <View style={styles.registerNowSpace}>
          <RegisterWithUs onPressRegisterNow={props.onPressRegisterNow} />
        </View>
        <View style={styles.bottomLogoSpace}>
          <Logo1 imageDimensions={styles.subLogoStyles} />
        </View>
      </View>
    </Content>
  </Container>
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
  onPressSubmitButton: () => {},
  onPressForgotPassword: () => {},
  onPressRegisterNow: () => {},
  usernameChange: () => {},
  SubmitButtonOnPress: () => {},
  passwordChange: () => {}
};

export { Login as default };
