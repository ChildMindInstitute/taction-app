import React from "react";
import { Container, View, Button, Icon } from "native-base";
import SwipeableParallaxCarousel from "../../../../storybook/stories/components/Carousel";
import { Platform } from "react-native";
const datacarousel = [
  {
    id: 315631,
    toolTipText: "Access your dashboard throught this drawer option",
    imagePath: require("../../../assets/how-to-use-Parent/1.png"),
    top: 22,
    left: 35
  },
  {
    id: 315636,
    toolTipText:
      "Use today's activity tab to monitors child's activity for that particular day",
    imagePath: require("../../../assets/how-to-use-Parent/2.png"),
    top: 20,
    left: 14,
    isTopLeft: true
  },
  {
    id: 315637,
    toolTipText:
      "Use month's activity tab to monitors child's activity for that particular month",
    imagePath: require("../../../assets/how-to-use-Parent/3.png"),
    top: 20,
    left: 44,
    isTopLeft: true
  },
  {
    id: 315638,
    toolTipText: "Access app and game settings throught this drawer option",
    imagePath: require("../../../assets/how-to-use-Parent/4.png"),
    top: 32,
    left: 30
  },
  {
    id: 315639,
    toolTipText:
      "Random -> images order in a game level," +
      " Images per session -> no of images in one level",
    imagePath: require("../../../assets/how-to-use-Parent/5.png"),
    top: 5,
    left: 30
  },
  {
    id: 315640,
    toolTipText: "Add/Edit/Delete/Rearrange game levels through this option",
    imagePath: require("../../../assets/how-to-use-Parent/6.png"),
    top: 40,
    left: 40
  },
  {
    id: 315641,
    toolTipText: "Add new levels through this button",
    imagePath: require("../../../assets/how-to-use-Parent/7.png"),
    top: 22,
    left: 1,
    isTopLeft: true
  },
  {
    id: 315642,
    toolTipText: "For each level choose either our server images OR",
    imagePath: require("../../../assets/how-to-use-Parent/8.png"),
    top: 35,
    left: 40
  },
  {
    id: 315643,
    toolTipText: "Images in your gallery",
    imagePath: require("../../../assets/how-to-use-Parent/9.png"),
    top: 35,
    left: 1
  },
  {
    id: 315644,
    toolTipText: "Rearrange a level using these buttons after selecting it",
    imagePath: require("../../../assets/how-to-use-Parent/10.png"),
    top: 1,
    left: 42
  },
  {
    id: 315645,
    toolTipText: "Rearrange a level using these buttons after selecting it",
    imagePath: require("../../../assets/how-to-use-Parent/11.png"),
    top: 1,
    left: 42
  },
  {
    id: 315651,
    toolTipText:
      "Delete level/levels using this button after selecting a level/levels",
    imagePath: require("../../../assets/how-to-use-Parent/12.png"),
    top: 23,
    left: 23,
    isTopLeft: true
  },

  {
    id: 315661,
    toolTipText:
      "Add prizes at designated points to encourage your child to play more",
    imagePath: require("../../../assets/how-to-use-Parent/13.png"),
    top: 12,
    left: 44,
    isTopRight: true
  },
  {
    id: 315671,
    toolTipText:
      "Edit any prize anytime you want through this button, available on swiping left",
    imagePath: require("../../../assets/how-to-use-Parent/14.png"),
    isTopLeft: true,
    top: 35,
    left: 1
  },
  {
    id: 315681,
    toolTipText:
      "Delete any prize anytime you want through this button, available on swiping right",
    imagePath: require("../../../assets/how-to-use-Parent/15.png"),
    isTopRight: true,
    top: 35,
    left: 43
  },

  {
    id: 315691,
    toolTipText:
      "Don't forget to deliver\nprizes on time and check delivered once done in the delivered tab on right swipe",
    imagePath: require("../../../assets/how-to-use-Parent/16.png"),
    isTopRight: true,
    top: 35,
    left: 43
  }
];
class HowToPlayScreen extends React.Component {
  static navigationOptions = {
    title: "HowToPlayScreen",
    header: null
  };
  constructor(props) {
    super(props);
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
              top: Platform.OS == "ios" ? "6.5%" : "4%",
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
