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

  redirect() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            params: { newRegistration: true },
            routeName: "ParentDrawer"
          })
        ]
      })
    );
  }

  render() {
    return <Welcome onPressSubmitButton={() => this.redirect()} />;
  }
}

const mapStateToProps = store => {
  return { parent: store.user.parent };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
