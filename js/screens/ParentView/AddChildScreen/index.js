import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import AddChild from "../../../../storybook/stories/screens/AddChild";
import Expo from "expo";
class AddChildScreen extends Component {
  static navigationOptions = {
    title: "AddChildScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <AddChild
        OnPressSaveButton={() => {
          //handle Save
          navigate(state.params.IsNewRegistration ? "AddFolder" : "Dashboard");
        }}
        OnPressSkipButton={() => {
          navigate(state.params.IsNewRegistration ? "AddFolder" : "Dashboard");
        }}
        ChildNameChange={event => {
          console.log(event.nativeEvent.text);
        }}
        ChildAgeChange={event => {
          console.log(event.nativeEvent.text);
        }}
        StatusBarStyle="light-content"
        DrawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
      />
    );
  }
}
export default AddChildScreen;
