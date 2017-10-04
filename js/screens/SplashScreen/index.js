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
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf")
    });
  }

  componentDidMount(){
    Db.getAuth().onAuthStateChanged((user)=>{
      if(user){
        this.props.dispatch({
          type: "SET_PARENT"
        });
        this.props.dispatch({
          type: "SET_CHILD"
        });
        if (this.props.loaded) {
          this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({routeName: "Login"}) //to be changed to LoginAs
            ]
          }));
        }
      }
      else{
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Login" })]
          })
        );
      }
    });
  }

  navigate(){
    this.props.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "LoginAs" })]
      }));
  }

  render() {
    if(this.props.loaded){
      this.navigate();
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
