import React from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import ListContent from "./ListContent";
const ImagesFolderList = props => (
  <List
    style={props.listStyle}
    dataArray={props.listData}
    renderRow={item => (
      <ListContent
        listItem={item}
        switchToggled={props.switchToggled}
        checkBoxChange={props.checkBoxChange}
        operationPerformed={props.operationPerformed}
        operationPerformedReset={props.operationPerformedReset}
      />
    )}
  />
);

ImagesFolderList.propTypes = {
  listData: PropTypes.array,
  switchToggled: PropTypes.func,
  listStyle: PropTypes.object,
  checkBoxChange: PropTypes.func,
  operationPerformed: PropTypes.bool,
  operationPerformedReset: PropTypes.func
};

export { ImagesFolderList as default };
