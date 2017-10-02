import React from "react";
import NewIntro from "../../../../storybook/stories/screens/NewIntroScreen";
class OpeningScreen extends React.Component {
  static navigationOptions = {
    title: "OpeningScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NewIntro
        TopViewBackgroundColor="rgba(0, 103, 158, 1)"
        BottomViewBackGroundColor="rgba(255, 255, 255, 0.9)"
        ScoreColor="rgba(0, 103, 158, 1)"
        Score={1250}
        Stars={require("../../../assets/all_stars.png")}
        PlayOnPress={() => {
          this.props.navigation.navigate("DashboardChild");
        }}
        HowToPlayOnPress={() => {}}
      />
    );
  }
}
export default OpeningScreen;
