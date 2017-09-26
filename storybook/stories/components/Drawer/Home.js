import React from "react";
import Home from "../../screens/Home";
import { NavigationActions } from "react-navigation";
class HomeView extends React.Component {
  render() {
    return (
      <Home
        Back={() => this.props.navigation.dispatch(NavigationActions.back())}
        TotalPoints={100}
        TimeLeftDenomination={"Min"}
        TimeLeft={"2.07"}
        Image1={require("../../../../js/assets/ball1.jpg")}
        Image2={require("../../../../js/assets/spiderman.jpg")}
        Image3={require("../../../../js/assets/minion.jpg")}
        Image4={require("../../../../js/assets/ball2.jpg")}
        LeftImages={3}
        TotalImages={10}
      />
    );
  }
}
module.exports = HomeView;
