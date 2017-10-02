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
      IsFirstTouched: false,
      IsSecondTouched: false,
      IsThirdTouched: false,
      IsFourthTouched: false,
      IsFirstDisabled: false,
      IsSecondDisabled: false,
      IsThirdDisabled: false,
      IsFourthDisabled: false,
      IsCorrect: false
    };
  }

  render() {
    return (
      <View style={styles.MainView}>
        <Grid style={styles.GridView}>
          <Row style={styles.GridRowColItem}>
            <Col style={styles.GridRowColItem}>
              <PlayableImage
                Disabled={this.state.IsFirstDisabled}
                OnPress={() => {
                  this.setState({
                    IsFirstTouched: true,
                    IsFirstDisabled: true,
                    IsSecondDisabled: true,
                    IsThirdDisabled: true,
                    IsFourthDisabled: true
                  });
                  this.props.Pressed(1);
                }}
                Image={this.props.Image1}
                Result={this.state.IsFirstTouched}
                CorrectOption={this.props.CorrectOption}
                CurrentOption={1}
                TickImage={this.props.TickImage}
                CrossImage={this.props.CrossImage}
              />
            </Col>
            <Col style={styles.GridRowColItem}>
              <PlayableImage
                Disabled={this.state.IsSecondDisabled}
                OnPress={() => {
                  this.setState({
                    IsSecondTouched: true,
                    IsFirstDisabled: true,
                    IsSecondDisabled: true,
                    IsThirdDisabled: true,
                    IsFourthDisabled: true
                  });
                  this.props.Pressed(2);
                }}
                Image={this.props.Image2}
                Result={this.state.IsSecondTouched}
                CorrectOption={this.props.CorrectOption}
                CurrentOption={2}
                TickImage={this.props.TickImage}
                CrossImage={this.props.CrossImage}
              />
            </Col>
          </Row>
          <Row style={styles.GridRowColItem}>
            <Col style={styles.GridRowColItem}>
              <PlayableImage
                Disabled={this.state.IsThirdDisabled}
                OnPress={() => {
                  this.setState({
                    IsThirdTouched: true,
                    IsFirstDisabled: true,
                    IsSecondDisabled: true,
                    IsThirdDisabled: true,
                    IsFourthDisabled: true
                  });
                  this.props.Pressed(3);
                }}
                Image={this.props.Image3}
                Result={this.state.IsThirdTouched}
                CorrectOption={this.props.CorrectOption}
                CurrentOption={3}
                TickImage={this.props.TickImage}
                CrossImage={this.props.CrossImage}
              />
            </Col>
            <Col style={styles.GridRowColItem}>
              <PlayableImage
                Disabled={this.state.IsFourthDisabled}
                OnPress={() => {
                  this.setState({
                    IsFourthTouched: true,
                    IsFirstDisabled: true,
                    IsSecondDisabled: true,
                    IsThirdDisabled: true,
                    IsFourthDisabled: true
                  });
                  this.props.Pressed(4);
                }}
                Image={this.props.Image4}
                Result={this.state.IsFourthTouched}
                CorrectOption={this.props.CorrectOption}
                CurrentOption={4}
                TickImage={this.props.TickImage}
                CrossImage={this.props.CrossImage}
              />
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}
export default HomeContent;
