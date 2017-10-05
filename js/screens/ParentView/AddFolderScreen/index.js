import React from "react";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
import { ActionSheet, View, List } from "native-base";
import ListItemCustom from "./ListItem";
import { ImagePicker } from "expo";
let dataNext = [];
let selectedIndexes = [];
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
    this.state = {
      data: null,
      SaveFolderButtonText: undefined
    };
    dataNext = [];
  }
  updateImage() {
    ImagePicker.launchImageLibraryAsync({ base64: true }).then(image => {
      dataNext.push(image);
      this.setState({ data: dataNext });
      //let storageref = storage.child('images/'+auth.currentUser.uid+".jpeg");
      //storageref.putString(image.base64, 'base64').then((snapshot)=>{
      //console.log('file uploaded');
      //storageref.getDownloadURL().then((url)=>{
      //  auth.currentUser.updateProfile({photoURL: url});
      //})
    });
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
          ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              title: "Select Image"
            },
            buttonIndex => {
              if (buttonIndex == 1) {
                this.updateImage();
              }
            }
          );
        }}
        SaveFolderButtonText={
          "Save" +
          (this.state.SaveFolderButtonText
            ? " to " + this.state.SaveFolderButtonText
            : "")
        }
        FolderNameChange={event => {
          this.setState({ SaveFolderButtonText: event.nativeEvent.text });
          console.log(event.nativeEvent.text);
        }}
      >
        <View
          style={{
            backgroundColor: "#eee",
            marginLeft: "5%",
            marginRight: "5%",
            marginBottom: "5%"
          }}
        >
          <List
            horizontal={true}
            dataArray={dataNext}
            renderRow={item => (
              <ListItemCustom
                item={item}
                ItemPress={(checked, index) => {
                  if (checked && selectedIndexes.indexOf(index) == -1) {
                    selectedIndexes.push(index);
                  } else {
                    selectedIndexes.splice(selectedIndexes.indexOf(index), 1);
                  }
                }}
                data={dataNext}
              />
            )}
          />
        </View>
      </AddFolder>
    );
  }
}
export default AddFolderScreen;
