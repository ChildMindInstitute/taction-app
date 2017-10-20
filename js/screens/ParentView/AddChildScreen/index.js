import React from "react";
import AddChild from "../../../../storybook/stories/screens/AddChild";
import { StatusBar } from "react-native";
import { connect } from "react-redux";

var childName, childAge;
class AddChildScreen extends React.Component {
  static navigationOptions = {
    title: "AddChildScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  addChild() {
    if (childName != "" && childAge != "") {
      this.props.dispatch({
        type: "ADD_CHILD",
        payload: { name: childName, age: childAge }
      });
      this.props.navigation.navigate(
        this.props.isNewRegistration ? "AddFolder" : "Dashboard"
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    StatusBar.setBarStyle("light-content", true);
    return (
      <AddChild
        onPressSaveButton={() => {
          this.addChild();
        }}
        onPressSkipButton={() => {
          navigate(this.props.isNewRegistration ? "AddFolder" : "Dashboard");
        }}
        childNameChange={event => {
          childName = event.nativeEvent.text;
        }}
        childAgeChange={event => {
          childAge = event.nativeEvent.text;
        }}
        drawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
      />
    );
  }
}

const mapStateToProps = store => {
  return { user: store.user, loaded: store.loaded };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddChildScreen);
