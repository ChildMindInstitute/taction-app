import React from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import ListContent from "./ListContent";
const ListOfChildren = props => (
  <List
    style={props.listStyle}
    dataArray={props.data}
    renderRow={item => (
      <ListContent
        item={item}
        listItemPress={props.listItemPress}
        index={props.data.indexOf(item)}
      />
    )}
  />
);

ListOfChildren.propTypes = {
  listStyle: PropTypes.object,
  data: PropTypes.array,
  listItemPress: PropTypes.func
};
ListOfChildren.defaultProps = {
  listItemPress: () => {}
};
export { ListOfChildren as default };
