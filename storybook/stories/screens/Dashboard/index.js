import React from "react";
import PropTypes from "prop-types";
import DashboardGreetings from "../../components/DashboardGreetings";
import DashboardList from "../../components/DashboardList";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import styles from "./styles";
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
        <DashboardList ListData={props.ExcerciseData} />
      </View>
    </View>
  </Container>
);

Dashboard.propTypes = {
  DrawerOpen: PropTypes.func,
  ExcerciseData: PropTypes.array,
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
