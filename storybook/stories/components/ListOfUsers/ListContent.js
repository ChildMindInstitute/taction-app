import React from "react";
import { ListItem, Text, Right, Body, CheckBox } from "native-base";

class ListContent extends React.Component {
  static navigationOptions = {
    title: "ListContent",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ListItem
        noBorder
        button
        onPress={() => {
          this.props.listItemPress(this.props.item);
        }}
        style={{
          backgroundColor: "white",
          marginLeft: 0,
          marginBottom: "5%"
        }}
      >
        <Body>
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#0067a0" }}>
            {this.props.item.name}
          </Text>
        </Body>
      </ListItem>
    );
  }
}
export default ListContent;
