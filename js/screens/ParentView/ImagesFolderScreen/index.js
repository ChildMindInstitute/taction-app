import React from "react";
import ImagesFolder from "../../../../storybook/stories/screens/ImagesFolder";
import { connect } from "react-redux";
import { Alert } from "react-native";
import { Toast } from "native-base";
class ImagesFolderScreen extends React.Component {
  static navigationOptions = {
    title: "ImagesFolderScreen",
    header: null
  };
  toggleStatus(onOff, folderID) {
    this.props.dispatch({
      type: "SET_FOLDER_STATUS",
      payload: { status: onOff, folderID: folderID }
    });
  }

  componentDidUpdate() {
    if (this.props.folderRemoved) {
      this.props.navigation.navigate("Dashboard");
    }
  }
  removeItems(items) {
    this.props.dispatch({
      type: "REMOVE_FOLDERS",
      payload: { items: items, childID: this.props.childID }
    });
  }

  render() {
    return (
      <ImagesFolder
        drawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
        totalPoints={100}
        onPressAddButton={() => {
          if (this.props.child && this.props.childID) {
            this.props.navigation.navigate("AddFolder");
          } else {
            Toast.show({
              text: "No child Added yet!",
              position: "bottom",
              buttonText: "Okay"
            });
          }
        }}
        excerciseData={this.props.dashboardList}
        switchToggled={(item, onOff) => {
          this.toggleStatus(onOff, item.folderID);
        }}
        onPressDeleteButton={checkedItems => {
          Alert.alert(
            "Delete Folders",
            "Are you sure you want to delete these folders?",
            [
              {
                text: "OK",
                onPress: () => {
                  debugger;
                  this.removeItems(checkedItems);
                }
              },
              { text: "Cancel", onPress: () => {} }
            ]
          );
        }}
        onPressMoveDown={checkedItem => {
          this.props.dispatch({
            type: "UPDATE_ORDER_DOWN",
            payload: {
              childID: this.props.childID,
              folderID: checkedItem.folderID,
              orderList: this.props.orderList
            }
          });
        }}
        onPressMoveUp={checkedItem => {
          debugger;
          this.props.dispatch({
            type: "UPDATE_ORDER_UP",
            payload: {
              childID: this.props.childID,
              folderID: checkedItem.folderID,
              orderList: this.props.orderList
            }
          });
        }}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    child: store.user.child,
    childID: store.user.child.childID,
    dashboardList: store.dashboardList,
    folderRemoved: store.loaded.folderRemoved,
    orderList: store.orderList
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesFolderScreen);
