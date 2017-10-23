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
    // await Expo.Font.loadAsync({
    // Roboto: require("native-base/Fonts/Roboto.ttf"),
    // Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    // Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    // FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf")
    // });
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
          text: "Error signing in!",
          position: "bottom",
          buttonText: "Okay"
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

  componentDidMount() {
    function handleConnectivityChange(isConnected) {
      {
        isConnected
          ? {}
          : Toast.show({
              text: "No Internet Connection!",
              position: "bottom",
              buttonText: "Okay"
            });
      }
    }
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleConnectivityChange
    );
  }

  componentDidUpdate() {
    if (this.props.loaded) {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "LoginAs" })]
        })
      );
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
