import React from "react";
import { Container, View } from "native-base";
import SwipeableParallaxCarousel from "../../../../storybook/stories/components/Carousel";
import { Constants } from "expo";
const datacarousel = [
  {
    id: 339964,
    tooTipText: "Touch the correct picture as fast as you can to earn point!",
    imagePath: require("../../../assets/how-to-play-screen-1.jpg")
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
            marginTop: Constants.statusBarHeight,
            backgroundColor: "#000",
            flex: 1
          }}
        >
          <Container style={{ flex: 1 }}>
            <SwipeableParallaxCarousel
              data={datacarousel}
              height="100%"
              navigation="true"
              skipPress={() => this.props.navigation.goBack()}
            />
          </Container>
        </View>
      </View>
    );
  }
}
export default HowToPlayScreen;
