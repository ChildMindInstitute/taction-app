import React from "react";
import { View, StatusBar } from "react-native";
import HeaderCommon from "../../../../storybook/stories/components/Header";
import styles from "./styles";
import Logo1 from "../../../../storybook/stories/components/Logo.1";
import { Text, Footer } from "native-base";
class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#0067a0"
          translucent={true}
          barStyle="light-content"
        />
        <HeaderCommon
          isRightRequired={false}
          leftIconStyle={styles.HeaderLeftStyle}
          leftPress={() => {
            this.props.navigation.goBack();
          }}
          headerStyle={styles.HeaderStyle}
          leftIconName="arrow-back"
          Title="About"
          TitleStyle={styles.HeaderLeftStyle}
        />
        <View style={{ flex: 9, margin: "4%" }}>
          <Text>
            This appprovides a convenient and fun way to engage you or your
            child in exposure therapy. In this simple game, the player taps on
            the correct image from among a set of distractor images to get
            points. You can add your own images or choose existing folders of
            images, pair the app with a child's app to monitor the childs
            progress, and add prizes to motivate the player to win more points.
          </Text>
          <Text>
            This open source app comes out of the Innovative Technologies Lab at
            the Child Mind Institute. For more information, please contact
            <Text style={{ color: "#0067a0" }}> arno@childmind.org</Text>.
          </Text>
        </View>
        <Footer
          style={{
            backgroundColor: "#0067a0",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Logo1 imageDimensions={styles.BottomLogoStyle} />
        </Footer>
      </View>
    );
  }
}
module.exports = About;
