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
      checked1: true,
      checked2: false
    };
  }
  render() {
    return (
      <ListItem
        noBorder
        button
        onPress={() => {
          this.props.ListItemPress(this.props.item);
        }}
        style={{
          backgroundColor: "white",
          marginLeft: 0,
          marginBottom: "5%"
        }}
      >
        <Body>
          <Text>{this.props.item.Name}</Text>
        </Body>
        <Right>
          <CheckBox
            button
            checked={
              this.props.index == 0 ? this.state.checked1 : this.state.checked2
            }
            onPress={() =>
              this.props.index == 0
                ? this.setState({ checked1: !this.state.checked1 })
                : this.setState({ checked2: !this.state.checked2 })}
          />
        </Right>
      </ListItem>
    );
  }
}
export default ListContent;
