import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import { View, Text, CheckBox } from "native-base";
import styles from "./styles";
const AlmostThere = props => (
  <View style={styles.MainView}>
    <View style={styles.TopSpace}>
      <Logo imageDimensions={styles.MainLogoStyles} />
    </View>
    <View style={styles.AlmostThereTextSpace}>
      <Text style={styles.AlmostThereText}>Almost There!</Text>
    </View>
    <View style={styles.ConfirmTextSpace}>
      <Text style={styles.ConfirmTextStyle}>We have sent you an email.</Text>
      <Text style={styles.ConfirmTextStyle}>
        Please check your email to confirm
      </Text>
      <Text style={styles.ConfirmTextStyle}>your registration.</Text>
    </View>
    <View style={styles.BottomLogoSpace}>
      <Logo1 />
    </View>
  </View>
);

export { AlmostThere as default };
