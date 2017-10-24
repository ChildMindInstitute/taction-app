import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import Button from "../../components/Button";
import { View, Text } from "native-base";
import styles from "./styles";
const Welcome = props => (
  <View style={styles.mainOuterView}>
    <View style={styles.mainView}>
      <View style={styles.topSpace}>
        <Logo imageDimensions={styles.mainLogoStyles} />
      </View>
      <View style={styles.welcomeTextSpace}>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>
      <View style={styles.confirmTextSpace}>
        <Text style={styles.confirmTextStyle}>
          You have successfully completed
        </Text>
        <Text style={styles.confirmTextStyle}>the registration.</Text>
      </View>
      <Button
        onPress={props.onPressSubmitButton}
        submitButtonStyle={styles.submitButtonStyle}
        submitButtonTextStyle={styles.submitButtonTextStyle}
        buttonText="BEGIN"
        iconName="ios-arrow-round-forward"
        iconRight={true}
        iconLeft={false}
        iconColor="white"
      />
      <View style={styles.bottomLogoSpace}>
        <Logo1 imageDimensions={styles.bottomLogoStyle} />
      </View>
    </View>
  </View>
);

Welcome.propTypes = {
  onPressSubmitButton: PropTypes.func
};
Welcome.defaultProps = {
  onPressSubmitButton: () => {}
};

export { Welcome as default };
