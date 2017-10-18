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
      />
    )}
  />
);

ImagesFolderList.propTypes = {
  ListData: PropTypes.array,
  SwitchToggled: PropTypes.func,
  ListStyle: PropTypes.object,
  CheckBoxChange: PropTypes.func
};

export { ImagesFolderList as default };
