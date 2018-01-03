import React from "react";
import { Container, View, Button, Icon } from "native-base";
import SwipeableParallaxCarousel from "../../../../storybook/stories/components/Carousel";
import { Platform } from "react-native";
const datacarousel = [
  {
    id: 315631,
    toolTipText: "Access the Dashboard",
    imagePath: require("../../../assets/how-to-use-Parent/1.png"),
    top: 22,
    left: 35
  },
  {
    id: 315636,
    toolTipText: "Use Today's Activities to monitor child's activity for today",
    imagePath: require("../../../assets/how-to-use-Parent/2.png"),
    top: 20,
    left: 14,
    isTopLeft: true
  },
  {
    id: 315637,
    toolTipText:
      "Use Month's Activities to monitor child's activity for the month",
    imagePath: require("../../../assets/how-to-use-Parent/3.png"),
    top: 20,
    left: 44,
    isTopLeft: true
  },
  {
    id: 315638,
    toolTipText: "Access Settings",
    imagePath: require("../../../assets/how-to-use-Parent/4.png"),
    top: 32,
    left: 30
  },
  {
    id: 315639,
    toolTipText: "Set number and order of images",
    imagePath: require("../../../assets/how-to-use-Parent/5.png"),
    top: 5,
    left: 30
  },
  {
    id: 315640,
    toolTipText: "Add/edit/delete/reorder image folders (game levels)",
    imagePath: require("../../../assets/how-to-use-Parent/6.png"),
    top: 40,
    left: 40
  },
  {
    id: 315641,
    toolTipText: "Add new image folders (game levels)",
    imagePath: require("../../../assets/how-to-use-Parent/7.png"),
    top: 22,
    left: 1,
    isTopLeft: true
  },
  {
    id: 315642,
    toolTipText:
      "For each game level, choose an image folder from our server, or...",
    imagePath: require("../../../assets/how-to-use-Parent/8.png"),
    top: 35,
    left: 40
  },
  {
    id: 315643,
    toolTipText: "...select images from your gallery",
    imagePath: require("../../../assets/how-to-use-Parent/9.png"),
    top: 35,
    left: 1
  },
  {
    id: 3156123,
    toolTipText: "select folder(s) and...",
    imagePath: require("../../../assets/how-to-use-Parent/10.png"),
    top: 30,
    left: 1,
    isTopLeft: true
  },
  {
    id: 315644,
    toolTipText: "...reorder them by tapping the up or down arrows",
    imagePath: require("../../../assets/how-to-use-Parent/10.png"),
    top: 20,
    left: 28,
    isTopRight: true
  },
  {
    id: 315651,
    toolTipText:
      "Delete folder(s) by selecting (left checkbox) and tapping here",
    imagePath: require("../../../assets/how-to-use-Parent/12.png"),
    top: 23,
    left: 24.5,
    isTopLeft: true
  },

  {
    id: 315661,
    toolTipText: "Add prizes",
    imagePath: require("../../../assets/how-to-use-Parent/13.png"),
    top: 12,
    left: 44,
    isTopRight: true
  },
  {
    id: 315671,
    toolTipText: "Edit prizes by swiping to the right",
    imagePath: require("../../../assets/how-to-use-Parent/14.png"),
    isTopLeft: true,
    top: 35,
    left: 1
  },
  {
    id: 315681,
    toolTipText: "Delete prizes by swiping to the left",
    imagePath: require("../../../assets/how-to-use-Parent/15.png"),
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
