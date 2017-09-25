import React from "react";
import PropTypes from "prop-types";
import { Header, Left, Right, Body, Icon, Button, Text } from "native-base";
const CustomHeader = props => (
  <Header style={props.headerStyle}>
    <Left>
      <Button transparent onPress={props.leftPress}>
        <Icon name={props.leftIconName} style={props.leftIconStyle} />
      </Button>
    </Left>
    <Body>{props.children}</Body>
    <Right>{props.isRightRequired ? props.children : <Text />}</Right>
  </Header>
);

CustomHeader.propTypes = {
  children: PropTypes.node.isRequired,
  rightIconName: PropTypes.string,
  rightIconStyle: PropTypes.object,
  rightButtonPress: PropTypes.func,
  isRightRequired: PropTypes.bool,
  leftIconName: PropTypes.string,
  leftIconStyle: PropTypes.object,
  leftPress: PropTypes.func,
  headerStyle: PropTypes.object
};
CustomHeader.defaultProps = {
  rightButtonPress: () => {},
  menuPress: () => {}
};

export { CustomHeader as default };
