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
            CorrectOption={this.props.correctOption}
            CurrentOption={this.props.currentOption}
            TickImage={this.props.tickImage}
            CrossImage={this.props.crossImage}
          />
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  }
}
export default PlayableImage;
