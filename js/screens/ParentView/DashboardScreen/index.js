import React from "react";
import { Text } from "native-base";
import Dashboard from "../../../../storybook/stories/screens/Dashboard";
import {connect} from 'react-redux';
let count = 0;

@connect(store=>{
  return{
    child: store.user.child,
    dashboardList: store.dashboardList
  }
})
class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: "DashboardScreen",
    header: null
  };
  componentWillMount() {
    if (this.props.IsNewRegistration && count <= 0) {
      this.props.navigation.navigate("AddChild");
      count++;
    }
  }

  componentDidMount(){
    this.props.dispatch({type:'SET_FOLDER_LIST', payload:this.props.child.childID});
  }


  render() {
    return (
      <Dashboard
        DrawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
        ExcerciseData={this.props.dashboardList}
      >
        <Text style={{ fontSize: 22 }}>Today's Activities</Text>
      </Dashboard>
    );
  }
}
export default DashboardScreen;
