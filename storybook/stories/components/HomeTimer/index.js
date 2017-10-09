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
      timer: this.props.TimeLeft,
      timeUp: false,
      interval: null
    };
    this.future = new Date().getTime() + this.props.TimeLeft;
  }
  returnMinSec(distance) {
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return (
      (minutes ? minutes + ":" : "") +
      (seconds < 10 && seconds != 0
        ? "0" + seconds
        : seconds >= 10 ? seconds : "00")
    );
  }
  componentWillMount() {
    let x = setInterval(() => {
      let now = new Date().getTime();
      if (this.future - now >= 0) {
        this.setState({ timer: this.future - now });
      } else {
        this.setState({ timer: "Expired" });
        clearInterval(x);
      }
    }, 1000);
    this.setState({ interval: x });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <View style={this.props.ViewStyle}>
        <View style={styles.OuterCircle}>
          <View style={styles.InnerCircle}>
            <Text style={styles.TimeTextStyle}>
              {this.state.timer != "Expired"
                ? this.returnMinSec(this.state.timer)
                : "Over"}
            </Text>
            {this.state.timer != "Expired" ? (
              <View />
            ) : (
              this.props.FinishedFunc()
            )}
            <Text note>
              {this.state.timer > 60000
                ? "Min"
                : this.state.timer != "Expired" ? "Sec" : ""}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default HomeTimer;
