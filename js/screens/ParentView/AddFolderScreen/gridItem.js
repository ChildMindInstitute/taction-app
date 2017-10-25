import React from "react";
import styles from "./styles";
import { Image } from "react-native";
import { CheckBox, Button, View } from "native-base";
class GridItem extends React.Component {
  static navigationOptions = {
    title: "GridItem",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button
        transparent
        style={{
          flex: 1,
          height: 90,
          width: 45,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 10
        }}
        onPress={this.props.onPress}
      >
        <Image
          source={{ uri: this.props.data.image.path }}
          style={[
            styles.gridItemStyle,
            {
              opacity: this.props.data.checked ? 0.5 : 1
            }
          ]}
          resizeMethod="auto"
          resizeMode="stretch"
        />
        <View style={{ position: "absolute", bottom: 5, right: 10 }}>
          <CheckBox
            checked={this.props.data.checked}
            style={{ borderColor: "transparent" }}
          />
        </View>
      </Button>
    );
  }
}

export default GridItem;
