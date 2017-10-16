import React from "react";
import NewIntro from "../../../../storybook/stories/screens/NewIntroScreen";
import ModalCommon from "../../../../storybook/stories/components/Modal/modal";
import ModalContent from "../../../../storybook/stories/components/Modal/ModalContent";
import calculate from "../../../componentsCommon/calcutateStars";
import { connect } from "react-redux";

class OpeningScreen extends React.Component {
  static navigationOptions = {
    title: "OpeningScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.screenProps.state.params.showModal
        ? this.props.navigation.state.params
          ? this.props.navigation.state.params.showModal
          : true
        : false,
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
        TopViewBackgroundColor="#0067a0"
        BottomViewBackGroundColor="#ffffff"
        ScoreColor="#0067a0"
        Score={this.props.child.totalScore}
        Stars={calculate(
          this.props.child.correctTaps,
          this.props.child.wrongTaps
        )}
        PlayOnPress={() => {
          this.props.navigation.navigate("GameScreen");
        }}
        IsPlayDisabled={this.state.IsPlayDisabled}
        HowToPlayOnPress={() => {
          this.props.navigation.navigate("HowToPlayScreen");
        }}
      >
        <ModalCommon
          isVisible={this.state.modalVisible}
          Content={
            <ModalContent
              GreetingLine1="Welcome Back"
              Line2needed={false}
              Stars={calculate(
                this.props.child.correctTaps,
                this.props.child.wrongTaps
              )}
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
