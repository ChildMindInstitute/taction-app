import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Text, Left, Right, Body, Icon } from "native-base";
const DashboardList = props => (
  <List
    style={props.ListStyle}
    dataArray={props.ListData}
    renderRow={item => (
      <ListItem icon onPress={props.ListItemPress}>
        <Left>
          <Icon name={props.IconName} style={{ color: "#0067a0" }} />
        </Left>
        <Body>
          <Text style={{ fontSize: 20, color: "#0067a0" }}>{item.Name}</Text>
        </Body>
        <Right>
          <Text style={{ fontSize: 20, color: "black" }}>{item.Points}</Text>
        </Right>
      </ListItem>
    )}
  />
);

DashboardList.propTypes = {
  ListData: PropTypes.array,
  IconName: PropTypes.string,
  ListStyle: PropTypes.object
};

export { DashboardList as default };
