import React from "react";
import PropTypes from "prop-types";
import DashboardGreetings from "../../components/DashboardGreetings";
import DashboardChildList from "../../components/DashboardChildList";
import Button from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View, Text } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
import { StatusBar } from "react-native";
const DashboardChild = props => (
  <View style={{ flex: 1, backgroundColor: "#0067a0" }}>
    <Container style={styles.ContainerStyle}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={props.StatusBarStyle}
      />
      <HeaderCommon
        isRightRequired={false}
        IsLeftAButton={false}
        headerStyle={styles.HeaderStyle}
        Title="Dashboard"
        TitleStyle={styles.HeaderLeftStyle}
      />
      <View style={styles.ContentStyle}>
        <View style={styles.GreetingsSpace}>
          <DashboardGreetings>{props.children}</DashboardGreetings>
        </View>
        <View style={styles.ListSpace}>
          <DashboardChildList
            ExcercisesAvailable={props.ExcercisesAvailable}
            ItemPress={props.ItemPress}
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
