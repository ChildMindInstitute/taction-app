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
  View,
  Switch
} from "native-base";
import styles from "./styles";
const SettingsList = props => (
  <List style={props.ListStyle}>
    <ListItem itemDivider>
      <Text note style={styles.Margin}>
        PROFILE
      </Text>
    </ListItem>
    <ListItem icon button onPress={props.NamePress}>
      <Body>
        <Text style={styles.Margin}>Name</Text>
      </Body>
      <Right>
        <Text>{props.Name}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    {props.ChildExists ? (
      <View>
        <ListItem icon button onPress={props.NameChildPress}>
          <Body>
            <Text style={styles.Margin}>Name of child</Text>
          </Body>
          <Right>
            <Text>{props.NameChild}</Text>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon button onPress={props.AgePress}>
          <Body>
            <Text style={styles.Margin}>{"Age of " + props.NameChild}</Text>
          </Body>
          <Right>
            <Text>{props.Age}</Text>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </View>
    ) : (
      <View />
    )}
    <ListItem button icon onPress={props.PasswordPress}>
      <Body>
        <Text style={styles.Margin}>Password</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem itemDivider bordered>
      <Text note style={styles.Margin}>
        GAME
      </Text>
    </ListItem>
    <ListItem icon button onPress={props.PressNoOfImagesPerSession}>
      <Body>
        <Text style={styles.Margin}>Images per session</Text>
      </Body>
      <Right>
        <Text>{props.NoOfImagesPerSession}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem icon>
      <Body>
        <Text style={styles.Margin}>Random image order</Text>
      </Body>
      <Right>
        <Switch
          onValueChange={value => {
            props.RandomSlider(value);
          }}
          onTintColor="#eeae30"
          value={props.RandomSliderValue}
        />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.PressMaximumImageDuration}>
      <Body>
        <Text style={styles.Margin}>Maximum image duration</Text>
      </Body>
      <Right>
        <Text>{props.MaximumImageDuration}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem itemDivider bordered>
      <Text note style={styles.Margin}>
        GENERAL
      </Text>
    </ListItem>
    <ListItem icon>
      <Body>
        <Text style={styles.Margin}>Sound</Text>
      </Body>
      <Right>
        <Switch
          onValueChange={value => {
            props.SoundSlider(value);
          }}
          onTintColor="#eeae30"
          value={props.SoundSliderValue}
        />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.PressAddPrizes}>
      <Body>
        <Text style={styles.Margin}>Add prizes</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  </List>
);

SettingsList.propTypes = {
  ChildExists: PropTypes.bool,
  NameChild: PropTypes.string,
  NameChildPress: PropTypes.func,
  MaximumImageDuration: PropTypes.string,
  TimerOfNext: PropTypes.string,
  NoOfImagesPerSession: PropTypes.number,
  PressMaximumImageDuration: PropTypes.func,
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
  Age: PropTypes.string
};

export { SettingsList as default };
