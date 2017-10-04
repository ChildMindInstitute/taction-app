import React from "react";
import PropTypes from "prop-types";
import { Text, Button, View } from "native-base";
import styles from "./styles";
const RegisterWithUs = props => (
  <View style={styles.MainView}>
    <Text style={styles.MainViewText}>Don't have an Account?</Text>
    <Button
      style={styles.MainViewButton}
      transparent
      onPress={props.OnPressRegisterNow}
    >
      <Text style={styles.MainViewButtonText}>Register Now</Text>
    </Button>
  </View>
);

RegisterWithUs.propTypes = {
  TextStyle: PropTypes.object,
  TextButtonStyle: PropTypes.object,
  OnPressRegisterNow: PropTypes.func
};
RegisterWithUs.defaultProps = {
  onPressRegisterNow: () => {}
};

export { RegisterWithUs as default };
