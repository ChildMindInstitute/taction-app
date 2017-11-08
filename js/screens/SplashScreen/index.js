import React from "react";
import { NetInfo } from "react-native";
import { connect } from "react-redux";
import { Toast } from "native-base";
import { NavigationActions } from "react-navigation";
import SplashScreen from "../../../storybook/stories/screens/SplashScreen";
import Db from "../../services";
// import Expo from "expo";

class Splash extends React.Component {
  static navigationOptions = {
    title: "Splash",
    header: null
  };
  constructor(props) {
    super(props);
    Db.initDb();
  }
  componentWillMount() {
    let unsubscribe = Db.getAuth().onAuthStateChanged(user => {
      try {
        if (user && !this.props.newUser) {
          this.props.dispatch({ type: "SET_PARENT" });
          this.props.dispatch({ type: "SET_CHILD" });
          unsubscribe();
        } else {
          unsubscribe();
          this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "Login" })]
            })
          );
        }
      } catch (err) {
        Toast.show({
          text: "Error",
          position: "bottom",
          buttonText: "Cannot sign in!",
          duration: 5000
        });
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: "Login"
              })
            ]
          })
        );
      }
    });
  }
  componentDidUpdate() {
    if (this.props.loaded) {
      if (this.props.parent.emailVerified) {
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "LoginAs" })]
          })
        );
      } else {
        Toast.show({
          text: "Error:",
          position: "bottom",
          buttonText: "Please verify your email to proceed",
          duration: 5000
        });
        this.props.dispatch({ type: "USER_SIGN_OUT" });
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Login" })]
          })
        );
      }
    }
  }

  render() {
    return (
      <SplashScreen
        ImageDimensions={{ width: 200, height: 300 }}
        backgroundColor="#0067a0"
        color="#ccc"
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    parent: store.user.parent,
    child: store.user.child,
    loaded: store.loaded.userLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
