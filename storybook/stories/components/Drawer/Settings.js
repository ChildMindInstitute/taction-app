import React from "react";
import SettingsStory from "../../screens/Settings";
import { NavigationActions } from "react-navigation";
class Settings extends React.Component {
  render() {
    return (
      <SettingsStory
        PressMinimumDurationOfTouch={() =>
          console.log("PressMinimumDurationOfTouch")}
        MinimumDurationOfTouch="30sec"
        PressTimerOfNext={() => console.log("PressTimerOfNext")}
        TimerOfNext="30sec"
        PressNoOfImagesPerSession={() =>
          console.log("PressNoOfImagesPerSession")}
        NoOfImagesPerSession={10}
        NamePress={() => console.log("NamePress")}
        Name="Arno"
        PasswordPress={() => console.log("PasswordPress")}
        Age={7}
        AgePress={() => console.log("AgePress")}
        Back={() => this.props.navigation.dispatch(NavigationActions.back())}
      />
    );
  }
}
module.exports = Settings;
