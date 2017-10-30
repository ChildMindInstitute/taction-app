import React from "react";
import ImagesFolder from "../../../../storybook/stories/screens/ImagesFolder";
import { connect } from "react-redux";
import { Alert } from "react-native";
import { Toast } from "native-base";
let dashboardList = [];
let count = 0;
class ImagesFolderScreen extends React.Component {
  static navigationOptions = {
    title: "ImagesFolderScreen",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      reordered: false,
      orderingDisabled: true,
      deleteDisabled: true
    };
    dashboardList.length = 0;
    console.log(this.props.orderList);
  }
  getIndex(item) {
    for (let i = 0; i < dashboardList.length; i++) {
      if (item.imageList.folderID == dashboardList[i].imageList.folderID)
        return i;
    }
  }
  updateCheckedItems() {
    count = 0;
    for (let i = 0; i < dashboardList.length; i++) {
      if (dashboardList[i].checked) {
        count++;
      }
    }
  }
  getCheckedItem() {
    for (let i = 0; i < dashboardList.length; i++) {
      if (dashboardList[i].checked) {
        return dashboardList[i];
      }
    }
  }
  toggleStatus(onOff, folderID) {
    this.props.dispatch({
      type: "SET_FOLDER_STATUS",
      payload: { status: onOff, folderID: folderID }
    });
  }
  componentDidMount() {
    if (this.props.dashboardList) {
      for (let i = 0; i < this.props.dashboardList.length; i++) {
        dashboardList.push({
          checked: false,
          imageList: this.props.dashboardList[i],
          switched: this.props.dashboardList[i].status
        });
      }
      this.setState({ imageList: dashboardList });
    }
  }
  componentDidUpdate() {
    if (this.props.folderReordered && this.state.reordered) {
      this.setState({ imageList: this.props.dashboardList, reordered: false });
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
            this.props.navigation.navigate("AddFolder", {
              noAddedImages: true
            });
          } else {
            Toast.show({
              text: "No child Added yet!",
              position: "bottom",
              buttonText: "Okay",
              duration: 1500
            });
          }
        }}
        excerciseData={this.state.imageList}
        switchToggled={item => {
          let index = this.getIndex(item);
          dashboardList[index] = {
            ...dashboardList[index],
            switched: !dashboardList[index].switched
          };
          this.setState({ imageList: dashboardList });
          this.toggleStatus(
            dashboardList[index].switched,
            item.imageList.folderID
          );
        }}
        deleteDisabled={this.state.deleteDisabled}
        onPressDeleteButton={() => {
          Alert.alert(
            "Delete Folders",
            "Are you sure you want to delete these folders?",
            [
              {
                text: "OK",
                onPress: () => {
                  let itemsToBeDeleted = [];
                  for (let i = 0; i < dashboardList.length; i++) {
                    if (dashboardList[i].checked) {
                      itemsToBeDeleted.push(dashboardList[i].imageList);
                      dashboardList.splice(i, 1);
                    }
                  }
                  this.setState({ imageList: dashboardList });
                  this.removeItems(itemsToBeDeleted);
                }
              },
              { text: "Cancel", onPress: () => {} }
            ]
          );
        }}
        onPressMoveDown={() => {
          let item = this.getCheckedItem();
          let index = dashboardList.indexOf(item);
          if (index != dashboardList.length - 1) {
            let temp = dashboardList[index + 1];
            dashboardList[index + 1] = dashboardList[index];
            dashboardList[index] = temp;
            this.setState({ imageList: dashboardList });
            this.props.dispatch({
              type: "UPDATE_ORDER_DOWN",
              payload: {
                childID: this.props.childID,
                folderID: item.imageList.folderID,
                orderList: this.props.orderList,
                dashboardList: this.props.dashboardList
              }
            });
          }
        }}
        moveUpDisabled={this.state.orderingDisabled}
        moveDownDisabled={this.state.orderingDisabled}
        checkBoxChange={item => {
          let index = this.getIndex(item);
          dashboardList[index] = {
            ...dashboardList[index],
            checked: !dashboardList[index].checked
          };
          this.setState({ imageList: dashboardList });
          this.updateCheckedItems();
          if (count == 1) {
            this.setState({ orderingDisabled: false });
          } else {
            this.setState({ orderingDisabled: true });
          }
          if (count >= 1) {
            this.setState({ deleteDisabled: false });
          } else {
            this.setState({ deleteDisabled: true });
          }
        }}
        onPressMoveUp={() => {
          let item = this.getCheckedItem();
          let index = dashboardList.indexOf(item);
          if (index != 0) {
            let temp = dashboardList[index - 1];
            dashboardList[index - 1] = dashboardList[index];
            dashboardList[index] = temp;
            this.setState({ imageList: dashboardList });
            this.props.dispatch({
              type: "UPDATE_ORDER_UP",
              payload: {
                childID: this.props.childID,
                folderID: item.imageList.folderID,
                orderList: this.props.orderList,
                dashboardList: this.props.dashboardList
              }
            });
          }
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
    folderReordered: store.loaded.folderReordered,
    orderList: store.orderList
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesFolderScreen);
