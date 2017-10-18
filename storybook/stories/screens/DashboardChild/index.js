import React from "react";
import PropTypes from "prop-types";
import DashboardGreetings from "../../components/DashboardGreetings";
import DashboardChildList from "../../components/DashboardChildList";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import styles from "./styles";
import { StatusBar } from "react-native";
const DashboardChild = props => (
  <View style={styles.ContainerOuterView}>
    <Container style={styles.ContainerStyle}>
      <StatusBar
        translucent={true}
        backgroundColor="#0067a0"
        barStyle="light-content"
      />
      <HeaderCommon
        isRightRequired={false}
        IsLeftAButton={false}
        headerStyle={styles.headerStyle}
        title="Dashboard"
        titleStyle={styles.headerLeftStyle}
      />
      <View style={styles.contentStyle}>
        <View style={styles.greetingsSpace}>
          <DashboardGreetings>{props.children}</DashboardGreetings>
        </View>
        <View style={styles.ListSpace}>
          <DashboardChildList
            excercisesAvailable={props.excercisesAvailable}
            itemPress={props.itemPress}
          />
        </View>
      </View>
    </Container>
  </View>
);

DashboardChild.propTypes = {
  DrawerOpen: PropTypes.func,
  ExcercisesAvailable: PropTypes.array,
  ItemPress: PropTypes.func,
  children: PropTypes.node.isRequired
};
DashboardChild.defaultProps = {
  onPress: () => {},
  OnPressForgotPassword: () => {},
  OnPressRegisterNow: () => {},
  UsernameChange: () => {},
  SubmitButtonOnPress: () => {},
  PasswordChange: () => {}
};

export { DashboardChild as default };
