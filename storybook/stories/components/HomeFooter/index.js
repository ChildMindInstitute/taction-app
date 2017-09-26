import React from "react";
import PropTypes from "prop-types";
import { Footer, View, Text } from "native-base";
const HomeFooter = props => {
  let renderProgress = [];
  for (let i = 0; i < props.Left; i++) {
    if (renderProgress.length == 0)
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={{
            flex: 1,
            backgroundColor: "#eeae30",
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            margin: "1%"
          }}
        />
      );
    else if (renderProgress.length == props.Total - 1) {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={{
            flex: 1,
            backgroundColor: "#eeae30",
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            margin: "1%"
          }}
        />
      );
    } else {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={{
            flex: 1,
            backgroundColor: "#eeae30",
            margin: "1%"
          }}
        />
      );
    }
  }
  for (let i = 0; i < props.Total - props.Left; i++) {
    if (renderProgress.length == 0)
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            margin: "1%"
          }}
        />
      );
    else if (renderProgress.length == props.Total - 1) {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            margin: "1%"
          }}
        />
      );
    } else {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            margin: "1%"
          }}
        />
      );
    }
  }
  return (
    <Footer
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white"
        },
        props.FooterStyle
      ]}
    >
      <View
        style={{
          flex: 1,
          borderRadius: 50,
          width: "80%",
          height: "0%",
          borderColor: "#ccc",
          borderWidth: 1,
          borderStyle: "solid",
          flexDirection: "row",
          margin: "5%",
          backgroundColor: "#eee"
        }}
      >
        {renderProgress}
      </View>
      <View style={{ flex: 2 }}>
        <Text>{props.Left + "/" + props.Total}</Text>
      </View>
    </Footer>
  );
};

HomeFooter.propTypes = {
  FooterStyle: PropTypes.number,
  Left: PropTypes.number,
  Total: PropTypes.number
};
HomeFooter.defaultProps = {};

export { HomeFooter as default };
