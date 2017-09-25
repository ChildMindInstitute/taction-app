import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  Text,
  Right,
  Body,
  Separator,
  Icon
} from "native-base";
const SettingsList = props => (
  <List style={props.ListStyle}>
    <Separator bordered>
      <Text>Profile</Text>
    </Separator>
    <ListItem icon button onPress={props.NamePress}>
      <Body>
        <Text>Name</Text>
      </Body>
      <Right>
        <Text>{props.Name}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.AgePress}>
      <Body>
        <Text>Age</Text>
      </Body>
      <Right>
        <Text>{props.Age}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem button icon onPress={props.PasswordPress}>
      <Body>
        <Text>Password</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <Separator bordered>
      <Text>Game Settings</Text>
    </Separator>
    <ListItem icon button onPress={props.PressNoOfImagesPerSession}>
      <Body>
        <Text>No Of Images Per Session</Text>
      </Body>
      <Right>
        <Text>{props.NoOfImagesPerSession}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.PressTimerOfNext}>
      <Body>
        <Text>Timer Of Next</Text>
      </Body>
      <Right>
        <Text>{props.TimerOfNext}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.PressMinimumDurationOfTouch}>
      <Body>
        <Text>Minimum Duration Of Touch</Text>
      </Body>
      <Right>
        <Text>{props.MinimumDurationOfTouch}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  </List>
);

SettingsList.propTypes = {
  MinimumDurationOfTouch: PropTypes.string,
  TimerOfNext: PropTypes.string,
  NoOfImagesPerSession: PropTypes.number,
  PressMinimumDurationOfTouch: PropTypes.func,
  PressTimerOfNext: PropTypes.func,
  PressNoOfImagesPerSession: PropTypes.func,
  NamePress: PropTypes.func,
  PasswordPress: PropTypes.func,
  AgePress: PropTypes.func,
  Name: PropTypes.string,
  Age: PropTypes.number
};

export { SettingsList as default };
