import React from "react";
import { View } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import AfterTouchResult from "./AfterTouchResult";
class PlayableImage extends React.Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.onPress}
      >
        <Image
          style={styles.imageStyle}
          resizeMethod="auto"
          resizeMode="contain"
          source={this.props.image}
        />
        {this.props.result ? (
          <AfterTouchResult
            correctOption={this.props.correctOption}
            currentOption={this.props.currentOption}
            tickImage={this.props.tickImage}
            crossImage={this.props.crossImage}
          />
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  }
}
export default PlayableImage;
