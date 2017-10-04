import React from "react";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
import { ActionSheet, View, List, ListItem, Text } from "native-base";
var BUTTONS = ["Camera", "Gallery", "App", "Cancel"];
var CANCEL_INDEX = 3;
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
        <View>
          <List
            horizontal={true}
            dataArray={[1, 2, 3, 4, 5, 6]}
            renderRow={data => (
              <ListItem>
                <Text>{data}</Text>
              </ListItem>
            )}
          />
        </View>
      </AddFolder>
    );
  }
}
export default AddFolderScreen;
