import React from "react";
import { NavigationActions } from "react-navigation";
import Welcome from "../../../storybook/stories/screens/Welcome";
class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: "WelcomeScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Welcome
        OnPressSubmitButton={() =>
          this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  params: { NewRegistration: true },
                  routeName: "ParentDrawer"
                })
              ]
            })
          )}
        StatusBarStyle="light-content"
      />
    );
  }
}
export default WelcomeScreen;
