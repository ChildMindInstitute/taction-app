import React from "react";
import PropTypes from "prop-types";
import DashboardGreetings from "../../components/DashboardGreetings";
import DashboardList from "../../components/DashboardList";
import Button from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View, Text } from "native-base";
const Dashboard = props => (
  <Container style={{ flex: 1, backgroundColor: "#eee" }}>
    <HeaderCommon
      isRightRequired={true}
      leftIconStyle={{ color: "white" }}
      leftPress={props.DrawerOpen}
      leftIconName="menu"
      headerStyle={{ backgroundColor: "#0067a0" }}
      Title="Dashboard"
      TitleStyle={{ color: "white" }}
      RightStyle={{ flex: 1, flexDirection: "column", alignItems: "center" }}
    >
      <View style={{ flex: 0.5 }} />
      <Text style={{ color: "white", flex: 1 }}>{props.TotalPoints}</Text>
      <Text style={{ fontSize: 6, color: "white", flex: 1 }}>points</Text>
    </HeaderCommon>
    <View style={{ flex: 1, marginLeft: "-4%" }}>
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <DashboardGreetings>{props.children}</DashboardGreetings>
      </View>
      <View style={{ flex: 13 }}>
        <DashboardList
          IconName={props.ExcerciseDataIcon}
          ListData={props.ExcerciseData}
          ListItemPress={props.ListItemPress}
        />
      </View>
    </View>
    <View>
      <Button
        OnPress={props.OnPressSubmitButton}
        SubmitButtonStyle={props.SubmitButtonStyle}
        ButtonText="Resume Playing"
        SubmitButtonTextStyle={props.SubmitButtonTextStyle}
      />
    </View>
  </Container>
);

Dashboard.propTypes = {
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
