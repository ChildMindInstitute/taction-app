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
  childExists: PropTypes.bool,
  nameChild: PropTypes.string,
  nameChildPress: PropTypes.func,
  pressMaximumImageDuration: PropTypes.func,
  randomSlider: PropTypes.func,
  randomSliderValue: PropTypes.bool,
  soundSliderValue: PropTypes.bool,
  soundSlider: PropTypes.func,
  pressAddPrizes: PropTypes.func,
  pressNoOfImagesPerSession: PropTypes.func,
  maximumImageDuration: PropTypes.string,
  timerOfNext: PropTypes.string,
  noOfImagesPerSession: PropTypes.number,
  namePress: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.string,
  passwordPress: PropTypes.func,
  agePress: PropTypes.func,
  back: PropTypes.func
};
SettingsList.defaultProps = {
  pressMaximumImageDuration: () => {},
  randomSlider: () => {},
  soundSlider: () => {},
  nameChildPress: () => {},
  pressAddPrizes: () => {},
  pressNoOfImagesPerSession: () => {},
  namePress: () => {},
  passwordPress: () => {},
  agePress: () => {},
  back: () => {}
};

export { Settings as default };
