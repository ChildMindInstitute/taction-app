import React from "react";
import { NavigationActions } from "react-navigation";
import Welcome from "../../../storybook/stories/screens/Welcome";
import { connect } from "react-redux";

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: "WelcomeScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch({ type: "SET_PARENT" });
  }

  async redirect() {
    this.props.dispatch({ type: "SET_PARENT" });
    if (this.props.parent.emailVerified) {
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
      );
    } else {
      await alert("PLease Verify Your Email");
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              params: { NewRegistration: true },
              routeName: "AlmostThere"
            })
          ]
        })
      );
    }
  }

  render() {
    return (
      <Welcome
        OnPressSubmitButton={() => this.redirect()}
        StatusBarStyle="light-content"
      />
    );
  }
}

const mapStateToProps = store => {
  return { parent: store.user.parent };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
