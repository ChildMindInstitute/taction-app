import React from "react";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
import { ActionSheet, Toast } from "native-base";
import styles from "./styles";
import ImagePicker from "react-native-image-crop-picker";
import { connect } from "react-redux";
import Grid from "react-native-grid-component";
import GridItem from "./gridItem";
let dataNext = [];
const BUTTONS = ["Camera", "Gallery", "Stock Images", "Cancel"];
const CANCEL_INDEX = 3;

class AddFolderScreen extends React.Component {
  static navigationOptions = {
    title: "AddFolderScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      folderAdded: false,
      data: dataNext,
      saveFolderButtonText: "",
      saveDisabled: true,
      focussed: false,
      folderNameError: false,
      submitted: false,
      itemSelected: false
    };
  }

  async AddFolder() {
    let tempData = [];
    for (let i = 0; i < dataNext.length; i++) {
      tempData.push(dataNext[i].image);
    }
    await this.props.dispatch({
      type: "ADD_FOLDER",
      payload: {
        childID: this.props.child.childID,
        name: this.state.saveFolderButtonText,
        data: tempData
      }
    });
    this.setState({ folderAdded: true });
  }

  componentDidMount() {
    this.setState({ folderAdded: false });
  }
  componentWillMount() {
    dataNext.length = 0;
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

    if (this.props.folderAdded && this.state.folderAdded) {
      this.setState({ submitted: false });
      this.props.navigation.navigate("Dashboard");
    }
  }

  updateImage() {
    ImagePicker.openPicker({
      multiple: true,
      maxFiles: 20,
      includeBase64: true
    }).then(images => {
      try {
        for (let i = 0; i < images.length; i++) {
          dataNext.push({ image: images[i], checked: false });
        }
        this.setState({ data: dataNext });
      } catch (err) {}
    });
  }
  updateCameraImage() {
    // ImagePicker.launchCameraAsync({ base64: true, quality: 0 }).then(image => {
    //   if (!image.cancelled) {
    //     dataNext.push(image);
    //     this.setState({ data: dataNext });
    //   }
    // });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <AddFolder
        onPressSaveButton={() => {
          this.setState({ submitted: true });
          if (this.props.child && this.props.child.childID) {
            this.AddFolder();
          } else {
            this.setState({ submitted: false });
            Toast.show({
              text: "Please add a child before adding a folder",
              position: "bottom",
              buttonText: "Okay"
            });
          }
        }}
        delPress={() => {
          for (let i in dataNext) {
            if (dataNext[i].checked == true) {
              dataNext.splice(i, 1);
            }
          }
          if (dataNext.length == 0) {
            this.setState({ saveDisabled: true });
          }
          this.setState({ data: dataNext, itemSelected: false });
        }}
        isRightRequired={this.state.itemSelected}
        onPressSkipButton={() => {
          navigate("Dashboard");
        }}
        drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
        submitted={this.state.submitted}
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
        errorDisplay={this.state.folderNameError}
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
          if (this.count == 1 && event.nativeEvent.text == "") {
            this.setState({ folderNameError: true });
          } else {
            this.setState({ folderNameError: false });
          }
          this.setState({ saveFolderButtonText: event.nativeEvent.text });
          this.count = 1;
        }}
      >
        {this.state.data.length > 0 ? (
          <Grid
            style={[
              styles.grid,
              {
                height:
                  this.state.data.length < 4 && this.state.data.length > 0
                    ? 110
                    : 190
              }
            ]}
            renderItem={(data, index) => (
              <GridItem
                key={index}
                data={data}
                index={this.state.data.indexOf(data)}
                onPress={(() => {
                  for (let i = 0; i < dataNext.length; i++) {
                    if (dataNext[i].image == data.image) {
                      dataNext[i] = {
                        ...dataNext[i],
                        checked: !dataNext[i].checked
                      };
                    }
                  }
                  let count = 0;
                  for (let i = 0; i < dataNext.length; i++) {
                    if (dataNext[i].checked) {
                      count++;
                    }
                  }
                  if (count > 0) {
                    this.setState({ itemSelected: true });
                  } else {
                    this.setState({ itemSelected: false });
                  }
                  this.setState({ data: dataNext });
                }).bind(this)}
              />
            )}
            data={this.state.data}
            itemsPerRow={4}
          />
        ) : (
          false
        )}
      </AddFolder>
    );
  }
}

const mapStateToProps = store => {
  return {
    child: store.user.child,
    folder: store.folder,
    folderAdded: store.loaded.folderAdded
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFolderScreen);
