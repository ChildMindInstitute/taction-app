import React from "react";
import PropTypes from "prop-types";
import DashboardGreetings from "../../components/DashboardGreetings";
import DashboardList from "../../components/DashboardList";
import Button from "../../components/Button";
import HeaderCommon from "../../components/Header";
import { Container, View, Text } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
const Dashboard = props => (
  <Container style={styles.ContainerStyle}>
    <HeaderCommon
      isRightRequired={true}
      leftIconStyle={styles.HeaderLeftStyle}
      leftPress={props.DrawerOpen}
      leftIconName="menu"
      headerStyle={styles.HeaderStyle}
      Title="Dashboard"
      TitleStyle={styles.HeaderLeftStyle}
    >
      <View style={styles.HeaderRightStyle}>
        <View style={styles.HeaderRightImageSpace}>
          <Image source={require("../../../../js/assets/star_filled.png")} />
        </View>
        <View style={styles.HeaderRightTextSpace}>
          <View style={styles.HeaderRightTextAlign} />
          <Text style={styles.HeaderRightTotalPointsStyle}>
            {props.TotalPoints}
          </Text>
          <Text style={styles.HeaderRightTotalPointsTextStyle}>points</Text>
        </View>
      </View>
    </HeaderCommon>
    <View style={styles.ContentStyle}>
      <View style={styles.GreetingsSpace}>
        <DashboardGreetings>{props.children}</DashboardGreetings>
      </View>
      <View style={styles.ListSpace}>
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
