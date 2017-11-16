import React from "react";
import PropTypes from "prop-types";
import { Text, Button, View } from "native-base";
import styles from "./styles";
const RegisterWithUs = props => (
  <View style={styles.mainView}>
    <View style={{ height: 25, alignSelf: "flex-end", margin: 5 }}>
      <Text style={styles.mainViewText}>
        Don't have an Account?{"  "}
        <Text
          onPress={props.onPressRegisterNow}
          style={styles.mainViewButtonText}
        >
          Register now
        </Text>
      </Text>
    </View>
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
