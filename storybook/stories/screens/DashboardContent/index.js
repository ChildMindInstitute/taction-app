import React from "react";
import PropTypes from "prop-types";
import DashboardGreetings from "../../components/DashboardGreetings";
import DashboardList from "../../components/DashboardList";
import { Container, View, Text } from "native-base";
import styles from "./styles";
const DashboardContent = props => (
  <Container style={styles.ContainerStyle}>
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

DashboardContent.propTypes = {
  ExcerciseData: PropTypes.array,
  children: PropTypes.node.isRequired
};
DashboardContent.defaultProps = {};

export { DashboardContent as default };
