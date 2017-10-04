import React from "react";
import { View } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
class AfterTouchResult extends React.Component {
  render() {
    return (
      <View style={styles.AfterTouchStyle}>
        <Image
          style={styles.AfterTouchResultStyle}
          source={
            this.props.CorrectOption == this.props.CurrentOption ? (
              this.props.TickImage
            ) : (
              this.props.CrossImage
            )
          }
        />
      </View>
    );
  }
}
export default AfterTouchResult;
