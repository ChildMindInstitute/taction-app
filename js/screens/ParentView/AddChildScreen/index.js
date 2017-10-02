import React from "react";
import AddChild from "../../../../storybook/stories/screens/AddChild";
class AddChildScreen extends React.Component {
  static navigationOptions = {
    title: "AddChildScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <AddChild
        OnPressSaveButton={() => {
          //handle Save
          navigate(this.props.IsNewRegistration ? "AddFolder" : "Dashboard");
        }}
        OnPressSkipButton={() => {
          navigate(this.props.IsNewRegistration ? "AddFolder" : "Dashboard");
        }}
        ChildNameChange={event => {
          console.log(event.nativeEvent.text);
        }}
        ChildAgeChange={event => {
          console.log(event.nativeEvent.text);
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
