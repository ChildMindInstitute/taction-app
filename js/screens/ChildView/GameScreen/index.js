import React from "react";
import Home from "../../../../storybook/stories/screens/Home";
import ModalCommon from "../../../../storybook/stories/components/Modal/modal";
import ModalContent from "../../../../storybook/stories/components/Modal/ModalContent";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import calculate from "../../../componentsCommon/calcutateStars";
import Sound from "react-native-sound";
let gameMusic, correctAnswer, wrongAnswer;
let totalLevels = 10;
const correctArrayItem = 0;
let time;
let index, randomIndex, image;
class GameScreen extends React.Component {
  static navigationOptions = {
    title: "GameScreen",
    header: null
  };
  constructor(props) {
    super(props);
    if (this.props.settings.sound) {
      gameMusic = new Sound("game_music.mp3", Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log("failed to load the sound", error);
          return;
        }
        gameMusic.setVolume(0.25);
        gameMusic.setNumberOfLoops(-1);
        gameMusic.play();
      });

      correctAnswer = new Sound(
        "correct_answer.mp3",
        Sound.MAIN_BUNDLE,
        error => {
          if (error) {
            console.log("failed to load the sound", error);
            return;
          }
          correctAnswer.setVolume(1);
          correctAnswer.setNumberOfLoops(0);
        }
      );
      wrongAnswer = new Sound("worng_answer.mp3", Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log("failed to load the sound wrongAnswer", error);
          return;
        }
        wrongAnswer.setVolume(1);
        wrongAnswer.setNumberOfLoops(0);
      });
    }
    this.options = [0, 1, 2, 3];
    this.state = {
      i1: this.randomAssign(),
      i2: this.randomAssign(),
      i3: this.randomAssign(),
      i4: this.randomAssign(),
      time: time,
      correctOption: 0,
      currentLevel: 0,
      reset: false,
      modalVisible: false,
      gameFinished: false,
      gameOver: false,
      currentImage: {},
      currentFolder: {},
      input: [
        require("../../../assets/ball-1.jpg"),
        require("../../../assets/spiderman.jpg"),
        require("../../../assets/minion.jpg"),
        require("../../../assets/ball-2.jpg")
      ],
      isLast: false
    };
    this.state.correctOption = this.correctOptionDecision(
      this.state.i1,
      this.state.i2,
      this.state.i3
    );
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  randomAssign() {
    let i = this.options[Math.floor(Math.random() * this.options.length)];
    this.options.splice(this.options.indexOf(i), 1);
    return i;
  }
  correctOptionDecision(i1, i2, i3) {
    if (i1 == correctArrayItem) {
      return 1;
    }
    if (i2 == correctArrayItem) {
      return 2;
    }
    if (i3 == correctArrayItem) {
      return 3;
    }
    return 4;
  }
  componentWillUnmount() {
    gameMusic.release();
    correctAnswer.release();
    wrongAnswer.release();
  }
  componentWillMount() {
    totalLevels = this.props.settings.imagesPerSession;
    time = (this.props.settings.maxImageDuration + 1.5) * 1000;
  }

  componentDidMount() {
    let something = this.state.input.slice();
    if (this.props.settings.random) {
      index = Math.floor(Math.random() * this.props.imageList.length);
      image = this.props.imageList[index];
      something[0] = { uri: image.imageDetails.url };
    } else {
      index = this.state.currentLevel;
      image = this.props.imageList[index];
      something[0] = { uri: image.imageDetails.url };
    }
    for (let i = 1; i < 4; i++) {
      randomIndex = Math.floor(Math.random() * this.props.randomImage.length);
      something[i] = { uri: this.props.randomImage[randomIndex].url };
    }
    this.setState({
      currentImage: image,
      input: something,
      currentFolder: this.props.folder
    });
  }

  updateCorrectScore() {
    ++image.imageDetails.correctTaps;
    ++image.imageDetails.score;
    this.props.dispatch({
      type: "UPDATE_IMAGE_SCORE",
      payload: { index: index, image: image }
    });

    let something = this.state.input.slice();
    if (this.props.settings.random) {
      index = Math.floor(Math.random() * this.props.imageList.length);
      image = this.props.imageList[index];
      something[0] = { uri: image.imageDetails.url };
    } else {
      ++index;
      if (index >= this.props.imageList.length) {
        index = 0;
      }
      image = this.props.imageList[index];
      something[0] = { uri: image.imageDetails.url };
    }
    for (let i = 1; i < 4; i++) {
      randomIndex = Math.floor(Math.random() * this.props.randomImage.length);
      something[i] = { uri: this.props.randomImage[randomIndex].url };
    }
    this.setState({ currentImage: image, input: something });
  }

  updateWrongScore() {
    ++image.imageDetails.wrongTaps;
    if (image.imageDetails.score > 0) {
      --image.imageDetails.score;
    }

    this.props.dispatch({
      type: "UPDATE_IMAGE_SCORE",
      payload: { index: index, image: image }
    });

    let something = this.state.input.slice();
    if (this.props.settings.random) {
      index = Math.floor(Math.random() * this.props.imageList.length);
      image = this.props.imageList[index];
      something[0] = { uri: image.imageDetails.url };
    } else {
      ++index;
      if (index >= this.props.imageList.length) {
        index = 0;
      }
      image = this.props.imageList[index];
      something[0] = { uri: image.imageDetails.url };
    }
    for (let i = 1; i < 4; i++) {
      randomIndex = Math.floor(Math.random() * this.props.randomImage.length);
      something[i] = { uri: this.props.randomImage[randomIndex].url };
    }
    this.setState({ currentImage: image, input: something });
  }

  updateFolderScore() {
    this.props.dispatch({
      type: "UPDATE_FOLDER_SCORE",
      payload: {
        imageList: this.props.imageList,
        folder: this.props.folder,
        child: this.props.child
      }
    });
  }

  componentDidUpdate() {
    if (this.props.gameOver && this.state.gameFinished) {
      this.setModalVisible(true);
      this.setState({ gameFinished: false });
    }
  }

  playNext() {
    this.setModalVisible(false);
    this.props.dispatch({
      type: "SET_CHILD_FOLDER",
      payload: this.props.child.childID
    });
    setTimeout(() => {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({
              params: { showModal: false },
              routeName: "IntroScreen"
            }),
            NavigationActions.navigate({ routeName: "GameScreen" })
          ]
        })
      );
    }, 2000);
  }

  playAgain() {
    this.props.dispatch({
      type: "SET_PLAY_AGAIN",
      payload: {
        childID: this.props.child.childID,
        exeID: this.state.currentFolder.folderID
      }
    });
    setTimeout(() => {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({
              params: { showModal: false },
              routeName: "IntroScreen"
            }),
            NavigationActions.navigate({ routeName: "GameScreen" })
          ]
        })
      );
    }, 2000);
  }

  render() {
    return (
      <Home
        back={() => {
          this.props.navigation.goBack();
        }}
        totalPoints={this.props.child.childDetails.totalScore}
        timeLeft={time}
        timeLeftDenomination={"Min"}
        image1={this.state.input[this.state.i1]}
        image2={this.state.input[this.state.i2]}
        image3={this.state.input[this.state.i3]}
        image4={this.state.input[this.state.i4]}
        hasToReset={this.state.reset}
        crossImage={require("../../../assets/cross.png")}
        tickImage={require("../../../assets/tick.png")}
        correctOption={this.state.correctOption}
        isLast={this.state.isLast}
        timeExpiredImageShuffle={() => {
          this.options = [0, 1, 2, 3];
          if (!this.state.gameOver) {
            if (this.state.currentLevel + 1 <= totalLevels) {
              setTimeout(() => {
                this.setState({
                  i1: this.randomAssign(),
                  i2: this.randomAssign(),
                  i3: this.randomAssign(),
                  i4: this.randomAssign(),
                  currentLevel: this.state.currentLevel + 1
                });
                let x = this.correctOptionDecision(
                  this.state.i1,
                  this.state.i2,
                  this.state.i3
                );
                this.setState({ correctOption: x });
                this.updateWrongScore();
              }, 500);
            } else {
              this.setState({ isLast: true });
              this.updateFolderScore();
              this.setState({ gameFinished: true, gameOver: true });
            }
          }
        }}
        pressed={(item => {
          this.options = [0, 1, 2, 3];
          if (this.state.currentLevel + 1 <= totalLevels)
            setTimeout(() => {
              this.setState({
                i1: this.randomAssign(),
                i2: this.randomAssign(),
                i3: this.randomAssign(),
                i4: this.randomAssign(),
                currentLevel: this.state.currentLevel + 1,
                reset: true
              });
              let x = this.correctOptionDecision(
                this.state.i1,
                this.state.i2,
                this.state.i3
              );
              if (item == this.state.correctOption) {
                if (this.props.settings.sound) {
                  correctAnswer.stop();
                  correctAnswer.play();
                }
                this.updateCorrectScore();
              } else {
                if (this.props.settings.sound) {
                  wrongAnswer.stop();
                  wrongAnswer.play();
                }
                this.updateWrongScore();
              }
              this.setState({ correctOption: x, reset: false });
            }, 500);
          else if (!this.state.gameOver) {
            this.setState({ isLast: true });
            this.updateFolderScore();
            this.setState({ gameFinished: true, gameOver: true });
          }
        }).bind(this)}
        leftImages={this.state.currentLevel}
        totalImages={totalLevels}
        question={"Tap on The " + this.props.folder.folderDetails.exerciseName}
      >
        <ModalCommon
          isVisible={this.state.modalVisible}
          extraModalStyle={{
            paddingTop: "20%",
            paddingBottom: "30%"
          }}
          extraModalViewStyle={{ backgroundColor: "#0067a0" }}
          content={
            <ModalContent
              greetingLine1={this.props.folder.folderDetails.exerciseName}
              line2needed={true}
              greetingLine2="Level Completed"
              stars={
                this.props.gameOver
                  ? calculate(
                      this.props.child.childDetails.correctTaps,
                      this.props.child.childDetails.wrongTaps
                    )
                  : require("../../../assets/zero-star.png")
              }
              playLaterRequired={true}
              displayPoints={this.props.child.childDetails.totalScore}
              description="Well played"
              extraDescriptionStyle={{ fontSize: 14 }}
              starExtraStyle={{ width: 200, height: 60 }}
              playLaterText="Play Later"
              nextLevelName={
                this.props.nextFolder.folderDetails
                  ? this.props.nextFolder.folderDetails.exerciseName
                  : ""
              }
              playNextDisabled={!this.props.nextFolder.folderDetails}
              isButtonNeeded={true}
              playNext={() => {
                gameMusic.release();
                correctAnswer.release();
                wrongAnswer.release();
                this.playNext();
              }}
              playAgain={() => {
                gameMusic.release();
                correctAnswer.release();
                wrongAnswer.release();
                this.playAgain();
              }}
              toggleVisiblity={() => {
                this.setModalVisible(false);
                this.props.navigation.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({
                        params: { showModal: false },
                        routeName: "IntroScreen"
                      })
                    ]
                  })
                );
              }}
            />
          }
        />
      </Home>
    );
  }
}

const mapStateToProps = store => {
  return {
    child: store.user.child,
    folder: store.folder,
    imageList: store.currentImageList,
    nextFolder: store.nextFolder,
    randomImage: store.randomImage,
    settings: store.user.parent.settings,
    gameOver: store.loaded.gameOver
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
