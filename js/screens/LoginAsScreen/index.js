import React from "react";
import { NavigationActions } from "react-navigation";
import LoginAs from "../../../storybook/stories/screens/LoginAs";
const data = [{ Name: "Shubham" }, { Name: "Praneet" }, { Name: "Arno" }];
class LoginAsScreen extends React.Component {
  static navigationOptions = {
    title: "LoginAsScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginAs
        Data={data}
        CheckBoxPress={(item, checked) => {
          if (checked && data.indexOf(item) === 0) {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    params: { NewRegistration: false },
                    routeName: "ParentDrawer"
                  })
                ]
              })
            );
          } else {
            //ActionwithItemSelected
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    params: { NewRegistration: false },
                    routeName: "OpeningScreen"
                  })
                ]
              })
            );
          }
        }}
      />
    );
  }
}
export default LoginAsScreen;
