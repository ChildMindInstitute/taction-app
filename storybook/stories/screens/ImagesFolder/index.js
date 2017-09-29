import React from "react";
import PropTypes from "prop-types";
import ImagesFolderList from "../../components/ImagesFolderList";
import Button2 from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View, Button, Icon } from "native-base";
import styles from "./styles";
const ImagesFolder = props => (
  <Container style={styles.ContainerStyle}>
    <HeaderCommon
      isRightRequired={true}
      leftIconStyle={styles.HeaderLeftStyle}
      leftPress={props.DrawerOpen}
      leftIconName="menu"
      headerStyle={styles.HeaderStyle}
      Title="Images Folder"
      TitleStyle={styles.HeaderLeftStyle}
    >
      <Button transparent onPress={props.OnDeleteButton}>
        <Icon name="trash" style={{ color: "#fff" }} />
      </Button>
    </HeaderCommon>
    <View style={styles.ContentStyle}>
      <View style={styles.GreetingsSpace}>
        <Button2
          OnPress={props.OnPressSubmitButton}
          SubmitButtonStyle={{
            marginLeft: "32%",
            marginRight: "32%",
            backgroundColor: "#eeae30"
          }}
          ButtonText="+ AddFolder"
        />
      </View>
      <View style={styles.ListSpace}>
        <ImagesFolderList
          ListData={props.ExcerciseData}
          ListItemPress={props.ListItemPress}
        />
      </View>
    </View>
  </Container>
);

ImagesFolder.propTypes = {
  DrawerOpen: PropTypes.func,
  TotalPoints: PropTypes.number,
  SubmitButtonTextStyle: PropTypes.object,
  SubmitButtonStyle: PropTypes.object,
  OnPressSubmitButton: PropTypes.func,
  ExcerciseDataIcon: PropTypes.string,
  ExcerciseData: PropTypes.array,
  ListItemPress: PropTypes.func,
  children: PropTypes.node.isRequired
};
ImagesFolder.defaultProps = {
  onPress: () => {},
  OnPressForgotPassword: () => {},
  OnPressRegisterNow: () => {},
  UsernameChange: () => {},
  SubmitButtonOnPress: () => {},
  PasswordChange: () => {}
};

export { ImagesFolder as default };
