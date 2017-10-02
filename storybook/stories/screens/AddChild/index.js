import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import FormInput from "../../components/FormInput";
import styles from "./styles";
const AddChild = props => (
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
          Label="Name of Child"
          OnChange={event => props.ChildNameChange(event)}
          ViewStyle={{
            flex: 0.15,
            marginLeft: "10%",
            marginRight: "10%"
          }}
        />
        <FormInput
          IsPassword={false}
          Label="Age of Child"
          OnChange={event => props.ChildAgeChange(event)}
          OnlyNumberEntry={true}
          ViewStyle={styles.InputViewStyle}
        />
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

AddChild.propTypes = {
  ChildAgeChange: PropTypes.func,
  ChildNameChange: PropTypes.func,
  DrawerOpen: PropTypes.func,
  OnPressSkipButton: PropTypes.func,
  OnPressSaveButton: PropTypes.func
};
AddChild.defaultProps = {
  ChildNameChange: () => {},
  DrawerOpen: () => {},
  OnPressSkipButton: () => {},
  OnPressSaveButton: () => {}
};

export { AddChild as default };
