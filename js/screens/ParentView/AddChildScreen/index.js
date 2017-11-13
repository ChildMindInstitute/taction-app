import React from "react";
import AddChild from "../../../../storybook/stories/screens/AddChild";
import { connect } from "react-redux";
import { Toast } from "native-base";

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
        this.props.isNewRegistration ? "AddFolder" : "Dashboard",
        this.props.isNewRegistration
          ? {
              noAddedImages: true,
              folderName:""
            }
          : {}
      );
    } else {
      Toast.show({
        text: "Error:",
        buttonText: " fields cannot be left blank",
        position: "bottom",
        duration: 5000
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <AddChild
        onPressSaveButton={() => {
          this.addChild();
        }}
        onPressSkipButton={() => {
          this.props.dispatch({ type: "SET_CHILD" });
          navigate("Dashboard");
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
