import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Text, Right, Body, CheckBox } from "native-base";
const ListOfChildren = props => (
  <List
    style={props.ListStyle}
    dataArray={props.Data}
    renderRow={item => (
      <ListItem
        noBorder
        style={{ backgroundColor: "white", margin: "2%", marginRight: "5%" }}
        onPress={() => props.ListItemPress(item)}
      >
        <Body>
          <Text>{item.Name}</Text>
        </Body>
        <Right>
          <CheckBox
            button
            checked={item.isChecked}
            onPress={() => props.CheckBoxPress(item)}
          />
        </Right>
      </ListItem>
    )}
  />
);

ListOfChildren.propTypes = {
  ListStyle: PropTypes.object,
  Data: PropTypes.array,
  ListItemPress: PropTypes.func,
  CheckBoxPress: PropTypes.func
};
ListOfChildren.defaultProps = {
  ListItemPress: () => {},
  CheckBoxPress: () => {}
};
export { ListOfChildren as default };
