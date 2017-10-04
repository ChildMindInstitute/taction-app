import React from "react";
import { NavigationActions } from "react-navigation";
import Welcome from "../../../storybook/stories/screens/Welcome";
import {connect} from 'react-redux';


@connect(store=>{
  return{
    parent: store.user.parent
  }
})
class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: "WelcomeScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  async redirect(){
    if(this.props.parent.emailVerified){
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
      )
    }else{
      await alert("PLease Verify Your Email");
      this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              params: { NewRegistration: true },
              routeName: "AlmostThere"
            })
          ]
        }));
    }
  }

  render() {
    return (
      <Welcome
        OnPressSubmitButton={() =>
          this.redirect()}
        StatusBarStyle="light-content"
      />
    );
  }
}
export default WelcomeScreen;
