import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import FormInput from "../../components/FormInput";
import styles from "./styles";
const AddFolder = props => (
  <Container style={styles.ContainerStyle}>
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={styles.HeaderLeftStyle}
      leftPress={props.Back}
      leftIconName="arrow-back"
      headerStyle={styles.HeaderStyle}
      Title="Setup"
      TitleStyle={styles.HeaderLeftStyle}
    />
    <View style={styles.ContentStyle}>
      <View style={styles.MainSpace}>
        <FormInput
          IsPassword={false}
          Label="Add new folder with images"
          OnChange={event => props.FolderNameChange(event)}
          ViewStyle={styles.InputViewStyle}
        />

        <Button
          OnPress={props.OnPressAddImage}
          SubmitButtonStyle={styles.SubmitButton3Style}
          IsIconRequired={true}
          IconName="image"
          IconColor="#0067a0"
          ButtonText="Add Image"
          SubmitButtonTextStyle={styles.SubmitButton3TextStyle}
        />
        {props.children}
        <Button
          OnPress={props.OnPressSaveButton}
          SubmitButtonStyle={styles.SubmitButtonStyle}
          ButtonText="Save &rarr;"
        />
        <Button
          OnPress={props.OnPressSkipButton}
          SubmitButtonStyle={styles.SubmitButton2Style}
          ButtonText="Skip"
          SubmitButtonTextStyle={styles.SubmitButton2TextStyle}
        />
      </View>
    </View>
  </Container>
);

AddFolder.propTypes = {
  Back: PropTypes.func,
  OnPressAddImage: PropTypes.func,
  FolderNameChange: PropTypes.func,
  OnPressSkipButton: PropTypes.func,
  OnPressSaveButton: PropTypes.func
};
AddFolder.defaultProps = {
  Back: () => {},
  OnPressAddImage: () => {},
  FolderNameChange: () => {},
  OnPressSkipButton: () => {},
  OnPressSaveButton: () => {}
};

export { AddFolder as default };
