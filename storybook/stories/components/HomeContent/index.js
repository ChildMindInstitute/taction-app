import React from "react";
import PropTypes from "prop-types";
import { View, Left, Right } from "native-base";
import { Image } from "react-native";
const HomeContent = props => (
  <View
    style={[
      {
        flex: 1,
        flexDirection: "column",
        borderColor: "#ccc",
        borderWidth: 1,
        borderStyle: "solid",
        margin: "5%",
        borderRadius: 5,
        shadowColor: "#aaa",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1
      },
      props.HomeContentStyle
    ]}
  >
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Left>
        <Image style={{ margin: "10%" }} source={props.Image1} />
      </Left>
      <Right>
        <Image button style={{ margin: "10%" }} source={props.Image2} />
      </Right>
    </View>
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Left>
        <Image button style={{ margin: "10%" }} source={props.Image3} />
      </Left>
      <Right>
        <Image button style={{ margin: "10%" }} source={props.Image4} />
      </Right>
    </View>
  </View>
);

HomeContent.propTypes = {
  Image1: PropTypes.number,
  Image2: PropTypes.number,
  Image3: PropTypes.number,
  Image4: PropTypes.number
};

export { HomeContent as default };
