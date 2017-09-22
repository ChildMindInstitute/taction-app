import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Item, Label, Button, Text, View } from "native-base";
import Logo from "../Logo";
const LoginForm = props => (
  <View style={{ margin: "2%", flex: 1 }}>
    <Logo
      source={props.ImageSource}
      imageDimensions={{
        width: 100,
        height: 150,
        alignSelf: "center",
        flex: 2
      }}
    />
    <Form style={{ flex: 4 }}>
      <Item floatingLabel style={{ margin: "5%", flex: 1 }}>
        <Label>{props.uNameLabel}</Label>
        <Input />
      </Item>
      <Item floatingLabel style={{ margin: "5%", flex: 1 }}>
        <Label>{props.password}</Label>
        <Input secureTextEntry={true} />
      </Item>
      <Button
        transparent
        onPress={props.onPressForgotPassword}
        style={{ flex: 1, alignSelf: "flex-end", justifyContent: "flex-end" }}
      >
        <Text style={{ color: "gray", fontWeight: "bold" }}>
          ForgotPassword?
        </Text>
      </Button>
      <Button
        full
        style={[props.buttonStyle, { margin: "3%", flex: 1 }]}
        onPress={props.onPress}
      >
        <Text style={{ color: "white" }}>Submit &rarr;</Text>
      </Button>
    </Form>
    <Text style={{ alignSelf: "center", marginTop: "20%", flex: 1 }}>
      Don't have an Account?{" "}
      <Text
        button
        onPress={props.onPressRegisterNow}
        style={{ color: "gray", fontWeight: "bold" }}
      >
        Register Now
      </Text>
    </Text>
  </View>
);

LoginForm.propTypes = {
  onPress: PropTypes.func,
  buttonStyle: PropTypes.object,
  uNameLabel: PropTypes.string,
  password: PropTypes.string,
  onPressForgotPassword: PropTypes.func,
  onPressRegisterNow: PropTypes.func,
  ImageSource: PropTypes.node.isRequired
};
LoginForm.defaultProps = {
  onPress: () => {},
  onPressForgotPassword: () => {},
  onPressRegisterNow: () => {}
};

export { LoginForm as default };
