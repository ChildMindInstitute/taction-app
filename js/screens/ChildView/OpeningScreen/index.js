import React from "react";
import NewIntro from "../../../../storybook/stories/screens/NewIntroScreen";
import ModalCommon from "../../../../storybook/stories/components/Modal/modal";
import ModalContent from "../../../../storybook/stories/components/Modal/ModalContent";
import { connect } from "react-redux";

class OpeningScreen extends React.Component {
  static navigationOptions = {
    title: "OpeningScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <NewIntro
        TopViewBackgroundColor="rgba(0, 103, 158, 1)"
        BottomViewBackGroundColor="rgba(255, 255, 255,1)"
        ScoreColor="rgba(0, 103, 158, 1)"
        Score={this.props.child.totalScore}
        Stars={require("../../../assets/all_stars.png")}
        PlayOnPress={() => {
          this.props.navigation.navigate("GameScreen");
        }}
        HowToPlayOnPress={() => {}}
      >
        <ModalCommon
          isVisible={this.state.modalVisible}
          Content={
            <ModalContent
              GreetingLine1="Welcome Back"
              Line2needed={false}
              Stars={require("../../../../js/assets/all_stars.png")}
              DisplayPoints={120}
              Description="Time To Earn Some Points"
              IsButtonNeeded={false}
              toggleVisiblity={() => {
                this.setModalVisible(false);
              }}
              PlayLaterText="CLOSE"
            />
          }
        />
      </NewIntro>
    );
  }
}

const mapStateToProps = store => {
  return {
    child: store.user.child.childDetails,
    childID: store.user.child.childID
  };
};

mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, null)(OpeningScreen);
