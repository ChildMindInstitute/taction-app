import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  View,
  Header,
  Tabs,
  Tab,
  Left,
  Icon,
  Body,
  Button,
  Text,
  Right
} from "native-base";
import DashBoardContent from "../DashboardContent";
import styles from "./styles";
const Dashboard = props => (
  <Container style={styles.ContainerStyle}>
    <Header
      hasTabs
      renderTabBar={() => <ScrollableTab />}
      style={styles.HeaderStyle}
    >
      <Left style={styles.LeftStyle}>
        <Button transparent onPress={props.leftPress}>
          <Icon name="menu" style={styles.HeaderLeftStyle} />
        </Button>
      </Left>
      <Body style={styles.BodyStyle}>
        <Text style={styles.BodyTitleStyle}>Dashboard</Text>
      </Body>
      <Right style={styles.RightStyle} />
    </Header>
    <Tabs initialPage={0}>
      <Tab
        heading="Today's Activities"
        activeTabStyle={{ backgroundColor: "#0067a0" }}
        activeTextStyle={{ color: "#ffffff" }}
      >
        <DashBoardContent ExcerciseData={props.ExcerciseDataToday}>
          <Text>Today's Activities</Text>
        </DashBoardContent>
      </Tab>
      <Tab
        heading="Month's Activities"
        activeTabStyle={{ backgroundColor: "#0067a0" }}
        activeTextStyle={{ color: "#ffffff" }}
      >
        <DashBoardContent ExcerciseData={props.ExcerciseDataMonth}>
          <Text>Month's Activities</Text>
        </DashBoardContent>
      </Tab>
    </Tabs>
  </Container>
);

Dashboard.propTypes = {
  ExcerciseDataToday: PropTypes.array,
  ExcerciseDataMonth: PropTypes.array,
  leftPress: PropTypes.func
};
Dashboard.defaultProps = {
  leftPress: () => {}
};

export { Dashboard as default };
