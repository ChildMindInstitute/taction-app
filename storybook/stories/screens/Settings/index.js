import React from "react";
import PropTypes from "prop-types";
import SettingsList from "../../components/SettingsList";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import styles from "./styles";
import { StatusBar, ScrollView } from "react-native";
const Settings = props => (
  <Container style={styles.Container}>
    <StatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle="light-content"
    />
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={styles.HeaderLeftStyle}
      leftPress={props.DrawerOpen}
      leftIconName="menu"
      headerStyle={styles.HeaderStyle}
      Title="Settings"
      TitleStyle={styles.HeaderLeftStyle}
    />
    <ScrollView style={styles.ContentStyle}>
      <SettingsList
        PressMaximumImageDuration={props.PressMaximumImageDuration}
        MaximumImageDuration={props.MaximumImageDuration}
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
        ChildExists={props.ChildExists}
        NameChild={props.NameChild}
        NameChildPress={props.NameChildPress}
      />
    </ScrollView>
  </Container>
);

Settings.propTypes = {
  ChildExists: PropTypes.bool,
  NameChild: PropTypes.string,
  NameChildPress: PropTypes.func,
  PressMaximumImageDuration: PropTypes.func,
  RandomSlider: PropTypes.func,
  RandomSliderValue: PropTypes.bool,
  SoundSliderValue: PropTypes.bool,
  SoundSlider: PropTypes.func,
  PressAddPrizes: PropTypes.func,
  PressNoOfImagesPerSession: PropTypes.func,
  MaximumImageDuration: PropTypes.string,
  TimerOfNext: PropTypes.string,
  NoOfImagesPerSession: PropTypes.number,
  NamePress: PropTypes.func,
  Name: PropTypes.string,
  Age: PropTypes.string,
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
