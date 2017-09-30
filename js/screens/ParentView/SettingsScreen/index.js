import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import Settings from "../../../../storybook/stories/screens/Settings";
import Expo from "expo";
class SettingsScreen extends Component {
  static navigationOptions = {
    title: "SettingsScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      Random: false,
      Sound: true
    };
  }

  render() {
    return (
      <Settings
        PressMinimumDurationOfTouch={() => {}}
        MinimumDurationOfTouch="30sec"
        PressTimerOfNext={() => {}}
        TimerOfNext="30sec"
        PressNoOfImagesPerSession={() => {}}
        NoOfImagesPerSession={10}
        NamePress={() => {}}
        Name="Arno"
        PasswordPress={() => {}}
        Age={7}
        AgePress={() => {}}
        Back={() => {}}
        RandomSlider={value => {
          this.setState({ Random: value });
        }}
        RandomSliderValue={this.state.Random}
        SoundSliderValue={this.state.Sound}
        SoundSlider={value => {
          this.setState({ Sound: value });
        }}
        PressAddPrizes={() => {}}
        Back={() => this.props.navigation.navigate("Dashboard")}
        StatusBarStyle="light-content"
      />
    );
  }
}
export default SettingsScreen;
