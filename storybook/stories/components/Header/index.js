import React from "react";
import PropTypes from "prop-types";
import { Header, Left, Right, Body, Icon, Button, Text } from "native-base";
const CustomHeader = props => (
  <Header style={props.headerStyle}>
    <Left style={{ flex: 1 }}>
      <Button transparent onPress={props.leftPress}>
        <Icon name={props.leftIconName} style={props.leftIconStyle} />
      </Button>
    </Left>
    <Body style={{ flex: 8 }}>
      <Text style={props.TitleStyle}>{props.Title}</Text>
    </Body>
    <Right style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
      {props.isRightRequired ? props.children : <Text />}
    </Right>
  </Header>
);

CustomHeader.propTypes = {
  RightStyle: PropTypes.object,
  rightIconName: PropTypes.string,
  rightIconStyle: PropTypes.object,
  rightButtonPress: PropTypes.func,
  isRightRequired: PropTypes.bool,
  leftIconName: PropTypes.string,
  leftIconStyle: PropTypes.object,
  leftPress: PropTypes.func,
  headerStyle: PropTypes.object,
  Title: PropTypes.string,
  TitleStyle: PropTypes.object
};
CustomHeader.defaultProps = {
  rightButtonPress: () => {},
  menuPress: () => {}
};

export { CustomHeader as default };
