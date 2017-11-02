import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

class SwitchUserTemp extends React.Component {
  componentWillMount() {
    this.props.parentNavProps.screenProps.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "LoginAs"
          })
        ]
      })
    );
  }
  render() {
    return (
      <View>
        <Text>This is SwitchUserTemp.js</Text>
      </View>
    );
  }
}

export default SwitchUserTemp;
