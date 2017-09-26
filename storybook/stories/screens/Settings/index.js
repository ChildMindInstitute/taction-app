import React from "react";
import PropTypes from "prop-types";
import SettingsList from "../../components/SettingsList";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import styles from "./styles";
const Settings = props => (
  <Container style={styles.Container}>
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={styles.HeaderLeftStyle}
      leftPress={props.Back}
      leftIconName="arrow-back"
      headerStyle={styles.HeaderStyle}
      Title="Settings"
      TitleStyle={styles.HeaderLeftStyle}
    />
    <View style={styles.ContentStyle}>
      <SettingsList
        PressMinimumDurationOfTouch={props.PressMinimumDurationOfTouch}
        MinimumDurationOfTouch={props.MinimumDurationOfTouch}
        PressTimerOfNext={props.PressTimerOfNext}
        TimerOfNext={props.TimerOfNext}
        PressNoOfImagesPerSession={props.PressNoOfImagesPerSession}
        NoOfImagesPerSession={props.NoOfImagesPerSession}
        NamePress={props.NamePress}
        Name={props.Name}
        Age={props.Age}
        PasswordPress={props.PasswordPress}
        AgePress={props.AgePress}
      />
    </View>
  </Container>
);

Settings.propTypes = {
  PressMinimumDurationOfTouch: PropTypes.func,
  PressTimerOfNext: PropTypes.func,
  PressNoOfImagesPerSession: PropTypes.func,
  MinimumDurationOfTouch: PropTypes.string,
  TimerOfNext: PropTypes.string,
  NoOfImagesPerSession: PropTypes.number,
  NamePress: PropTypes.func,
  Name: PropTypes.string,
  Age: PropTypes.number,
  PasswordPress: PropTypes.func,
  AgePress: PropTypes.func,
  Back: PropTypes.func
};
SettingsList.defaultProps = {
  MinimumDurationOfTouch: () => {},
  TimerOfNext: () => {},
  NoOfImagesPerSession: () => {},
  NamePress: () => {},
  PasswordPress: () => {},
  AgePress: () => {}
};

export { Settings as default };
