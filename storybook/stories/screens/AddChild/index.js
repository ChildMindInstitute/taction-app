import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import FormInput from "../../components/FormInput";
import styles from "./styles";
const AddChild = props => (
  <Container style={styles.containerStyle}>
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={styles.headerLeftStyle}
      leftPress={props.drawerOpen}
      leftIconName="menu"
      headerStyle={styles.headerStyle}
      title="Setup"
      titleStyle={styles.headerLeftStyle}
    />
    <View style={styles.contentStyle}>
      <View style={styles.mainSpace}>
        <View style={{ flex: 3 }}>
          <FormInput
            isPassword={false}
            label="Name of child"
            onChange={event => props.childNameChange(event)}
            viewStyle={styles.inputViewStyle}
          />
          <FormInput
            isPassword={false}
            label="Age of child"
            onChange={event => props.childAgeChange(event)}
            onlyNumberEntry={true}
            viewStyle={styles.inputViewStyle}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            onPress={props.onPressSaveButton}
            submitButtonStyle={styles.submitButtonStyle}
            buttonText="Save"
            iconName="ios-arrow-round-forward"
            iconRight={true}
            iconLeft={false}
            iconColor="white"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            onPress={props.onPressSkipButton}
            submitButtonStyle={styles.submitButton2Style}
            buttonText="Skip"
            submitButtonTextStyle={styles.submitButton2TextStyle}
          />
        </View>
      </View>
    </View>
  </Container>
);

AddChild.propTypes = {
  childAgeChange: PropTypes.func,
  childNameChange: PropTypes.func,
  drawerOpen: PropTypes.func,
  onPressSkipButton: PropTypes.func,
  onPressSaveButton: PropTypes.func
};
AddChild.defaultProps = {
  childNameChange: () => {},
  drawerOpen: () => {},
  onPressSkipButton: () => {},
  onPressSaveButton: () => {}
};

export { AddChild as default };
