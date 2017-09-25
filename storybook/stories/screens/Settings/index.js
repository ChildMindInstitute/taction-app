import React from "react";
import PropTypes from "prop-types";
import SettingsList from "../../components/SettingsList";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
const Settings = props => (
  <Container style={{ flex: 1, backgroundColor: "#eee" }}>
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={{ color: "white" }}
      leftPress={props.Back}
      leftIconName="arrow-back"
      headerStyle={{ backgroundColor: "#0067a0" }}
      Title="Settings"
      TitleStyle={{ color: "white" }}
      RightStyle={{ flex: 1, flexDirection: "column", alignItems: "center" }}
    />
    <View style={{ flex: 1, marginLeft: "-4%" }}>
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
