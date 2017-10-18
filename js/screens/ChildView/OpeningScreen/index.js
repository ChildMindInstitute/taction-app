import React from "react";
import NewIntro from "../../../../storybook/stories/screens/NewIntroScreen";
import ModalCommon from "../../../../storybook/stories/components/Modal/modal";
import ModalContent from "../../../../storybook/stories/components/Modal/ModalContent";
import calculate from "../../../componentsCommon/calcutateStars";
import { connect } from "react-redux";
import { View } from "react-native";

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
      <View style={{ flex: 1 }}>
        <NewIntro
          topViewBackgroundColor="#0067a0"
          bottomViewBackGroundColor="#ffffff"
          scoreColor="#0067a0"
          score={this.props.child.totalScore}
          stars={calculate(
            this.props.child.correctTaps,
            this.props.child.wrongTaps
          )}
          playOnPress={() => {
            this.props.navigation.navigate("GameScreen");
          }}
          isPlayDisabled={this.state.IsPlayDisabled}
          howToPlayOnPress={() => {
            this.props.navigation.navigate("HowToPlayScreen");
          }}
        />
        <ModalCommon
          isVisible={this.state.modalVisible}
          content={
            <ModalContent
              greetingLine1="Welcome back"
              line2needed={false}
              isDescriptionLine2Required={true}
              stars={calculate(
                this.props.child.correctTaps,
                this.props.child.wrongTaps
              )}
              isCloseButtonRequired={true}
              displayPoints={this.props.child.totalScore}
              description="You have earned 1000 points today!"
              descriptionLine2="50 more to achieve a prize!"
              nextPrizeDescription="Day outing in water park"
              isButtonNeeded={false}
              toggleVisiblity={() => {
                this.setModalVisible(false);
              }}
            />
          }
        />
      </View>
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
