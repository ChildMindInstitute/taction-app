import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import FormInput from "../../components/FormInput";
import Button2 from "../../components/Button";
import {
  View,
  Form,
  Text,
  Icon,
  Left,
  Body,
  Button,
  Container,
  Content
} from "native-base";
import styles from "./styles";
import { StatusBar } from "react-native";
const Login = props => (
  <Container style={styles.mainView}>
    <Content>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#00466b"
        translucent
      />
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
              label="Email address"
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
            buttonText="Submit"
            iconName="md-arrow-round-forward"
            iconRight={true}
            iconLeft={false}
            iconColor="white"
            submitted={props.submitted}
            disabled={props.submitDisabled}
          />
        </View>

        <View style={styles.registerNowSpace}>
          <Text style={{ color: "rgba(255,255,255,0.8)", alignSelf: "center" }}>
            Back to the{" "}
            <Text
              onPress={props.onReturnLoginPress}
              style={styles.loginRedirectButtonTextStyle}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.bottomLogoSpace}>
        <Logo1 imageDimensions={styles.subLogoStyles} />
      </View>
    </Content>
  </Container>
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
  onPressRegisterNow: PropTypes.func,
  onReturnLoginPress: PropTypes.funcm
};
Login.defaultProps = {
  onPressSubmitButton: () => {},
  onPressForgotPassword: () => {},
  onPressRegisterNow: () => {},
  usernameChange: () => {},
  SubmitButtonOnPress: () => {},
  passwordChange: () => {},
  onReturnLoginPress: () => {}
};

export { Login as default };
