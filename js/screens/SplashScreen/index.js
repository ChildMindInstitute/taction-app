import React from "react";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import SplashScreen from "../../../storybook/stories/screens/SplashScreen";
import Db from "../../services";
import Expo from "expo";

@connect(store => {
  return {
    parent: store.user.parent,
    child: store.user.child,
    loaded: store.loaded
  };
})
class Splash extends React.Component {
  static navigationOptions = {
    title: "Splash",
    header: null
  };
  constructor(props) {
    super(props);
    Db.initDb();
    this.state = { UserAvailable: false, isLoading: false, UserLoaded: false };
    this.MountExecute;
  }
  async componentWillMount() {
    this.setState({ isLoading: true });
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf")
    });
    await Db.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ UserAvailable: true });
        this.props.dispatch({
          type: "SET_PARENT"
        });
        this.props.dispatch({
          type: "SET_CHILD"
        });
        if (this.props.loaded) {
          this.setState({ UserLoaded: true });
        } else {
          this.setState({ UserLoaded: false });
        }
      } else {
        this.setState({ UserAvailable: false });
      }
    });
    this.setState({ isLoading: false });
  }
  Execute() {
    if (this.state.UserAvailable && this.state.UserLoaded) {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "LoginAs" })]
        })
      );
    } else if (!this.state.UserAvailable) {
      setTimeout(
        () =>
          this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "Login" })]
            })
          ),
        1
      );
    }
  }

  navigate() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "LoginAs" })]
      })
    );
  }

  render() {
    if (!this.state.isLoading) {
      this.Execute();
    }
    return (
      <SplashScreen
        ImageDimensions={{ width: 200, height: 300 }}
        backgroundColor="#0067a0"
        color="#ccc"
        StatusBarStyle="light-content"
      />
    );
  }
}

export default Splash;
