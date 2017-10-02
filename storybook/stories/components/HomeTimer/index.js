import React from "react";
import { View, Text } from "native-base";
import styles from "./styles";
class HomeTimer extends React.Component {
  static navigationOptions = {
    title: "HomeTimer",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      timer: 1
    };
    this.future = new Date().getTime() + this.props.TimeLeft;
  }
  returnMinSec(distance) {
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return minutes + ":" + seconds;
  }
  render() {
    let x = setInterval(() => {
      let now = new Date().getTime();
      if (this.state.timer > 0) {
        this.setState({ timer: this.future - now });
      } else {
        clearInterval(x);
        this.setState({ timer: "Expired" });
      }
    }, 1000);
    return (
      <View style={this.props.ViewStyle}>
        <View style={styles.OuterCircle}>
          <View style={styles.InnerCircle}>
            <Text style={styles.TimeTextStyle}>
              {this.state.timer != "Expired" ? (
                this.returnMinSec(this.state.timer)
              ) : (
                this.state.timer
              )}
            </Text>
            <Text note>{this.props.TimeLeftDenomination}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default HomeTimer;
