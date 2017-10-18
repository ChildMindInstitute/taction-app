import React from "react";
import PropTypes from "prop-types";
import { Text, Button, View } from "native-base";
import styles from "./styles";
const RegisterWithUs = props => (
  <View style={styles.mainView}>
    <Text style={styles.mainViewText}>Don't have an Account?</Text>
    <Button
      style={styles.mainViewButton}
      transparent
      onPress={props.onPressRegisterNow}
    >
      <Text style={styles.mainViewButtonText}>Register Now</Text>
    </Button>
  </View>
);

RegisterWithUs.propTypes = {
  textStyle: PropTypes.object,
  textButtonStyle: PropTypes.object,
  onPressRegisterNow: PropTypes.func
};
RegisterWithUs.defaultProps = {
  onPressRegisterNow: () => {}
};

export { RegisterWithUs as default };
