import React from "react";
import ImagesFolder from "../../../../storybook/stories/screens/ImagesFolder";
import {connect} from 'react-redux';

@connect(store=>{
  return{
    dashboardList: store.dashboardList
  }
})
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

  render() {
    return (
      <ImagesFolder
        DrawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
        TotalPoints={100}
        OnPressSubmitButton={() => {
          this.props.navigation.navigate("AddFolder");
        }}
        ExcerciseData={this.props.dashboardList}
        SwitchToggled={(item, onOff) => {
          console.log(item.FolderID + " " + onOff);
        }}
        StatusBarStyle="light-content"
        OnPressDeleteButton={CheckedItems => console.log(CheckedItems)}
        OnPressMoveDown={CheckedItem => console.log(CheckedItem)}
        OnPressMoveUp={CheckedItem => console.log(CheckedItem)}
      />
    );
  }
}
export default ImagesFolderScreen;
