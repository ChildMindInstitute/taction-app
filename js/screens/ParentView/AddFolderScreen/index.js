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
      data: dataNext,
      SaveFolderButtonText: undefined,
      SaveDisabled: true
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
        ErrorDisplay={
          this.state.SaveFolderButtonText &&
          this.state.SaveFolderButtonText != ""
        }
        SaveButtonStyle={{
          marginBottom: "5%",
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: this.state.SaveFolderButtonText
            ? this.state.SaveDisabled && this.state.SaveFolderButtonText != ""
              ? "rgba(238, 174, 48, 0.5)"
              : "rgba(238, 174, 48, 1)"
            : "rgba(238, 174, 48, 0.5)"
        }}
        SaveDisabled={this.state.SaveDisabled}
        SaveFolderButtonText={
          "Save" +
          (this.state.SaveFolderButtonText
            ? " to " + this.state.SaveFolderButtonText
            : "")
        }
        FolderNameChange={event => {
          this.setState({ SaveFolderButtonText: event.nativeEvent.text });
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
                ItemPress={((checked, index) => {
                  if (checked && selectedIndexes.indexOf(index) == -1) {
                    selectedIndexes.push(index);
                    if (this.state.SaveDisabled)
                      this.setState({ SaveDisabled: false });
                  } else {
                    selectedIndexes.splice(selectedIndexes.indexOf(index), 1);
                    if (
                      selectedIndexes.length == 0 &&
                      !this.state.SaveDisabled
                    ) {
                      this.setState({ SaveDisabled: true });
                    }
                  }
                }).bind(this)}
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
