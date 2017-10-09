import React from "react";
import Home from "../../../../storybook/stories/screens/Home";
import ModalCommon from "../../../../storybook/stories/components/Modal/modal";
import ModalContent from "../../../../storybook/stories/components/Modal/ModalContent";
import {connect} from 'react-redux';

const input = [
  require("../../../assets/ball1.jpg"),
  require("../../../assets/spiderman.jpg"),
  require("../../../assets/minion.jpg"),
  require("../../../assets/ball2.jpg")
];
let totalLevels = 10;
const correctArrayItem = 1;
const time = 180000;
class GameScreen extends React.Component {
  static navigationOptions = {
    title: "GameScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.options = [0, 1, 2, 3];
    this.state = {
      i1: this.randomAssign(),
      i2: this.randomAssign(),
      i3: this.randomAssign(),
      i4: this.randomAssign(),
      correctOption: 0,
      currentLevel: 1,
      reset: false,
      modalVisible: false,
      currentImage: {}
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

  componentWillMount(){
    totalLevels= this.props.settings.imagesPerSession
  }

  render() {
    return (
      <Home
        Back={() => {
          this.props.navigation.goBack();
        }}
        TotalPoints={this.props.child.childDetails.totalScore}
        TimeLeft={time}
        TimeLeftDenomination={"Min"}
        Image1={input[this.state.i1]}
        Image2={input[this.state.i2]}
        Image3={input[this.state.i3]}
        Image4={input[this.state.i4]}
        HasToReset={this.state.reset}
        CrossImage={require("../../../assets/Cross.png")}
        TickImage={require("../../../assets/Tick.png")}
        CorrectOption={this.state.correctOption}
        Pressed={item => {
          //console.log(item);
          //count Points logic
          this.options = [0, 1, 2, 3];
          if (this.state.currentLevel < totalLevels)
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
              this.setState({ correctOption: x });
              this.setState({ reset: false });
            }, 500);
          else setTimeout(() => this.setModalVisible(true), 2000);
        }}
        FinishedFunc={() => {
          setTimeout(() => this.setModalVisible(true), 1000);
        }}
        LeftImages={this.state.currentLevel}
        TotalImages={totalLevels}
        Question="Tap on The Spider"
      >
        <ModalCommon
          isVisible={this.state.modalVisible}
          Content={
            <ModalContent
              GreetingLine1="Spider"
              Line2needed={true}
              GreetingLine2="Level Completed"
              Stars={require("../../../../js/assets/all_stars.png")}
              DisplayPoints={120}
              Description="Time: 02.14 Min"
              IsButtonNeeded={true}
              PlayNext={() => {
                alert("PlayNext Pressed");
              }}
              PlayAgain={() => {
                alert("PlayAgain Pressed");
              }}
            />
          }
          toggleVisiblity={() => {
            this.setModalVisible(false);
            this.props.navigation.goBack();
          }}
        />
      </Home>
    );
  }
}

const mapStateToProps = (store)=>{
  return{
    child: store.user.child,
    folder: store.folder,
    imageList: store.currentImageList,
    // nextFolder
    settings: store.user.parent.settings
  }  
}

const mapDispatchToProps = (dispatch)=>{
  return {dispatch}
}
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
