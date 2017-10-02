import React from "react";
import Home from "../../../../storybook/stories/screens/Home";
class GameScreen extends React.Component {
  static navigationOptions = {
    title: "GameScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Home
        Back={() => {
          this.props.navigation.goBack();
        }}
        TotalPoints={100}
        TimeLeft={180000}
        TimeLeftDenomination={"Min"}
        Image1={require("../../../assets/ball1.jpg")}
        Image2={require("../../../assets/spiderman.jpg")}
        Image3={require("../../../assets/minion.jpg")}
        Image4={require("../../../assets/ball2.jpg")}
        CrossImage={require("../../../assets/star_empty.png")}
        TickImage={require("../../../assets/star_filled.png")}
        CorrectOption={2}
        Pressed={item => {
          console.log(item);
        }}
        LeftImages={5}
        TotalImages={10}
        Question="Tap on The Spider"
      />
    );
  }
}
export default GameScreen;
