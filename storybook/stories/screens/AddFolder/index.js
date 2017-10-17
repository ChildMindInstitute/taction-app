import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View, Text } from "native-base";
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
          Placeholder="Folder name (such as 'Spider')"
          onFocus={props.onFocus}
        />
        <Text style={{ color: "red", alignSelf: "center", marginBottom: "4%" }}>
          {props.ErrorDisplay ? "Folder Name Cannot Be Empty" : " "}
        </Text>
        <Button
          OnPress={props.OnPressAddImage}
          SubmitButtonStyle={styles.SubmitButton3Style}
          IsIconRequired={true}
          IconName="image"
          IconColor="#0067a0"
          ButtonText="Add Images"
          SubmitButtonTextStyle={styles.SubmitButton3TextStyle}
        />
        {props.children}
        <Button
          OnPress={props.OnPressSaveButton}
          SubmitButtonStyle={props.SaveButtonStyle}
          ButtonText={props.SaveFolderButtonText}
          Disabled={props.SaveDisabled}
          ExtraText="&rarr;"
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
  SaveDisabled: PropTypes.bool,
  SaveFolderButtonText: PropTypes.string,
  Back: PropTypes.func,
  OnPressAddImage: PropTypes.func,
  FolderNameChange: PropTypes.func,
  OnPressSkipButton: PropTypes.func,
  OnPressSaveButton: PropTypes.func,
  DisabledOpacity: PropTypes.bool
};
AddFolder.defaultProps = {
  Back: () => {},
  OnPressAddImage: () => {},
  FolderNameChange: () => {},
  OnPressSkipButton: () => {},
  OnPressSaveButton: () => {}
};

export { AddFolder as default };
