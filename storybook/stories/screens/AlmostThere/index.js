import React from "react";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import { View, Text } from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const AlmostThere = props => (
  <View style={styles.mainOuterView}>
    <StatusBar barStyle="light-content" />
    <View style={styles.mainView}>
      <View style={styles.topSpace}>
        <Logo imageDimensions={styles.mainLogoStyle} />
      </View>
      <View style={styles.almostThereTextSpace}>
        <Text style={styles.almostThereText}>Almost There!</Text>
      </View>
      <View style={styles.confirmTextSpace}>
        <Text style={styles.confirmTextStyle}>We have sent you an email.</Text>
        <Text style={styles.confirmTextStyle}>
          Please check your email to confirm
        </Text>
        <Text style={styles.confirmTextStyle}>your registration.</Text>
      </View>
      <View style={styles.bottomLogoSpace}>
        <Logo1 imageDimensions={styles.bottomLogoStyle} />
      </View>
    </View>
  </View>
);

export { AlmostThere as default };
