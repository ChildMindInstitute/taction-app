import React from "react";
import { Text } from "native-base";
import Dashboard from "../../../../storybook/stories/screens/Dashboard";
import {connect} from 'react-redux';
let count = 0;
let ExcerciseData = [
  // {
  //   Name: "Spider",
  //   Points: 100,
  //   CorrectTaps: 13,
  //   WrongTaps: 20,
  //   Stars: require("../../../assets/all_stars.png"),
  //   DataFolderContent: [
  //     {
  //       Image: require("../../../assets/spiderman.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/spiderman.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/spiderman.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/spiderman.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/spiderman.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/spiderman.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: false
  //     },
  //     {
  //       Image: require("../../../assets/spiderman.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: false
  //     },
  //     {
  //       Image: require("../../../assets/spiderman.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: false
  //     }
  //   ]
  // },
  // {
  //   Name: "Ball",
  //   CorrectTaps: 13,
  //   WrongTaps: 20,
  //   Points: 80,
  //   Stars: require("../../../assets/two_stars.png"),
  //   DataFolderContent: [
  //     {
  //       Image: require("../../../assets/ball1.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/ball1.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/ball1.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/ball1.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/ball1.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: true
  //     },
  //     {
  //       Image: require("../../../assets/ball1.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: false
  //     },
  //     {
  //       Image: require("../../../assets/ball1.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: false
  //     },
  //     {
  //       Image: require("../../../assets/ball1.jpg"),
  //       CorrectTaps: 3,
  //       WrongTaps: 8,
  //       IsCompleted: false
  //     }
  //   ]
  // }
];

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

  // componentDidUpdate(){
  //   ExcerciseData=this.props.dashboardList;
  // }

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
