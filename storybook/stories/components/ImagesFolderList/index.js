import React from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import ListContent from "./ListContent";
import { cloneDeep } from "lodash";
const ImagesFolderList = props => {
  return (
    <List
      style={props.listStyle}
      dataArray={cloneDeep(props.listData)}
      renderRow={item => (
        <ListContent
          listItem={item}
          switchToggled={() => props.switchToggled(item)}
          checkBoxChange={() => props.checkBoxChange(item)}
          key={item}
        />
      )}
    />
  );
};

ImagesFolderList.propTypes = {
  listData: PropTypes.array,
  switchToggled: PropTypes.func,
  listStyle: PropTypes.object,
  checkBoxChange: PropTypes.func,
  operationPerformed: PropTypes.bool,
  operationPerformedReset: PropTypes.func
};

export { ImagesFolderList as default };
