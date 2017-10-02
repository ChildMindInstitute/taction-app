import React from "react";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
class AddFolderScreen extends React.Component {
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
        StatusBarStyle="light-content"
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
