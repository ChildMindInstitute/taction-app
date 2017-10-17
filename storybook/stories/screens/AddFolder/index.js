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
    <View
      style={[
        styles.ContentStyle,
        {
          paddingBottom: props.children ? "15%" : "40%",
          paddingTop: props.ErrorDisplay ? "35%" : "40%"
        }
      ]}
    >
      <View style={styles.MainSpace}>
        <View
          style={{
            flex: 2,
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <FormInput
            IsPassword={false}
            Label="Add new folder with images"
            OnChange={event => props.FolderNameChange(event)}
            ViewStyle={styles.InputViewStyle}
            Placeholder="Folder name (such as 'Spider')"
            onFocus={props.onFocus}
          />
        </View>
        {props.ErrorDisplay ? (
          <Text style={{ color: "red", alignSelf: "center" }}>
            Folder name cannot be empty
          </Text>
        ) : (
          false
        )}
        <View style={{ flex: 3 }}>
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <Button
              OnPress={props.OnPressAddImage}
              SubmitButtonStyle={styles.SubmitButton3Style}
              IsIconRequired={true}
              IconName="image"
              IconColor="#0067a0"
              ButtonText="Add Images"
              SubmitButtonTextStyle={styles.SubmitButton3TextStyle}
            />
          </View>
          {props.children ? (
            <View
              style={{
                flex: 2,
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              {props.children}
            </View>
          ) : (
            <View />
          )}
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <Button
              OnPress={props.OnPressSaveButton}
              SubmitButtonStyle={styles.SaveButtonStyle}
              ButtonText={props.SaveFolderButtonText}
              Disabled={props.SaveDisabled}
              ExtraText="&rarr;"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <Button
              OnPress={props.OnPressSkipButton}
              SubmitButtonStyle={styles.SubmitButton2Style}
              ButtonText="Skip"
              SubmitButtonTextStyle={styles.SubmitButton2TextStyle}
            />
          </View>
        </View>
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
