import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";
import {connect} from 'react-redux';


@connect()
class LogoutTemp extends React.Component {
  componentWillMount() {

    this.props.ParentNavProps.screenProps.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Login"
          })
        ]
      })
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is LogoutTemp.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
module.exports = LogoutTemp;
