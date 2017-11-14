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
  Right,
  View
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
      androidStatusBarColor="rgba(0, 70, 107, 1)"
    >
      <Left style={styles.leftStyle}>
        <Button
          disabled={props.menuDisabled}
          transparent
          onPress={props.leftPress}
        >
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
        {props.loaded ? (
          props.excerciseDataToday.length > 0 ? (
            <DashBoardContent excerciseData={props.excerciseDataToday}>
              <Text>Today's Activities</Text>
            </DashBoardContent>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#eee",
                padding: 16
              }}
            >
              <Text style={{ alignSelf: "center", fontSize: 14 }}>
                Seems like somebody has been lazy today!
              </Text>
            </View>
          )
        ) : (
          false
        )}
      </Tab>
      <Tab
        heading="Month's Activities"
        activeTabStyle={{ backgroundColor: "#F8F8F8" }}
        tabStyle={{ backgroundColor: "#F8F8F8" }}
        activeTextStyle={{ color: "#0067a0" }}
      >
        {props.loaded ? (
          props.excerciseDataToday.length > 0 ? (
            <DashBoardContent excerciseData={props.excerciseDataMonth}>
              <Text>Month's Activities</Text>
            </DashBoardContent>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#eee",
                padding: 16
              }}
            >
              <Text style={{ alignSelf: "center", fontSize: 14 }}>
                No play this month!
              </Text>
            </View>
          )
        ) : (
          false
        )}
      </Tab>
    </Tabs>
  </Container>
);

Dashboard.propTypes = {
  menuDisabled: PropTypes.bool,
  excerciseDataToday: PropTypes.array,
  excerciseDataMonth: PropTypes.array,
  leftPress: PropTypes.func
};
Dashboard.defaultProps = {
  leftPress: () => {}
};

export { Dashboard as default };
