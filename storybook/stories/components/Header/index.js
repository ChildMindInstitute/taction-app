import React from "react";
import PropTypes from "prop-types";
import { Header, Left, Right, Body, Icon, Button, Text } from "native-base";
import Logo from "../Logo";
import styles from "./styles";
const CustomHeader = props => (
  <Header style={props.headerStyle}>
    <Left style={styles.LeftStyle}>
      {props.IsLeftAButton ? (
        <Button transparent onPress={props.leftPress}>
          <Icon name={props.leftIconName} style={props.leftIconStyle} />
        </Button>
      ) : (
        <Logo imageDimensions={styles.LeftLogoStyle} />
      )}
    </Left>
    <Body style={styles.BodyStyle}>
      <Text style={[props.TitleStyle, styles.BodyTitleStyle]}>
        {props.Title}
      </Text>
    </Body>
    <Right style={styles.RightStyle}>
      {props.isRightRequired ? props.children : <Text />}
    </Right>
  </Header>
);

CustomHeader.propTypes = {
  IsLeftAButton: PropTypes.bool,
  rightIconName: PropTypes.string,
  rightIconStyle: PropTypes.object,
  rightButtonPress: PropTypes.func,
  isRightRequired: PropTypes.bool,
  leftIconName: PropTypes.string,
  leftIconStyle: PropTypes.number,
  leftPress: PropTypes.func,
  headerStyle: PropTypes.number,
  Title: PropTypes.string,
  TitleStyle: PropTypes.number
};
CustomHeader.defaultProps = {
  IsLeftAButton: true,
  rightButtonPress: () => {},
  menuPress: () => {}
};

export { CustomHeader as default };
