import React from "react";
import { View } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import AfterTouchResult from "./AfterTouchResult";
class PlayableImage extends React.Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.Disabled}
        onPress={this.props.OnPress}
      >
        <Image
          style={styles.ImageStyle}
          resizeMethod="auto"
          resizeMode="contain"
          source={this.props.Image}
        />
        {this.props.Result ? (
          <AfterTouchResult
            CorrectOption={this.props.CorrectOption}
            CurrentOption={this.props.CurrentOption}
            TickImage={this.props.TickImage}
            CrossImage={this.props.CrossImage}
          />
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  }
}
export default PlayableImage;
