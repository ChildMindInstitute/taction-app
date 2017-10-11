import React from "react";
import ImagesFolder from "../../../../storybook/stories/screens/ImagesFolder";
import {connect} from 'react-redux';

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

  toggleStatus(onOff, folderID){
    this.props.dispatch({type:"SET_FOLDER_STATUS", payload: {status:onOff, folderID: folderID}});
  }

  // componentWillMount(){
  //   this.props.dsipatch({type:'SET_ORDER_LIST'})
  // }

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
          this.toggleStatus(onOff, item.FolderID);
        }}
        StatusBarStyle="light-content"
        OnPressDeleteButton={CheckedItems => console.log(CheckedItems[0].FolderID)}
        OnPressMoveDown={CheckedItem => console.log(CheckedItem)}
        OnPressMoveUp={CheckedItem => console.log(CheckedItem)}
      />
    );
  }
}

const mapStateToProps = (store)=>{
    return { dashboardList: store.dashboardList , };
}

const mapDispatchToProps = (dispatch)=>{
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesFolderScreen);
