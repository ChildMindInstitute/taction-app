import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
export default class GridItem extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, height: 80 }}>
        <Image
          source={this.props.data.image}
          style={styles.listItemInnerViewGridItemImageStyle}
          resizeMethod="auto"
          resizeMode="stretch"
        />
      </View>
    );
  }
}
