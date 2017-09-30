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
        style={{ backgroundColor: "white", margin: "2%", marginRight: "5%" }}
      >
        <Body>
          <Text>{this.props.item.Name}</Text>
        </Body>
        <Right>
          <CheckBox
            button
            checked={this.state.checked}
            onPress={checked => {
              this.setState({ checked: !this.state.checked });
              this.props.CheckBoxPress(this.props.item, checked);
            }}
          />
        </Right>
      </ListItem>
    );
  }
}
export default ListContent;
