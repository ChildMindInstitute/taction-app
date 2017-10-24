import React from "react";
import { ListItem, View, CheckBox } from "native-base";
import { Image } from "react-native";
class ListItemCustom extends React.Component {
  static navigationOptions = {
    title: "ListItemCustom",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  componentWillUpdate() {
    if (this.props.CheckBoxReset) {
      this.setState({ checked: false });
      this.props.DoneResetting();
    }
  }
  render() {
    return (
      <ListItem
        onPress={checked => {
          this.setState({ checked: !this.state.checked });
          this.props.itemPress(
            checked,
            this.props.data.indexOf(this.props.item)
          );
        }}
        style={{ width: 100, height: 100 }}
      >
        <View>
          <Image
            source={{ uri: this.props.item.path }}
            style={{ width: 100, height: 100 }}
            resizeMethod="auto"
            resizeMode="contain"
          />
        </View>
        <View style={{ position: "absolute", top: 0, left: 0 }}>
          <CheckBox
            checked={this.state.checked}
            style={{ borderColor: "transparent" }}
          />
        </View>
        <View
          style={{
            opacity: this.state.checked ? 0.3 : 0,
            backgroundColor: "#000",
            width: 100,
            height: 100,
            position: "absolute"
          }}
        />
      </ListItem>
    );
  }
}
export default ListItemCustom;
