import React from "react";
import AddFolder from "../../../../storybook/stories/screens/AddFolder";
import { Toast, View } from "native-base";
import styles from "./styles";
import { Alert } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { connect } from "react-redux";
import Grid from "react-native-grid-component";
import GridItem from "./gridItem";
import AddButton from "./AddButton";
let dataNext = [];
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
      itemSelected: false,
      stockImagesSelected: false,
      activeSegment: 0,
      galleryDisabled: false
    };
    dataNext.length = 0;
  }

  validateInput() {
    for (let i in this.props.dashboardList) {
      if (
        this.state.saveFolderButtonText.toLowerCase() ==
        this.props.dashboardList[i].name.toLowerCase()
      ) {
        return false;
      }
    }
    return true;
  }

  async AddFolder() {
    let tempData = [];
    for (let i = 0; i < dataNext.length - 1; i++) {
      tempData.push(dataNext[i].image);
    }
    if (this.validateInput()) {
      if (this.state.stockImagesSelected) {
        console.log(tempData, "logging stock data");
        await this.props.dispatch({
          type: "ADD_STOCK_FOLDER",
          payload: {
            childID: this.props.child.childID,
            name: this.state.saveFolderButtonText,
            data: tempData
          }
        });
      } else {
        await this.props.dispatch({
          type: "ADD_FOLDER",
          payload: {
            childID: this.props.child.childID,
            name: this.state.saveFolderButtonText,
            data: tempData
          }
        });
      }
    } else {
      Toast.show({
        text: "Error:",
        buttonText: "Folder name already exists!",
        position: "bottom",
        duration: 5000
      });
      this.setState({ submitted: false });
    }
    this.setState({ folderAdded: true });
  }
  componentDidMount() {
    this.setState({ folderAdded: false });
    if (!this.props.navigation.state.params.noAddedImages) {
      this.setState({ stockImagesSelected: true });
      this.setState({ activeSegment: 2 });
      for (
        let i = 0;
        i < this.props.navigation.state.params.stockImages.length;
        i++
      ) {
        dataNext.push({
          image: {
            path: this.props.navigation.state.params.stockImages[i].uri
          },
          checked: false
        });
      }
    }
  }
  componentWillMount() {
    dataNext.length = 0;
  }
  componentDidUpdate() {
    if (
      this.state.saveDisabled &&
      this.state.saveFolderButtonText != "" &&
      dataNext.length > 1
    ) {
      this.setState({ saveDisabled: false });
    } else if (
      !this.state.saveDisabled &&
      (this.state.saveFolderButtonText == "" || dataNext.length <= 1)
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
      compressImageQuality: 0,
      includeBase64: true
    })
      .then(images => {
        this.setState({ stockImagesSelected: false });
        dataNext.pop();
        for (let i = 0; i < images.length; i++) {
          dataNext.push({ image: images[i], checked: false });
          if (i == images.length - 1 && this.state.activeSegment == 1) {
            dataNext.push({ image: images[i], checked: false });
          }
        }
        this.setState({ data: dataNext, galleryDisabled: true });
      })
      .catch(err => {
        console.log(err);
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
              text: "",
              position: "bottom",
              buttonText: "Please add a child before adding a folder",
              duration: 5000
            });
          }
        }}
        galleryDisabled={this.state.galleryDisabled}
        activeSegment={this.state.activeSegment}
        setActiveSegement={activeIndex => {
          if (this.state.activeSegment == 1 || this.state.activeSegment == 2) {
            Alert.alert(
              "",
              "For each folder, pleaseselect images from either 'Gallery' OR 'Child Mind server'",
              [
                {
                  text: "OK",
                  onPress: () => {
                    dataNext.length = 0;
                    this.setState({
                      activeSegment: activeIndex,
                      data: dataNext
                    });
                    if (activeIndex == 1) {
                      this.updateImage();
                    } else this.props.navigation.navigate("StockImages");
                  }
                },
                { text: "Cancel", onPress: () => {} }
              ]
            );
          } else {
            dataNext.length = 0;
            this.setState({ activeSegment: activeIndex, data: dataNext });
            if (activeIndex == 1) {
              this.updateImage();
            } else this.props.navigation.navigate("StockImages");
          }
        }}
        formDisabled={this.state.submitted}
        addImageDisabled={
          this.state.stockImagesSelected || this.state.submitted
        }
        skipDisabled={this.state.submitted}
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
        errorDisplay={this.state.folderNameError}
        onFocus={() => {
          this.setState({ focussed: true });
        }}
        saveDisabled={this.state.saveDisabled || this.state.submitted}
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
          <View style={styles.grid}>
            <Grid
              style={styles.grid}
              renderItem={data => {
                if (this.state.activeSegment == 1) {
                  if (
                    this.state.data.indexOf(data) <
                    this.state.data.length - 1
                  )
                    return (
                      <GridItem
                        index={this.state.data.indexOf(data)}
                        key={this.state.data.indexOf(data)}
                        data={data}
                        onPress={(() => {
                          if (!this.state.stockImagesSelected) {
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
                          }
                        }).bind(this)}
                      />
                    );
                  else
                    return (
                      <AddButton
                        key={this.state.data.indexOf(data)}
                        onPress={this.updateImage.bind(this)}
                      />
                    );
                } else {
                  return (
                    <GridItem
                      index={this.state.data.indexOf(data)}
                      key={this.state.data.indexOf(data)}
                      data={data}
                      onPress={(() => {
                        if (!this.state.stockImagesSelected) {
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
                        }
                      }).bind(this)}
                    />
                  );
                }
              }}
              data={this.state.data}
              itemsPerRow={4}
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
  return {
    dashboardList: store.dashboardList,
    child: store.user.child,
    folder: store.folder,
    folderAdded: store.loaded.folderAdded
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFolderScreen);
