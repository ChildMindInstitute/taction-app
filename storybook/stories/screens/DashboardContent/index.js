import React from "react";
import PropTypes from "prop-types";
import DashboardGreetings from "../../components/DashboardGreetings";
import DashboardList from "../../components/DashboardList";
import { Container, View, Text } from "native-base";
import styles from "./styles";
const DashboardContent = props => (
  <Container style={styles.containerStyle}>
    <View style={styles.contentStyle}>
      <View style={styles.greetingsSpace}>
        <DashboardGreetings>{props.children}</DashboardGreetings>
      </View>
      <View style={styles.listSpace}>
        <DashboardList listData={props.excerciseData} />
      </View>
    </View>
  </Container>
);

DashboardContent.propTypes = {
  excerciseData: PropTypes.array,
  children: PropTypes.node.isRequired
};
DashboardContent.defaultProps = {};

export { DashboardContent as default };
