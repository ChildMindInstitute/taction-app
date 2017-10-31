import React from "react";
import Logo from "../../components/Logo";
import Proptypes from "prop-types";
import Logo1 from "../../components/Logo.1";
import { View, Text, Button, Icon, Spinner } from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const AlmostThere = props => (
  <View style={styles.mainOuterView}>
    <StatusBar barStyle="light-content" backgroundColor="#00466b" translucent />
    <View style={styles.mainView}>
      <View style={styles.topSpace}>
        <Logo imageDimensions={styles.mainLogoStyle} />
      </View>
      <View style={styles.almostThereTextSpace}>
        <Text style={styles.almostThereText}>Almost There!</Text>
      </View>
      <View style={styles.confirmTextSpace}>
        <Text style={styles.confirmTextStyle}>We have sent you an email.</Text>
        <Text style={styles.confirmTextStyle}>{"Please check your email"}</Text>
        <Text
          style={[
            styles.confirmTextStyle,
            { color: "#eeae30", fontSize: 18, alignSelf: "center" }
          ]}
        >
          {" (" + props.email + ")"}
        </Text>
        <Text style={styles.confirmTextStyle}>
          to confirm your registration.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          margin: 16
        }}
      >
        <Button
          iconRight
          style={{
            backgroundColor: "#eeae30",
            margin: 10,
            width: 130,
            justifyContent: "center"
          }}
          onPress={props.onGetInPress}
        >
          {props.getInPressed ? (
            <Spinner color="#fff" />
          ) : (
            <Text style={{ color: "#fff" }}>Get in</Text>
          )}
          {props.getInPressed ? (
            false
          ) : (
            <Icon name="ios-arrow-round-forward" style={{ color: "white" }} />
          )}
        </Button>
        <Button
          iconRight
          style={{
            backgroundColor: "#fff",
            margin: 10,
            width: 130,
            justifyContent: "center"
          }}
          onPress={props.onResendLinkPress}
        >
          <Text style={{ color: "#0067a0" }}>Resend link</Text>
          <Icon name="ios-redo" style={{ color: "#0067a0" }} />
        </Button>
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end"
        }}
      >
        <Text style={{ color: "#fff", opacity: 0.8 }}>Back to</Text>
        <Button
          transparent
          style={{
            paddingTop: 0,
            paddingBottom: 0,
            height: 18,
            paddingLeft: 5,
            alignSelf: "flex-end"
          }}
          onPress={props.onBackPress}
        >
          <Text
            style={{
              fontWeight: "bold",
              paddingLeft: 0,
              paddingRight: 0,
              color: "#fff"
            }}
          >
            Registration
          </Text>
        </Button>
      </View>
      <View style={styles.bottomLogoSpace}>
        <Logo1 imageDimensions={styles.bottomLogoStyle} />
      </View>
    </View>
  </View>
);
AlmostThere.propTypes = {
  onGetInPress: Proptypes.func,
  onResendLinkPress: Proptypes.func,
  onBackPress: Proptypes.func
};
AlmostThere.defaultProps = {
  onGetInPress: () => {},
  onResendLinkPress: () => {},
  onBackPress: () => {}
};
export { AlmostThere as default };
