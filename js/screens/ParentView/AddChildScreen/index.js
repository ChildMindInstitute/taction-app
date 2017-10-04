import React from "react";
import AddChild from "../../../../storybook/stories/screens/AddChild";
import Expo from "expo";
import {connect} from 'react-redux';

var childName, childAge;
@connect(store => {
  return {
    user: store.user,
    loaded: store.loaded
  };
})
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
      navigate(this.props.IsNewRegistration ? "AddFolder" : "Dashboard");
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <AddChild
        OnPressSaveButton={() => {
          //handle Save
          this.addChild();
        }}
        OnPressSkipButton={() => {
          navigate(this.props.IsNewRegistration ? "AddFolder" : "Dashboard");
        }}
        ChildNameChange={event => {
          childName = event.nativeEvent.text;
        }}
        ChildAgeChange={event => {
          childAge = event.nativeEvent.text;
        }}
        StatusBarStyle="light-content"
        DrawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
      />
    );
  }
}
export default AddChildScreen;
