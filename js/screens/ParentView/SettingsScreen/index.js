import React from "react";
import Settings from "../../../../storybook/stories/screens/Settings";
import { connect } from "react-redux";
import Prompt from "react-native-prompt";
import { View, ActionSheet } from "native-base";
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "SettingsScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      Random: false,
      Sound: true,
      promptVisible: false,
      newValue: null,
      promptTitle: "",
      promptPlaceHolder: ""
    };
  }
  findRoutes(value) {
    switch (this.state.promptTitle) {
      case "Name":
        console.log(value);
        //firebase Action
        break;
      case "Age":
        console.log(value);
        //firebase Action
        break;
      case "Name of Child":
        console.log(value);
        //firebase Action
        break;
    }
  }
  componenetDidUpdate() {
    this.setState({
      Random: this.props.parent.settings.random,
      Sound: this.props.parent.settings.sound
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Prompt
          title={this.state.promptTitle}
          placeholder={this.state.promptPlaceHolder}
          visible={this.state.promptVisible}
          onCancel={() =>
            this.setState({
              promptVisible: false,
              newValue: null
            })}
          onSubmit={value => {
            this.setState(
              {
                promptVisible: false
              },
              this.findRoutes(value)
            );
          }}
        />
        <Settings
          PressMaximumImageDuration={() => {
            ActionSheet.show(
              {
                options: ["5", "10", "25", "50", "100", "Cancel"],
                cancelButtonIndex: 5
              },
              buttonIndex => {
                switch (buttonIndex) {
                  case 0:
                    //setMaxDurationTo5
                    break;
                  case 1:
                    //setMaxDurationTo19
                    break;
                  case 2:
                    //setMaxDurationTo25
                    break;
                  case 3:
                    //setMaxDurationTo50
                    break;
                  case 4:
                  //setMaxDurationTo100
                }
              }
            );
          }}
          MaximumImageDuration={
            this.props.parent.settings.maxImageDuration + " sec"
          }
          PressNoOfImagesPerSession={() => {
            ActionSheet.show(
              {
                options: ["5", "10", "25", "50", "100", "Cancel"],
                cancelButtonIndex: 5
              },
              buttonIndex => {
                switch (buttonIndex) {
                  case 0:
                    //setMaxDurationTo5
                    break;
                  case 1:
                    //setMaxDurationTo19
                    break;
                  case 2:
                    //setMaxDurationTo25
                    break;
                  case 3:
                    //setMaxDurationTo50
                    break;
                  case 4:
                  //setMaxDurationTo100
                }
              }
            );
          }}
          NoOfImagesPerSession={this.props.parent.settings.imagesPerSession}
          NamePress={() => {
            this.setState({
              promptTitle: "Name",
              promptPlaceHolder: this.props.parent.name,
              promptVisible: true
            });
          }}
          Name={this.props.parent.name}
          PasswordPress={() => {}}
          Age={
            this.props.child.childDetails
              ? this.props.child.childDetails.age
              : "0"
          }
          AgePress={() => {
            this.setState({
              promptTitle: "Age",
              promptPlaceHolder: this.props.child.childDetails.age,
              promptVisible: true
            });
          }}
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
          NameChildPress={() => {
            this.setState({
              promptTitle: "Name of Child",
              promptPlaceHolder: this.props.child.childDetails.name,
              promptVisible: true
            });
          }}
          PressAddPrizes={() => {}}
          Back={() => this.props.navigation.navigate("Dashboard")}
          StatusBarStyle="light-content"
        />
      </View>
    );
  }
}

const mapStateToProps = store => {
  return { parent: store.user.parent, child: store.user.child };
};

// const mapDispatchToProps = (dispatch)=>{
//   return (dispatch)
// }

export default connect(mapStateToProps, null)(SettingsScreen);
