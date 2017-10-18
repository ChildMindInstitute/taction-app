import React from "react";
import { View } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
class AfterTouchResult extends React.Component {
  render() {
    return (
      <View style={styles.afterTouchStyle}>
        <Image
          style={styles.afterTouchResultStyle}
          source={
            this.props.correctOption == this.props.currentOption
              ? this.props.tickImage
              : this.props.crossImage
          }
        />
      </View>
    );
  }
}
export default AfterTouchResult;
