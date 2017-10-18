import React from "react";
import PropTypes from "prop-types";
import SettingsList from "../../components/SettingsList";
import HeaderCommon from "../../components/Header";
import { Container } from "native-base";
import styles from "./styles";
import { StatusBar, ScrollView } from "react-native";
const Settings = props => (
  <Container style={styles.container}>
    <StatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle="light-content"
    />
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={styles.headerLeftStyle}
      leftPress={props.drawerOpen}
      leftIconName="menu"
      headerStyle={styles.headerStyle}
      title="Settings"
      titleStyle={styles.headerLeftStyle}
    />
    <ScrollView style={styles.contentStyle}>
      <SettingsList
        pressMaximumImageDuration={props.pressMaximumImageDuration}
        maximumImageDuration={props.maximumImageDuration}
        timerOfNext={props.timerOfNext}
        pressNoOfImagesPerSession={props.pressNoOfImagesPerSession}
        noOfImagesPerSession={props.noOfImagesPerSession}
        namePress={props.namePress}
        name={props.name}
        age={props.age}
        passwordPress={props.passwordPress}
        agePress={props.agePress}
        randomSlider={props.randomSlider}
        randomSliderValue={props.randomSliderValue}
        soundSliderValue={props.soundSliderValue}
        soundSlider={props.soundSlider}
        pressAddPrizes={props.pressAddPrizes}
        childExists={props.childExists}
        nameChild={props.nameChild}
        mameChildPress={props.nameChildPress}
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
