import React from "react";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
import { ActionSheet, List, Toast } from "native-base";
import ListItemCustom from "./ListItem";
import { ImagePicker } from "expo";
import { connect } from "react-redux";
let dataNext = [];
let selectedIndexes = [];
const BUTTONS = ["Camera", "Gallery", "Stock Images", "Cancel"];
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
      saveFolderButtonText: "",
      saveDisabled: true,
      focussed: false,
      somethingDeleted: false
    };
    dataNext = [];
  }

  async AddFolder() {
    await this.props.dispatch({
      type: "ADD_FOLDER",
      payload: {
        childID: this.props.child.childID,
        name: this.state.saveFolderButtonText
      }
    });
  }

  componentDidUpdate() {
    if (
      this.state.saveDisabled &&
      this.state.saveFolderButtonText != "" &&
      dataNext.length > 0
    ) {
      this.setState({ saveDisabled: false });
    } else if (
      !this.state.saveDisabled &&
      this.state.saveFolderButtonText == ""
    ) {
      this.setState({ saveDisabled: true });
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
      if (!image.cancelled) {
        dataNext.push(image);
        this.setState({ data: dataNext });
      }
    });
  }
  updateCameraImage() {
    ImagePicker.launchCameraAsync({ base64: true, quality: 0 }).then(image => {
      if (!image.cancelled) {
        dataNext.push(image);
        this.setState({ data: dataNext });
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <AddFolder
        onPressSaveButton={() => {
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
        delPress={() => {
          for (let i in selectedIndexes) {
            dataNext.splice(selectedIndexes[i], 1);
            selectedIndexes.splice(i, 1);
          }
          if (this.state.data.length == 0) {
            this.setState({ saveDisabled: true });
          }
          this.setState({ data: dataNext, somethingDeleted: true });
        }}
        checkBoxReset={this.state.somethingDeleted}
        isRightRequired={this.state.selectedIndexes.length > 0}
        onPressSkipButton={() => {
          navigate("Dashboard");
        }}
        drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
        onPressAddImage={() => {
          ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              title: "Select Image"
            },
            buttonIndex => {
              if (buttonIndex == 0) {
                this.updateCameraImage();
              } else if (buttonIndex == 1) {
                this.updateImage();
              } else if (buttonIndex == 2) {
                this.props.navigation.navigate("StockImages");
              }
            }
          );
        }}
        errorDisplay={
          this.state.saveFolderButtonText == "" && this.state.focussed
        }
        onFocus={() => {
          this.setState({ focussed: true });
        }}
        saveDisabled={this.state.saveDisabled}
        saveFolderButtonText={
          "Save" +
          (this.state.saveFolderButtonText
            ? " to " + this.state.saveFolderButtonText
            : "")
        }
        folderNameChange={event => {
          this.setState({ saveFolderButtonText: event.nativeEvent.text });
        }}
      >
        {this.state.data.length > 0 ? (
          <List
            horizontal={true}
            dataArray={this.state.data}
            renderRow={item => (
              <ListItemCustom
                item={item}
                itemPress={((checked, index) => {
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
