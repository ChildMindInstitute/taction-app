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
        <View style={{ flex: 3 }}>
          <FormInput
            IsPassword={false}
            Label="Name of child"
            OnChange={event => props.ChildNameChange(event)}
            ViewStyle={styles.InputViewStyle}
          />
          <FormInput
            IsPassword={false}
            Label="Age of child"
            OnChange={event => props.ChildAgeChange(event)}
            OnlyNumberEntry={true}
            ViewStyle={styles.InputViewStyle}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            OnPress={props.OnPressSaveButton}
            SubmitButtonStyle={styles.SubmitButtonStyle}
            ButtonText="Save &rarr;"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            OnPress={props.OnPressSkipButton}
            SubmitButtonStyle={styles.SubmitButton2Style}
            ButtonText="Skip"
            SubmitButtonTextStyle={styles.SubmitButton2TextStyle}
          />
        </View>
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
