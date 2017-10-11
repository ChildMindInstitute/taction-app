import React from "react";
import { Text, View, Spinner } from "native-base";
import Dashboard from "../../../../storybook/stories/screens/Dashboard";
import { connect } from "react-redux";
let count = 0;

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

  componentDidMount() {
    this.props.dispatch({
      type: "SET_FOLDER_LIST",
      payload: this.props.child.childID
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Dashboard
          leftPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
          ExcerciseDataMonth={this.props.dashboardList}
          ExcerciseDataToday={this.props.dashboardList}
        />
        {this.props.loaded ? (
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
    loaded: store.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
