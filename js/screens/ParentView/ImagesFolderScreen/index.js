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
  constructor(props) {
    super(props);
    this.state = {
      IsAvailableToChild: false,
      CheckedItems: []
    };
  }

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

  // componentWillMount(){
  //   this.props.dsipatch({type:'SET_ORDER_LIST'})
  // }

  removeItems(items) {
    this.props.dispatch({
      type: "REMOVE_FOLDERS",
      payload: { items: items, childID: this.props.childID }
    });
  }

  render() {
    return (
      <ImagesFolder
        DrawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
        TotalPoints={100}
        OnPressSubmitButton={() => {
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
        ExcerciseData={this.props.dashboardList}
        SwitchToggled={(item, onOff) => {
          this.toggleStatus(onOff, item.FolderID);
        }}
        StatusBarStyle="light-content"
        OnPressDeleteButton={CheckedItems => {
          Alert.alert(
            "Delete Folders",
            "Are you sure you want to delete these folders?",
            [
              {
                text: "OK",
                onPress: () => {
                  this.removeItems(CheckedItems);
                }
              },
              { text: "Cancel", onPress: () => {} }
            ]
          );
        }}
        OnPressMoveDown={CheckedItem => {
          console.log(CheckedItem);
          this.props.dispatch({
            type: "UPDATE_ORDER_DOWN",
            payload: {
              childID: this.props.childID,
              folderID: CheckedItem.FolderID,
              orderList: this.props.orderList
            }
          });
        }}
        OnPressMoveUp={CheckedItem => {
          this.props.dispatch({
            type: "UPDATE_ORDER_UP",
            payload: {
              childID: this.props.childID,
              folderID: CheckedItem.FolderID,
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
    folderRemoved: store.folderRemoved,
    orderList: store.orderList
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesFolderScreen);
