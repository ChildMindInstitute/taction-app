import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

class LogoutTemp extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: "USER_SIGN_OUT" });
    this.props.parentNavProps.screenProps.dispatch(
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
      <View>
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

const mapStateToProps = store => {
  return { user: store.user };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutTemp);
