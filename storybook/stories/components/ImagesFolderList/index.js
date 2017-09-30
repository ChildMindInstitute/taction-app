import React from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import ListContent from "./ListContent";
const ImagesFolderList = props => (
  <List
    style={props.ListStyle}
    dataArray={props.ListData}
    renderRow={item => (
      <ListContent
        ListItem={item}
        SwitchToggled={props.SwitchToggled}
        CheckBoxChange={props.CheckBoxChange}
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
