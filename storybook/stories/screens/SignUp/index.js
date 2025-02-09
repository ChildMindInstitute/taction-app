import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import FormInput from "../../components/FormInput";
import Button2 from "../../components/Button";
import { View, Form, Text, Button, Content, Container } from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const SignUp = props => (
  <Container style={styles.mainOuterView}>
    <StatusBar barStyle="light-content" backgroundColor="#00466b" translucent />
    <Content>
      <View style={styles.mainView}>
        <View style={styles.topSpace}>
          <Logo imageDimensions={styles.mainLogoStyles} />
        </View>
        <View style={styles.formSpace}>
          <Form style={styles.formStyle}>
            <FormInput
              isPassword={false}
              label="Username"
              onChange={props.usernameChange}
              labelColor="white"
              viewStyle={props.inputViewStyle}
            />
            <FormInput
              isPassword={false}
              label="Email"
              labelColor="white"
              onChange={props.emailChange}
              viewStyle={props.inputViewStyle}
            />
            <FormInput
              isPassword={true}
              labelColor="white"
              label="Password"
              isSignUpPorCP={true}
              onChange={props.passwordChange}
              viewStyle={props.inputViewStyle}
              error={props.passwordError}
            />
            <FormInput
              isPassword={true}
              labelColor="white"
              isSignUpPorCP={true}
              label="Confirm password"
              onChange={props.confirmPasswordChange}
              viewStyle={props.inputViewStyle}
              error={props.confirmPasswordError}
            />
          </Form>
        </View>

        <View style={styles.submitButtonSpace}>
          <Button2
            onPress={props.onPressSubmitButton}
            submitButtonTextStyle={styles.submitButtonTextStyle}
            buttonText="Submit"
            iconName="md-arrow-round-forward"
            iconRight={true}
            iconLeft={false}
            iconColor="white"
            submitted={props.submitted}
            disabled={props.disabled}
          />
        </View>
        <View style={styles.alreadyHaveAnAccountSpace}>
          <Text style={styles.alreadyHaveAnAccountTextColor}>
            Already have an account?{" "}
            <Text
              onPress={props.loginRedirectPress}
              style={styles.loginRedirectButtonTextStyle}
            >
              Login
            </Text>
          </Text>
        </View>
        <View style={styles.BottomlogoSpace}>
          <Logo1 imageDimensions={styles.subLogoStyles} />
        </View>
      </View>
    </Content>
  </Container>
);

SignUp.propTypes = {
  confirmPasswordError: PropTypes.bool,
  passwordError: PropTypes.bool,
  emailError: PropTypes.bool,
  usernameError: PropTypes.bool,
  backgroundColor: PropTypes.string,
  loginRedirectPress: PropTypes.func,
  usernameChange: PropTypes.func,
  passwordChange: PropTypes.func,
  confirmPasswordChange: PropTypes.func,
  onPressSubmitButton: PropTypes.func,
  emailChange: PropTypes.func,
  error: PropTypes.object,
  inputViewStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};
SignUp.defaultProps = {
  loginRedirectPress: () => {},
  usernameChange: () => {},
  passwordChange: () => {},
  confirmPasswordChange: () => {},
  onPressSubmitButton: () => {},
  emailChange: () => {}
};

export { SignUp as default };
