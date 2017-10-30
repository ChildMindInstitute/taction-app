import React from "react";
import { Container, View, Button, Icon } from "native-base";
import SwipeableParallaxCarousel from "../../../../storybook/stories/components/Carousel";
import { Platform } from "react-native";
const datacarousel = [
  {
    id: 339964,
    tooTipText: "Touch the correct picture as fast as you can to earn a point!",
    imagePath: require("../../../assets/how-to-play-screen-1.png")
  },
  {
    id: 315635,
    tooTipText: "Collect points as you play!",
    imagePath: require("../../../assets/how-to-play-screen-2.png")
  }
];
class HowToPlayScreen extends React.Component {
  static navigationOptions = {
    title: "HowToPlayScreen",
    header: null
  };
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <View style={{ backgroundColor: "#0067a0", flex: 1 }}>
        <View
          style={{
            marginTop: -17,
            backgroundColor: "#000",
            flex: 1
          }}
        >
          <Container style={{ flex: 1 }}>
            <SwipeableParallaxCarousel
              data={datacarousel}
              height="100%"
              navigation="true"
            />
          </Container>
          <Button
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#ccc",
              position: "absolute",
              top: Platform.os == "ios" ? "6%" : "4%",
              left: 5
            }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="md-close" style={{ color: "#eeae30", fontSize: 26 }} />
          </Button>
        </View>
      </View>
    );
  }
}
export default HowToPlayScreen;
