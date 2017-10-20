import React from "react";
import PropTypes from "prop-types";
import {
  Container,
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
      style={styles.headerStyle}
      iosBarStyle="light-content"
    >
      <Left style={styles.leftStyle}>
        <Button transparent onPress={props.leftPress}>
          <Icon name="menu" style={styles.headerLeftStyle} />
        </Button>
      </Left>
      <Body style={styles.bodyStyle}>
        <Text style={styles.bodyTitleStyle}>Dashboard</Text>
      </Body>
      <Right style={styles.rightStyle} />
    </Header>
    <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: "#0067a0" }}>
      <Tab
        heading="Today's Activities"
        activeTabStyle={{ backgroundColor: "#F8F8F8" }}
        tabStyle={{ backgroundColor: "#F8F8F8" }}
        activeTextStyle={{ color: "#0067a0" }}
      >
        <DashBoardContent excerciseData={props.excerciseDataToday}>
          <Text>Today's Activities</Text>
        </DashBoardContent>
      </Tab>
      <Tab
        heading="Month's Activities"
        activeTabStyle={{ backgroundColor: "#F8F8F8" }}
        tabStyle={{ backgroundColor: "#F8F8F8" }}
        activeTextStyle={{ color: "#0067a0" }}
      >
        <DashBoardContent excerciseData={props.excerciseDataMonth}>
          <Text>Month's Activities</Text>
        </DashBoardContent>
      </Tab>
    </Tabs>
  </Container>
);

Dashboard.propTypes = {
  excerciseDataToday: PropTypes.array,
  excerciseDataMonth: PropTypes.array,
  leftPress: PropTypes.func
};
Dashboard.defaultProps = {
  leftPress: () => {}
};

export { Dashboard as default };
