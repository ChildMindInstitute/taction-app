import React from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import ListContent from "./ListContent";
const ListOfChildren = props => (
  <List
    style={props.ListStyle}
    dataArray={props.Data}
    renderRow={item => (
      <ListContent
        item={item}
        ListItemPress={props.ListItemPress}
        index={props.Data.indexOf(item)}
      />
    )}
  />
);

ListOfChildren.propTypes = {
  ListStyle: PropTypes.object,
  Data: PropTypes.array,
  ListItemPress: PropTypes.func
};
ListOfChildren.defaultProps = {
  ListItemPress: () => {},
  CheckBoxPress: () => {}
};
export { ListOfChildren as default };
