import React from "react";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
import { ActionSheet, View, List } from "native-base";
import ListItemCustom from "./ListItem";
import { Image, CameraRoll } from "react-native";
const BUTTONS = ["Camera", "Gallery", "App", "Cancel"];
const CANCEL_INDEX = 3;
const data = [
  require("../../../assets/ball2.jpg"),
  require("../../../assets/ball1.jpg"),
  require("../../../assets/ball1.jpg"),
  require("../../../assets/ball2.jpg")
];
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
        OnPressAddImage={() =>
          ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              title: "Select Image"
            },
            buttonIndex => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
            }
          )}
        FolderNameChange={event => {
          console.log(event.nativeEvent.text);
        }}
      >
        <View style={{ backgroundColor: "#eee" }}>
          <List
            horizontal={true}
            dataArray={data}
            renderRow={item => (
              <ListItemCustom item={item} ItemPress={() => {}} />
            )}
          />
        </View>
      </AddFolder>
    );
  }
}
export default AddFolderScreen;
