import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import ListOfUsers from "../../components/ListOfUsers";
import { View, Text } from "native-base";
import styles from "./styles";
import { StatusBar } from "react-native";
const LoginAs = props => (
  <View style={styles.mainOuterView}>
    <View style={styles.mainView}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.topSpace}>
        <Logo imageDimensions={styles.mainLogoStyles} />
      </View>
      <View style={styles.loginAsTextSpace}>
        <Text style={styles.loginAsText}>Login As</Text>
      </View>
      <View style={styles.selectChildSpace}>
        <ListOfUsers
          listStyle={null}
          data={props.data}
          listItemPress={props.listItemPress}
        />
      </View>
      <View style={styles.bottomLogoSpace}>
        <Logo1 imageDimensions={styles.subLogoStyles} />
      </View>
    </View>
  </View>
);

LoginAs.propTypes = {
  backgroundColor: PropTypes.string,
  listStyle: PropTypes.object,
  data: PropTypes.array,
  listItemPress: PropTypes.func,
  checkBoxPress: PropTypes.func
};
LoginAs.defaultProps = {
  listItemPress: () => {},
  checkBoxPress: () => {}
};

export { LoginAs as default };
