import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import ListOfUsers from "../../components/ListOfUsers";
import { View, Text } from "native-base";
import styles from "./styles";
const LoginAs = props => (
  <View style={[styles.MainView, { backgroundColor: props.BackgroundColor }]}>
    <View style={styles.TopSpace} />
    <Logo imageDimensions={styles.MainLogoStyles} />
    <View style={styles.LoginAsTextSpace}>
      <Text style={styles.LoginAsText}>Login As</Text>
    </View>
    <View style={styles.SelectChildSpace}>
      <ListOfUsers
        ListStyle={props.ListStyle}
        Data={props.Data}
        ListItemPress={props.ListItemPress}
        CheckBoxPress={props.CheckBoxPress}
      />
    </View>
    <View style={styles.BottomLogoSpace}>
      <Logo1 imageDimensions={styles.SubLogoStyles} />
    </View>
  </View>
);

LoginAs.propTypes = {
  BackgroundColor: PropTypes.string,
  ListStyle: PropTypes.object,
  Data: PropTypes.array,
  ListItemPress: PropTypes.func,
  CheckBoxPress: PropTypes.func
};
LoginAs.defaultProps = {
  ListItemPress: () => {},
  CheckBoxPress: () => {}
};

export { LoginAs as default };
