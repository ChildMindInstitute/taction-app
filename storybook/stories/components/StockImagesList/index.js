import React from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import ListContent from "./ListContent";
const StockImagesList = props => (
  <List
    style={props.listStyle}
    dataArray={props.listData}
    renderRow={item => (
      <ListContent listItem={item} onDownloadPress={props.onDownloadPress} />
    )}
  />
);

StockImagesList.propTypes = {
  listData: PropTypes.array,
  onDownloadPress: PropTypes.func,
  listStyle: PropTypes.object
};

export { StockImagesList as default };
