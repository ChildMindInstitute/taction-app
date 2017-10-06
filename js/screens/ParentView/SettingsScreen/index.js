import React from "react";
import Settings from "../../../../storybook/stories/screens/Settings";
import { connect } from "react-redux";

@connect(store => {
  return {
    parent: store.user.parent,
    child: store.user.child
  };
})
class SettingsScreen extends React.Component {
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

  componenetDidUpdate(){
    this.setState({Random: this.props.parent.settings.random, Sound: this.props.parent.settings.sound})
  }
  render() {
    return (
      <Settings
        PressMinimumDurationOfTouch={() => {}}
        MinimumDurationOfTouch="30sec"
        PressTimerOfNext={() => {}}
        TimerOfNext="30sec"
        PressNoOfImagesPerSession={() => {}}
        NoOfImagesPerSession={this.props.parent.settings.imagesPerSession}
        NamePress={() => {}}
        Name={this.props.parent.name}
        PasswordPress={() => {}}
        Age={
          this.props.child.childDetails
            ? this.props.child.childDetails.age
            : "0"
        }
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
        ChildExists={this.props.child.childDetails ? true : false}
        NameChild={
          this.props.child.childDetails
            ? this.props.child.childDetails.name
            : ""
        }
        NameChildPress={() => {}}
        PressAddPrizes={() => {}}
        Back={() => this.props.navigation.navigate("Dashboard")}
        StatusBarStyle="light-content"
      />
    );
  }
}
export default SettingsScreen;
