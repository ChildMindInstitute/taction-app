import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  Text,
  Right,
  Body,
  Separator,
  Icon,
  Switch
} from "native-base";
import styles from "./styles";
const SettingsList = props => (
  <List style={props.ListStyle}>
    <Separator bordered>
      <Text style={styles.Margin}>Profile</Text>
    </Separator>
    <ListItem icon button onPress={props.NamePress}>
      <Body>
        <Text style={styles.Margin}>Name</Text>
      </Body>
      <Right>
        <Text>{props.Name}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.AgePress}>
      <Body>
        <Text style={styles.Margin}>Age</Text>
      </Body>
      <Right>
        <Text>{props.Age}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem button icon onPress={props.PasswordPress}>
      <Body>
        <Text style={styles.Margin}>Password</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <Separator bordered>
      <Text style={styles.Margin}>Game Settings</Text>
    </Separator>
    <ListItem icon button onPress={props.PressNoOfImagesPerSession}>
      <Body>
        <Text style={[styles.Margin, styles.FontSize]}>
          No Of Images Per Session
        </Text>
      </Body>
      <Right>
        <Text>{props.NoOfImagesPerSession}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem icon>
      <Body>
        <Text style={[styles.Margin, styles.FontSize]}>Random?</Text>
      </Body>
      <Right>
        <Switch
          onValueChange={value => {
            props.RandomSlider(value);
          }}
          value={props.RandomSliderValue}
        />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.PressMinimumDurationOfTouch}>
      <Body>
        <Text style={[styles.Margin, styles.FontSize]}>
          Min Duration Of Touch
        </Text>
      </Body>
      <Right>
        <Text>{props.MinimumDurationOfTouch}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <Separator bordered>
      <Text style={styles.Margin}>General</Text>
    </Separator>
    <ListItem icon>
      <Body>
        <Text style={[styles.Margin, styles.FontSize]}>Sound</Text>
      </Body>
      <Right>
        <Switch
          onValueChange={value => {
            props.SoundSlider(value);
          }}
          value={props.SoundSliderValue}
        />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.PressAddPrizes}>
      <Body>
        <Text style={[styles.Margin, styles.FontSize]}>Add Prizes</Text>
      </Body>
      <Right>
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
  RandomSlider: PropTypes.func,
  SoundSliderValue: PropTypes.bool,
  SoundSlider: PropTypes.func,
  RandomSliderValue: PropTypes.bool,
  PressNoOfImagesPerSession: PropTypes.func,
  PressAddPrizes: PropTypes.func,
  NamePress: PropTypes.func,
  PasswordPress: PropTypes.func,
  AgePress: PropTypes.func,
  Name: PropTypes.string,
  Age: PropTypes.number
};

export { SettingsList as default };
