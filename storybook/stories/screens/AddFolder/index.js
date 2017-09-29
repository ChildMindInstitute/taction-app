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
      leftPress={props.DrawerOpen}
      leftIconName="menu"
      headerStyle={styles.HeaderStyle}
      Title="Setup"
      TitleStyle={styles.HeaderLeftStyle}
    />
    <View style={styles.ContentStyle}>
      <View style={styles.MainSpace}>
        <FormInput
          IsPassword={false}
          Label="Add new folder with Images"
          OnChange={event => props.FolderNameChange(event)}
          InputStyle={{
            width: "102%",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#0067a0"
          }}
          LabelStyle={{
            fontSize: 16,
            alignSelf: "flex-start",
            marginTop: "-20%"
          }}
          ItemStyle={{
            flex: 1,
            flexDirection: "column"
          }}
          ViewStyle={{ margin: "10%" }}
        />
        <Button
          OnPress={props.OnPressAddImage}
          SubmitButtonStyle={{
            marginBottom: "5%",
            marginLeft: "10%",
            marginRight: "10%",
            backgroundColor: "#ffffff"
          }}
          IsIconRequired={true}
          IconName="image"
          IconColor="#0067a0"
          ButtonText="Add Image"
          SubmitButtonTextStyle={{ color: "#0067a0" }}
        />
        <Button
          OnPress={props.OnPressSaveButton}
          SubmitButtonStyle={{
            marginBottom: "5%",
            marginLeft: "10%",
            marginRight: "10%",
            backgroundColor: "#eeae30"
          }}
          ButtonText="Save &rarr;"
        />
        <Button
          OnPress={props.OnPressSkipButton}
          SubmitButtonStyle={{
            backgroundColor: "transparent",
            marginLeft: "10%",
            marginRight: "10%",
            borderWidth: 1,
            borderColor: "#ccc"
          }}
          ButtonText="Skip"
          SubmitButtonTextStyle={{ color: "#000" }}
        />
      </View>
    </View>
  </Container>
);

AddFolder.propTypes = {
  DrawerOpen: PropTypes.func,
  OnPressAddImage: PropTypes.func,
  FolderNameChange: PropTypes.func,
  OnPressSkipButton: PropTypes.func,
  OnPressSaveButton: PropTypes.func
};
AddFolder.defaultProps = {
  DrawerOpen: () => {},
  OnPressAddImage: () => {},
  FolderNameChange: () => {},
  OnPressSkipButton: () => {},
  OnPressSaveButton: () => {}
};

export { AddFolder as default };
