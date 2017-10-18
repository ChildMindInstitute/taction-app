import React from "react";
import { ListItem, Text, Right, Body, CheckBox } from "native-base";

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
        <Right>
          <CheckBox
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
            color="#0067a0"
          />
        </Right>
      </ListItem>
    );
  }
}
export default ListContent;
