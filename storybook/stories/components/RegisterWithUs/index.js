import React from "react";
import PropTypes from "prop-types";
import { Text, Button, View } from "native-base";
const RegisterWithUs = props => (
  <View
    style={{
      flex: 1,
      flexDirection: "row"
    }}
  >
    <Text style={{ marginTop: "5%", color: "#ccc" }}>
      Don't have an Account?{" "}
    </Text>
    <Button
      style={{ marginTop: "1.5%" }}
      transparent
      onPress={props.OnPressRegisterNow}
    >
      <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Register Now</Text>
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
