import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import ListContent from "./ListContent";
const AddPrizes = props => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={props.data}
      renderItem={({ item }) => (
        <ListContent
          item={item}
          editPress={() => props.editPress(item)}
          deletePress={() => props.deletePress(item)}
        />
      )}
    />
  );
};

AddPrizes.propTypes = {
  listStyle: PropTypes.object,
  data: PropTypes.array,
  listItemPress: PropTypes.func
};
AddPrizes.defaultProps = {
  listItemPress: () => {}
};
export { AddPrizes as default };
