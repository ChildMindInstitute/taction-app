import React from "react";
import { View } from "react-native";
import HeaderCommon from "../../../../storybook/stories/components/Header";
import styles from "./styles";
import Logo5 from "../../../../storybook/stories/components/Logo.5";
import { Text, Footer, Container, Content } from "native-base";
class About extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderCommon
          isRightRequired={false}
          leftIconStyle={styles.headerLeftStyle}
          leftPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
          headerStyle={styles.headerStyle}
          leftIconName="menu"
          title="About"
          titleStyle={styles.headerLeftStyle}
        />
        <Content>
          <View style={{ flex: 9, margin: "4%" }}>
            <Text>
              This appprovides a convenient and fun way to engage you or your
              child in exposure therapy. In this simple game, the player taps on
              the correct image from among a set of distractor images to get
              points. You can add your own images or choose existing folders of
              images, pair the app with a child's app to monitor the childs
              progress, and add prizes to motivate the player to win more
              points.
            </Text>
            <Text> </Text>
            <Text>
              This open source app comes out of the Innovative Technologies Lab
              at the Child Mind Institute. For more information, please contact
              <Text style={{ color: "#0067a0" }}> arno@childmind.org</Text>.
            </Text>
          </View>
        </Content>
        <Footer
          style={{
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 0
          }}
        >
          <Logo5 imageDimensions={styles.bottomLogoStyle} />
        </Footer>
      </Container>
    );
  }
}
module.exports = About;
