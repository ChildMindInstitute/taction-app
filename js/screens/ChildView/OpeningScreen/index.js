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
      modalVisible: true,
      IsPlayDisabled: true
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentWillMount() {
    this.props.dispatch({ type: "SET_CHILD" });
    this.props.dispatch({ type: "SET_RANDOM_IMAGE_LIST" });
    this.props.dispatch({
      type: "SET_CHILD_FOLDER",
      payload: this.props.childID
    });
  }
  componentDidUpdate() {
    if (this.props.folder.folderID && this.state.IsPlayDisabled) {
      this.setState({ IsPlayDisabled: false });
    }
  }
  render() {
    return (
      <NewIntro
        TopViewBackgroundColor="rgba(0, 103, 158, 1)"
        BottomViewBackGroundColor="rgba(255, 255, 255,1)"
        ScoreColor="rgba(0, 103, 158, 1)"
        Score={this.props.child.totalScore}
        Stars={require("../../../assets/Asset_5.png")}
        PlayOnPress={() => {
          this.props.navigation.navigate("GameScreen");
        }}
        IsPlayDisabled={this.state.IsPlayDisabled}
        HowToPlayOnPress={() => {}}
      >
        <ModalCommon
          isVisible={this.state.modalVisible}
          Content={
            <ModalContent
              GreetingLine1="Welcome Back"
              Line2needed={false}
              Stars={require("../../../../js/assets/Asset_5.png")}
              DisplayPoints={this.props.child.totalScore}
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
    childID: store.user.child.childID,
    folder: store.folder
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(OpeningScreen);
