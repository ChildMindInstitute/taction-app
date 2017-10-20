import React from "react";
import { View, Spinner, Toast } from "native-base";
import Dashboard from "../../../../storybook/stories/screens/Dashboard";
import { connect } from "react-redux";
let count = 0;
import { StatusBar } from "react-native";
class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: "DashboardScreen",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      childExists: true
    };
  }
  componentWillMount() {
    if (this.props.isNewRegistration && count <= 0) {
      this.props.navigation.navigate("AddChild");
      count++;
    }
  }

  componentDidMount() {
    if (this.props.child && this.props.child.childID) {
      this.setState({ childExists: true });
      this.props.dispatch({
        type: "SET_FOLDER_LIST",
        payload: this.props.child.childID
      });
    } else {
      this.setState({ childExists: false });
      Toast.show({
        text: "No child Added!",
        position: "bottom",
        buttonText: "Okay"
      });
    }
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <View style={{ flex: 1 }}>
        <Dashboard
          leftPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
          excerciseDataMonth={this.props.monthList}
          excerciseDataToday={this.props.todayList}
        />
        {this.props.loaded || !this.state.childExists ? (
          <View />
        ) : (
          <Spinner
            color="#0067a0"
            style={{
              position: "absolute",
              left: "45%",
              top: "50%"
            }}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    child: store.user.child,
    dashboardList: store.dashboardList,
    todayList: store.todayList,
    monthList: store.monthList,
    loaded: store.loaded.dashboardLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
