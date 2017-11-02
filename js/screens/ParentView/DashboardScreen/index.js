import React from "react";
import { View, Spinner, Toast } from "native-base";
import Dashboard from "../../../../storybook/stories/screens/Dashboard";
import { connect } from "react-redux";
let count = 0;
class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: "DashboardScreen",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      childExists: false
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
    } else if (!this.props.isNewRegistration) {
      this.setState({ childExists: false });
      Toast.show({
        text: "No child Added!",
        position: "bottom",
        buttonText: "Okay",
        duration: 1500
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Dashboard
          leftPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
          menuDisabled={!this.props.loaded}
          excerciseDataMonth={this.props.monthList}
          excerciseDataToday={this.props.todayList}
          loaded={this.props.loaded}
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
