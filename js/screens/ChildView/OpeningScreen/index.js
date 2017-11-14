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
      submitted: false,
      isPlayDisabled: true,
      todayScore: 0,
      prize: "",
      prizePoints: 0
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentWillMount() {
    this.props.dispatch({
      type: "SET_PRIZE_LIST",
      payload: this.props.childID
    });
    this.props.dispatch({ type: "SET_CHILD" });
    this.props.dispatch({ type: "SET_RANDOM_IMAGE_LIST" });
    this.props.dispatch({
      type: "SET_CHILD_FOLDER",
      payload: this.props.childID
    });
    if (this.props.child.lastActivity == new Date().toDateString()) {
      this.setState({
        todayScore: this.props.child.todayScore
      });
    } else {
      this.setState({ todayScore: 0 });
      this.props.dispatch({
        type: "RESET_TODAY_SCORE",
        payload: this.props.childID
      });
    }
  }
  componentDidUpdate() {
    if (
      this.props.folder.folderID != null &&
      this.state.isPlayDisabled &&
      !this.props.folder.folderDetails.isPlayed
    ) {
      this.setState({ isPlayDisabled: false });
    }
    if (this.props.prizeList.length != 0 && this.state.prize == "") {
      this.setPrize();
    }
  }

  setPrize() {
    for (let i in this.props.prizeList) {
      if (this.props.prizeList[i].points > this.props.child.totalScore) {
        this.setState({
          prizePoints:
            this.props.prizeList[i].points - this.props.child.totalScore,
          prize: this.props.prizeList[i].description
        });
        return;
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NewIntro
          menuPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
          topViewBackgroundColor="#0067a0"
          bottomViewBackGroundColor="#ffffff"
          scoreColor="#0067a0"
          score={this.props.child.totalScore}
          stars={calculate(
            this.props.child.correctTaps,
            this.props.child.wrongTaps
          )}
          playOnPress={() => {
            this.setState({ submitted: true });
            this.props.navigation.navigate("GameScreen");
            setTimeout(() => {
              this.setState({ submitted: false });
            }, 2000);
          }}
          isPlayDisabled={this.state.isPlayDisabled || this.state.submitted}
          howToPlayOnPress={() => {
            this.props.navigation.navigate("HowToPlayScreen");
          }}
        />
        <ModalCommon
          isVisible={this.state.modalVisible}
          extraModalStyle={{
            paddingTop: "25%",
            paddingBottom: "25%"
          }}
          extraModalViewStyle={{ backgroundColor: "#0067a0" }}
          content={
            <ModalContent
              greetingLine1={
                this.props.child.totalScore > 0
                  ? "Welcome back"
                  : "Welcome to Taction"
              }
              greetingLine1Style={{
                fontSize: this.props.child.totalScore > 0 ? 30 : 28
              }}
              line2needed={false}
              isDescriptionLine2Required={true}
              stars={calculate(
                this.props.child.correctTaps,
                this.props.child.wrongTaps
              )}
              isCloseButtonRequired={true}
              displayPoints={this.props.child.totalScore}
              description={
                this.props.child.totalScore > 0
                  ? "You have earned " +
                    this.state.todayScore +
                    " point" +
                    (this.props.child.todayScore > 1 ? "s" : "") +
                    " today!"
                  : "Time to earn some points!"
              }
              isDescriptionLine2Required={this.props.child.totalScore > 0}
              descriptionLine2={
                this.state.prize
                  ? this.state.prizePoints + " more points until next prize:"
                  : ""
              }
              nextPrizeDescription={this.state.prize}
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
    folder: store.folder,
    prizeList: store.prizeList
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(OpeningScreen);
