import React from "react";
import PropTypes from "prop-types";
import { List } from "native-base";
import ListContent from "./ListContent";
const DashboardList = props => (
  <List
    dataArray={props.listData}
    renderRow={item => <ListContent listData={item} />}
  />
);

DashboardList.propTypes = {
  listData: PropTypes.array
};

export { DashboardList as default };
