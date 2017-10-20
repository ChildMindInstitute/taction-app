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
                disabled={this.state.isFirstDisabled}
                onPress={() => {
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
                image={this.props.image1}
                result={this.state.isFirstTouched}
                correctOption={this.props.correctOption}
                currentOption={1}
                tickImage={this.props.tickImage}
                crossImage={this.props.crossImage}
              />
            </Col>
            <Col style={styles.gridRowColItem}>
              <PlayableImage
                disabled={this.state.isSecondDisabled}
                onPress={() => {
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
                image={this.props.image2}
                result={this.state.isSecondTouched}
                correctOption={this.props.correctOption}
                currentOption={2}
                tickImage={this.props.tickImage}
                crossImage={this.props.crossImage}
              />
            </Col>
          </Row>
          <Row style={styles.gridRowColItem}>
            <Col style={styles.gridRowColItem}>
              <PlayableImage
                disabled={this.state.isThirdDisabled}
                onPress={() => {
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
                image={this.props.image3}
                result={this.state.isThirdTouched}
                correctOption={this.props.correctOption}
                currentOption={3}
                tickImage={this.props.tickImage}
                crossImage={this.props.crossImage}
              />
            </Col>
            <Col style={styles.gridRowColItem}>
              <PlayableImage
                disabled={this.state.isFourthDisabled}
                onPress={() => {
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
                image={this.props.image4}
                result={this.state.isFourthTouched}
                correctOption={this.props.correctOption}
                currentOption={4}
                tickImage={this.props.tickImage}
                crossImage={this.props.crossImage}
              />
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}
export default HomeContent;
