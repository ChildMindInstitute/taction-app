import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
import Expo from "expo";
class AddFolderScreen extends Component {
  static navigationOptions = {
    title: "AddFolderScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <AddFolder
        OnPressSaveButton={() => {
          navigate("Dashboard");
        }}
        OnPressSkipButton={() => {
          navigate("Dashboard");
        }}
        Back={() => this.props.navigation.navigate("Images")}
        OnPressAddImage={() => {
          //AddImageActionSHeetHandler
        }}
        FolderNameChange={event => {
          console.log(event.nativeEvent.text);
        }}
      />
    );
  }
}
export default AddFolderScreen;
