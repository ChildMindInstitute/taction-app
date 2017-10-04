import React from "react";
import PropTypes from "prop-types";
import { Footer, View, Text } from "native-base";
import styles from "./styles";
const HomeFooter = props => {
  let renderProgress = [];
  for (let i = 0; i < props.Left; i++) {
    if (renderProgress.length == 0)
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.LeftEndBar, styles.CompletedBarColor]}
        />
      );
    else if (renderProgress.length == props.Total - 1) {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.RightEndBar, styles.CompletedBarColor]}
        />
      );
    } else {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.MiddleBar, styles.CompletedBarColor]}
        />
      );
    }
  }
  for (let i = 0; i < props.Total - props.Left; i++) {
    if (renderProgress.length == 0)
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.LeftEndBar, styles.IncompleteBarColor]}
        />
      );
    else if (renderProgress.length == props.Total - 1) {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.RightEndBar, styles.IncompleteBarColor]}
        />
      );
    } else {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.MiddleBar, styles.IncompleteBarColor]}
        />
      );
    }
  }
  return (
    <Footer style={[styles.FooterStyle, props.FooterStyle]}>
      <View style={styles.FooterInnerView1Style}>{renderProgress}</View>
      <View style={styles.FooterInnerView2Style}>
        <Text style={styles.FooterInnerView2TextStyle}>
          {props.Left + "/" + props.Total}
        </Text>
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
