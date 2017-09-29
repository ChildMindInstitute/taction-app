import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { View, Form } from "native-base";
import styles from "./styles";
const SignUp = props => (
  <View style={[styles.MainView, { backgroundColor: props.BackgroundColor }]}>
    <View style={styles.TopSpace}>
      <Logo imageDimensions={styles.MainLogoStyles} />
    </View>
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
          Label="Email"
          OnChange={props.EmailChange}
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
        <FormInput
          IsPassword={true}
          Label="ConfirmPassword"
          OnChange={props.ConfirmPasswordChange}
          InputStyle={props.InputStyle}
          LabelStyle={props.InputLabelStyle}
          ItemStyle={props.InputItemStyle}
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
);

SignUp.propTypes = {
  BackgroundColor: PropTypes.string,
  UsernameChange: PropTypes.func,
  PasswordChange: PropTypes.func,
  ConfirmPasswordChange: PropTypes.func,
  OnPressSubmitButton: PropTypes.func,
  EmailChange: PropTypes.func
};
SignUp.defaultProps = {
  EmailChange: () => {},
  OnPressSubmitButton: () => {},
  PasswordChange: () => {},
  UsernameChange: () => {},
  ConfirmPasswordChange: () => {}
};

export { SignUp as default };
