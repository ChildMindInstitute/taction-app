import React from "react";
import PropTypes from "prop-types";
import DashboardGreetings from "../../components/DashboardGreetings";
import DashboardList from "../../components/DashboardList";
import Button from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View, Text } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
import { StatusBar } from "react-native";
const Dashboard = props => (
  <Container style={styles.ContainerStyle}>
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={styles.HeaderLeftStyle}
      leftPress={props.DrawerOpen}
      leftIconName="menu"
      headerStyle={styles.HeaderStyle}
      Title="Dashboard"
      TitleStyle={styles.HeaderLeftStyle}
    />
    <View style={styles.ContentStyle}>
      <View style={styles.GreetingsSpace}>
        <DashboardGreetings>{props.children}</DashboardGreetings>
      </View>
      <View style={styles.ListSpace}>
        <DashboardList
          IconName={props.ExcerciseDataIcon}
          ListData={props.ExcerciseData}
          ListItemPress={props.ListItemPress}
          IsContentVisible={props.IsContentVisible}
        />
      </View>
    </View>
  </Container>
);

Dashboard.propTypes = {
  IsContentVisible: PropTypes.array,
  DrawerOpen: PropTypes.func,
  TotalPoints: PropTypes.number,
  SubmitButtonTextStyle: PropTypes.object,
  SubmitButtonStyle: PropTypes.object,
  OnPressSubmitButton: PropTypes.func,
  ExcerciseDataIcon: PropTypes.string,
  ExcerciseData: PropTypes.array,
  ListItemPress: PropTypes.func,
  children: PropTypes.node.isRequired
};
Dashboard.defaultProps = {
  onPress: () => {},
  OnPressForgotPassword: () => {},
  OnPressRegisterNow: () => {},
  UsernameChange: () => {},
  SubmitButtonOnPress: () => {},
  PasswordChange: () => {}
};

export { Dashboard as default };
