import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import ListOfChildren from "../../components/ListOfChildren";
import { View, Text } from "native-base";
import styles from "./styles";
const LoginAs = props => (
  <View style={[styles.MainView, { backgroundColor: props.BackgroundColor }]}>
    <View style={styles.TopSpace} />
    <Logo
      source={props.MainLogoSource}
      imageDimensions={styles.MainLogoStyles}
    />
    <View style={styles.LoginAsTextSpace}>
      <Text style={styles.LoginAsText}>Login As</Text>
    </View>
    <View style={styles.SelectChildSpace}>
      <ListOfChildren
        ListStyle={props.ListStyle}
        Data={props.Data}
        ListItemPress={props.ListItemPress}
        CheckBoxPress={props.CheckBoxPress}
      />
    </View>
    <View style={styles.BottomLogoSpace}>
      <Logo
        source={props.SubLogoSource}
        imageDimensions={styles.SubLogoStyles}
      />
    </View>
  </View>
);

LoginAs.propTypes = {
  BackgroundColor: PropTypes.string,
  MainLogoSource: PropTypes.node.isRequired,
  ListStyle: PropTypes.object,
  Data: PropTypes.array,
  ListItemPress: PropTypes.func,
  CheckBoxPress: PropTypes.func,
  SubLogoSource: PropTypes.node.isRequired
};
LoginAs.defaultProps = {
  ListItemPress: () => {},
  CheckBoxPress: () => {}
};

export { LoginAs as default };
