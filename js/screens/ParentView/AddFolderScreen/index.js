import React from "react";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
import { ActionSheet, View, List, Toast } from "native-base";
import ListItemCustom from "./ListItem";
import { ImagePicker } from "expo";
import { connect } from "react-redux";

let dataNext = [];
let selectedIndexes = [];
const BUTTONS = ["Camera", "Gallery", "App", "Cancel"];
const CANCEL_INDEX = 3;

class AddFolderScreen extends React.Component {
  static navigationOptions = {
    title: "AddFolderScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      data: dataNext,
      selectedIndexes: selectedIndexes,
      SaveFolderButtonText: "",
      SaveDisabled: true,
      focussed: false
    };
    dataNext = [];
  }

  async AddFolder() {
    await this.props.dispatch({
      type: "ADD_FOLDER",
      payload: {
        childID: this.props.child.childID,
        name: this.state.SaveFolderButtonText
      }
    });
  }

  componentDidUpdate() {
    if (
      this.state.SaveDisabled &&
      this.state.SaveFolderButtonText != "" &&
      dataNext.length > 0
    ) {
      this.setState({ SaveDisabled: false });
    } else if (
      !this.state.SaveDisabled &&
      this.state.SaveFolderButtonText == ""
    ) {
      this.setState({ SaveDisabled: true });
    }
    if (this.props.folder.folderID) {
      for (let i in dataNext) {
        this.props.dispatch({
          type: "ADD_IMAGE",
          payload: {
            exeID: this.props.folder.folderID,
            bytes: dataNext[i].base64
          }
        });
        if (i == selectedIndexes.length - 1) {
          this.props.navigation.navigate("Dashboard");
        }
      }
    }
  }

  updateImage() {
    ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: 0
    }).then(image => {
      if (image) {
        dataNext.push(image);
        this.setState({ data: dataNext });
      }
    });
  }
  updateCameraImage() {
    ImagePicker.launchCameraAsync({ base64: true, quality: 0 }).then(image => {
      dataNext.push(image);
      this.setState({ data: dataNext });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <AddFolder
        OnPressSaveButton={() => {
          if (this.props.child && this.props.child.childID) {
            this.AddFolder();
          } else {
            Toast.show({
              text: "Please add a child before adding a folder",
              position: "bottom",
              buttonText: "Okay"
            });
          }
        }}
        DelPress={() => {
          for (let i in selectedIndexes) {
            dataNext.splice(selectedIndexes[i], 1);
            selectedIndexes.splice(i, 1);
          }
          if (this.state.data.length == 0) {
            this.setState({ SaveDisabled: true });
          }
          this.setState({ data: dataNext });
        }}
        IsRightRequired={this.state.selectedIndexes.length > 0}
        StatusBarStyle="light-content"
        OnPressSkipButton={() => {
          navigate("Dashboard");
        }}
        DrawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
        OnPressAddImage={() => {
          ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              title: "Select Image"
            },
            buttonIndex => {
              if (buttonIndex == 0) {
                this.updateCameraImage();
              }
              if (buttonIndex == 1) {
                this.updateImage();
              }
            }
          );
        }}
        ErrorDisplay={
          this.state.SaveFolderButtonText == "" && this.state.focussed
        }
        onFocus={() => {
          this.setState({ focussed: true });
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
        {this.state.data.length > 0 ? (
          <View
            style={{
              backgroundColor: "#eee"
            }}
          >
            <List
              horizontal={true}
              dataArray={this.state.data}
              renderRow={item => (
                <ListItemCustom
                  item={item}
                  ItemPress={((checked, index) => {
                    if (checked && selectedIndexes.indexOf(index) == -1) {
                      selectedIndexes.push(index);
                    } else {
                      selectedIndexes.splice(selectedIndexes.indexOf(index), 1);
                    }
                    this.setState({ selectedIndexes: selectedIndexes });
                  }).bind(this)}
                  data={dataNext}
                />
              )}
            />
          </View>
        ) : (
          false
        )}
      </AddFolder>
    );
  }
}

const mapStateToProps = store => {
  return { child: store.user.child, folder: store.folder };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFolderScreen);
