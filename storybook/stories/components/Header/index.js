import React from "react";
import PropTypes from "prop-types";
import { Header, Left, Right, Body, Icon, Button, Text } from "native-base";
import Logo from "../Logo";
import styles from "./styles";
const CustomHeader = props => (
  <Header
    style={props.headerStyle}
    iosBarStyle="light-content"
    androidStatusBarColor="#00466b"
  >
    <Left style={styles.leftStyle}>
      {props.isLeftAButton ? (
        <Button transparent onPress={props.leftPress}>
          <Icon name={props.leftIconName} style={props.leftIconStyle} />
        </Button>
      ) : (
        <Logo imageDimensions={styles.leftLogoStyle} />
      )}
    </Left>
    <Body style={styles.bodyStyle}>
      <Text style={[props.titleStyle, styles.bodyTitleStyle]}>
        {props.title}
      </Text>
    </Body>
    <Right style={styles.rightStyle}>
      {props.isRightRequired ? props.children : <Text />}
    </Right>
  </Header>
);

CustomHeader.propTypes = {
  isLeftAButton: PropTypes.bool,
  rightIconName: PropTypes.string,
  rightIconStyle: PropTypes.object,
  rightButtonPress: PropTypes.func,
  isRightRequired: PropTypes.bool,
  leftIconName: PropTypes.string,
  leftIconStyle: PropTypes.number,
  leftPress: PropTypes.func,
  headerStyle: PropTypes.number,
  title: PropTypes.string,
  titleStyle: PropTypes.number
};
CustomHeader.defaultProps = {
  isLeftAButton: true,
  rightButtonPress: () => {},
  menuPress: () => {}
};

export { CustomHeader as default };
