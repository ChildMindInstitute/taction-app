import React from "react";
import PropTypes from "prop-types";
import Button2 from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View, Text, Button, Icon } from "native-base";
import FormInput from "../../components/FormInput";
import styles from "./styles";
const AddFolder = props => (
  <Container style={styles.containerStyle}>
    <HeaderCommon
      isRightRequired={props.isRightRequired}
      leftIconStyle={styles.headerLeftStyle}
      leftPress={props.drawerOpen}
      leftIconName="menu"
      headerStyle={styles.headerStyle}
      title="Setup"
      titleStyle={styles.headerLeftStyle}
    >
      <Button transparent onPress={props.delPress}>
        <Icon name="trash" style={{ color: "white" }} />
      </Button>
    </HeaderCommon>
    <View
      style={[
        styles.contentStyle,
        {
          paddingBottom: props.children ? "15%" : "40%",
          paddingTop: props.errorDisplay ? "35%" : "40%"
        }
      ]}
    >
      <View style={styles.mainSpace}>
        <View
          style={{
            flex: 2,
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <FormInput
            isPassword={false}
            label="Add new folder with images"
            onChange={event => props.folderNameChange(event)}
            viewStyle={styles.inputViewStyle}
            placeholder="Folder name (such as 'Spider')"
            onFocus={props.onFocus}
          />
        </View>
        {props.errorDisplay ? (
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
            <Button2
              onPress={props.onPressAddImage}
              submitButtonStyle={styles.submitButton3Style}
              isIconRequired={true}
              iconName="image"
              iconColor="#0067a0"
              buttonText="Add Images"
              submitButtonTextStyle={styles.submitButton3TextStyle}
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
            <Button2
              onPress={props.onPressSaveButton}
              submitButtonStyle={styles.saveButtonStyle}
              buttonText={props.saveFolderButtonText}
              disabled={props.saveDisabled}
              submitted={props.submitted}
              iconName="ios-arrow-round-forward"
              iconRight={true}
              iconLeft={false}
              iconColor="white"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <Button2
              onPress={props.onPressSkipButton}
              submitButtonStyle={styles.submitButton2Style}
              buttonText="Skip"
              submitButtonTextStyle={styles.submitButton2TextStyle}
            />
          </View>
        </View>
      </View>
    </View>
  </Container>
);

AddFolder.propTypes = {
  saveDisabled: PropTypes.bool,
  saveFolderButtonText: PropTypes.string,
  drawerOpen: PropTypes.func,
  onPressAddImage: PropTypes.func,
  folderNameChange: PropTypes.func,
  onPressSkipButton: PropTypes.func,
  onPressSaveButton: PropTypes.func,
  disabledOpacity: PropTypes.bool
};
AddFolder.defaultProps = {
  drawerOpen: () => {},
  onPressAddImage: () => {},
  folderNameChange: () => {},
  onPressSkipButton: () => {},
  onPressSaveButton: () => {}
};

export { AddFolder as default };
