import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import Button from "../../components/Button";
import { View, Text } from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const Welcome = props => (
  <View style={styles.MainOuterView}>
    <View style={styles.MainView}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={props.StatusBarStyle}
      />
      <View style={styles.TopSpace}>
        <Logo imageDimensions={styles.MainLogoStyles} />
      </View>
      <View style={styles.WelcomeTextSpace}>
        <Text style={styles.WelcomeText}>Welcome!</Text>
      </View>
      <View style={styles.ConfirmTextSpace}>
        <Text style={styles.ConfirmTextStyle}>
          You have successfully completed
        </Text>
        <Text style={styles.ConfirmTextStyle}>the registration.</Text>
      </View>
      <Button
        OnPress={props.OnPressSubmitButton}
        SubmitButtonStyle={styles.SubmitButtonStyle}
        SubmitButtonTextStyle={styles.SubmitButtonTextStyle}
        ButtonText="Get in &rarr;"
      />
      <View style={styles.BottomLogoSpace}>
        <Logo1 />
      </View>
    </View>
  </View>
);

Welcome.propTypes = {
  SubmitButtonTextStyle: PropTypes.object,
  SubmitButtonStyle: PropTypes.object,
  OnPressSubmitButton: PropTypes.func
};
Welcome.defaultProps = {
  OnPressSubmitButton: () => {}
};

export { Welcome as default };
