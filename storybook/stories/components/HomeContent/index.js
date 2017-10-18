import React from "react";
import { Grid, Row, Col, View } from "native-base";
import PlayableImage from "./PlayableImage";
import styles from "./styles";
class HomeContent extends React.Component {
  static navigationOptions = {
    title: "HomeContent",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      isFirstTouched: false,
      isSecondTouched: false,
      isThirdTouched: false,
      isFourthTouched: false,
      isFirstDisabled: false,
      isSecondDisabled: false,
      isThirdDisabled: false,
      isFourthDisabled: false,
      continueReseting: true
    };
  }
  reset() {
    this.setState({
      isFirstTouched: false,
      isSecondTouched: false,
      isThirdTouched: false,
      isFourthTouched: false,
      isFirstDisabled: false,
      isSecondDisabled: false,
      isThirdDisabled: false,
      isFourthDisabled: false,
      continueReseting: false
    });
  }
  disableAll() {
    this.setState({
      isFirstDisabled: true,
      isSecondDisabled: true,
      isThirdDisabled: true,
      isFourthDisabled: true
    });
  }

  componentDidUpdate() {
    if (
      (this.props.hasToReset && this.state.continueReseting) ||
      this.props.isTimeExpired
    ) {
      this.reset();
      this.props.timeExpiredCounterSwitch();
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Grid style={styles.gridView}>
          <Row style={styles.gridRowColItem}>
            <Col style={styles.gridRowColItem}>
              <PlayableImage
                Disabled={this.state.isFirstDisabled}
                OnPress={() => {
                  this.setState({
                    isFirstTouched: true,
                    isFirstDisabled: true,
                    isSecondDisabled: true,
                    isThirdDisabled: true,
                    isFourthDisabled: true,
                    continueReseting: true
                  });
                  this.props.pressed(1);
                }}
                Image={this.props.image1}
                Result={this.state.isFirstTouched}
                CorrectOption={this.props.correctOption}
                CurrentOption={1}
                TickImage={this.props.tickImage}
                CrossImage={this.props.crossImage}
              />
            </Col>
            <Col style={styles.gridRowColItem}>
              <PlayableImage
                Disabled={this.state.gsSecondDisabled}
                OnPress={() => {
                  this.setState({
                    isSecondTouched: true,
                    isFirstDisabled: true,
                    isSecondDisabled: true,
                    isThirdDisabled: true,
                    isFourthDisabled: true,
                    continueReseting: true
                  });
                  this.props.pressed(2);
                }}
                Image={this.props.image2}
                Result={this.state.isSecondTouched}
                CorrectOption={this.props.correctOption}
                CurrentOption={2}
                TickImage={this.props.tickImage}
                CrossImage={this.props.crossImage}
              />
            </Col>
          </Row>
          <Row style={styles.gridRowColItem}>
            <Col style={styles.gridRowColItem}>
              <PlayableImage
                Disabled={this.state.isThirdDisabled}
                OnPress={() => {
                  this.setState({
                    isThirdTouched: true,
                    isFirstDisabled: true,
                    isSecondDisabled: true,
                    isThirdDisabled: true,
                    isFourthDisabled: true,
                    continueReseting: true
                  });
                  this.props.pressed(3);
                }}
                Image={this.props.image3}
                Result={this.state.isThirdTouched}
                CorrectOption={this.props.correctOption}
                CurrentOption={3}
                TickImage={this.props.tickImage}
                CrossImage={this.props.crossImage}
              />
            </Col>
            <Col style={styles.gridRowColItem}>
              <PlayableImage
                Disabled={this.state.isFourthDisabled}
                OnPress={() => {
                  this.setState({
                    isFourthTouched: true,
                    isFirstDisabled: true,
                    isSecondDisabled: true,
                    isThirdDisabled: true,
                    isFourthDisabled: true,
                    continueReseting: true
                  });
                  this.props.pressed(4);
                }}
                Image={this.props.image4}
                Result={this.state.isFourthTouched}
                CorrectOption={this.props.correctOption}
                CurrentOption={4}
                TickImage={this.props.tickImage}
                CrossImage={this.props.crossImage}
              />
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}
export default HomeContent;
