import React from "react";
import { ListItem } from "native-base";
import { View, Image, Text } from "react-native";
class ListContent extends React.Component {
  static navigationOptions = {
    title: "ListContent",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  render() {
    return (
      <ListItem
        style={{
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc"
        }}
      >
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              paddingBottom: 10,
              paddingTop: 15,
              paddingLeft: 15
            }}
          >
            <Image
              source={require("../../../../js/assets/star-filled.png")}
              style={{ width: 25, height: 25 }}
              resizeMethod="auto"
              resizeMode="stretch"
            />
            <Text style={{ color: "#eeae30", fontSize: 20 }}>
              {this.props.item.points + " Points"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 5,
              paddingBottom: 15,
              paddingLeft: 15
            }}
          >
            <Text>{this.props.item.description}</Text>
          </View>
        </View>
      </ListItem>
    );
  }
}
export default ListContent;
