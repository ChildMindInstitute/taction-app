import React from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import ListContent from "./ListContent";
const DashboardList = props => (
  <List
    style={props.ListStyle}
    dataArray={props.ListData}
    renderRow={item => <ListContent ListData={item} />}
  />
);

DashboardList.propTypes = {
  ListData: PropTypes.array,
  IconName: PropTypes.string,
  ListStyle: PropTypes.object
};

export { DashboardList as default };
