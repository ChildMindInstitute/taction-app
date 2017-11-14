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
const margin = { marginLeft: 16 };
const dividerFontSize = { fontSize: 15 };
const SettingsList = props => (
  <List style={props.listStyle}>
    <Separator bordered>
      <Text style={[margin, dividerFontSize]}>PROFILE</Text>
    </Separator>
    <ListItem icon button onPress={props.namePress}>
      <Body>
        <Text style={margin}>Name</Text>
      </Body>
      <Right>
        <Text>{props.name}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    {props.childExists ? (
      <View>
        <ListItem icon button onPress={props.nameChildPress}>
          <Body>
            <Text style={margin}>Name of child</Text>
          </Body>
          <Right>
            <Text>{props.nameChild}</Text>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon button onPress={props.agePress}>
          <Body>
            <Text style={margin}>{"Age of " + props.nameChild}</Text>
          </Body>
          <Right>
            <Text>{props.age}</Text>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </View>
    ) : (
      <View />
    )}
    <ListItem button icon onPress={props.passwordPress}>
      <Body>
        <Text style={margin}>Password</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>

    <Separator bordered>
      <Text style={[margin, dividerFontSize]}>GAME</Text>
    </Separator>
    <ListItem icon button onPress={props.pressNoOfImagesPerSession}>
      <Body>
        <Text style={margin}>Images per session</Text>
      </Body>
      <Right>
        <Text>{props.noOfImagesPerSession}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem icon>
      <Body>
        <Text style={margin}>Random image order</Text>
      </Body>
      <Right>
        <Switch
          onValueChange={value => {
            props.randomSlider(value);
          }}
          onTintColor="#eeae30"
          value={props.randomSliderValue}
          thumbTintColor="#eee"
        />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.pressMaximumImageDuration}>
      <Body>
        <Text style={margin}>Maximum image duration</Text>
      </Body>
      <Right>
        <Text>{props.maximumImageDuration}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <Separator bordered>
      <Text style={[margin, dividerFontSize]}>GENERAL</Text>
    </Separator>
    <ListItem icon>
      <Body>
        <Text style={margin}>Sound</Text>
      </Body>
      <Right>
        <Switch
          onValueChange={value => {
            props.soundSlider(value);
          }}
          onTintColor="#eeae30"
          value={props.soundSliderValue}
          thumbTintColor="#eee"
        />
      </Right>
    </ListItem>
    <ListItem icon button onPress={props.pressAddPrizes}>
      <Body>
        <Text style={margin}>Add prizes</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  </List>
);

SettingsList.propTypes = {
  childExists: PropTypes.bool,
  nameChild: PropTypes.string,
  nameChildPress: PropTypes.func,
  maximumImageDuration: PropTypes.string,
  timerOfNext: PropTypes.string,
  noOfImagesPerSession: PropTypes.number,
  pressMaximumImageDuration: PropTypes.func,
  randomSlider: PropTypes.func,
  soundSliderValue: PropTypes.bool,
  soundSlider: PropTypes.func,
  randomSliderValue: PropTypes.bool,
  pressNoOfImagesPerSession: PropTypes.func,
  pressAddPrizes: PropTypes.func,
  namePress: PropTypes.func,
  passwordPress: PropTypes.func,
  agePress: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.string
};

export { SettingsList as default };
