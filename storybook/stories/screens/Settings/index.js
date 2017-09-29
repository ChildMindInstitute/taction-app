import React from "react";
import PropTypes from "prop-types";
import SettingsList from "../../components/SettingsList";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import styles from "./styles";
import { StatusBar } from "react-native";
const Settings = props => (
  <Container style={styles.Container}>
    <StatusBar barStyle={props.StatusBarStyle} />
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
        TimerOfNext={props.TimerOfNext}
        PressNoOfImagesPerSession={props.PressNoOfImagesPerSession}
        NoOfImagesPerSession={props.NoOfImagesPerSession}
        NamePress={props.NamePress}
        Name={props.Name}
        Age={props.Age}
        PasswordPress={props.PasswordPress}
        AgePress={props.AgePress}
        RandomSlider={props.RandomSlider}
        RandomSliderValue={props.RandomSliderValue}
        SoundSliderValue={props.SoundSliderValue}
        SoundSlider={props.SoundSlider}
        PressAddPrizes={props.PressAddPrizes}
      />
    </View>
  </Container>
);

Settings.propTypes = {
  PressMinimumDurationOfTouch: PropTypes.func,
  RandomSlider: PropTypes.func,
  RandomSliderValue: PropTypes.bool,
  SoundSliderValue: PropTypes.bool,
  SoundSlider: PropTypes.func,
  PressAddPrizes: PropTypes.func,
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
  PressMinimumDurationOfTouch: () => {},
  RandomSlider: () => {},
  PressNoOfImagesPerSession: () => {},
  NamePress: () => {},
  PasswordPress: () => {},
  AgePress: () => {}
};

export { Settings as default };
