import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Logo1 from "../../components/Logo.1";
import ListOfUsers from "../../components/ListOfUsers";
import { Container, Content, View, Text } from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const LoginAs = props => (
  <Container style={styles.mainOuterView}>
    <StatusBar barStyle="light-content" translucent={true} />
    <Content>
      <View style={styles.mainView}>
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
    </Content>
  </Container>
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
