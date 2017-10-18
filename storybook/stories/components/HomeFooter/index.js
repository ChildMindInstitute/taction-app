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
          style={[styles.leftEndBar, styles.completedBarColor]}
        />
      );
    else if (renderProgress.length == props.Total - 1) {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.rightEndBar, styles.completedBarColor]}
        />
      );
    } else {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.middleBar, styles.completedBarColor]}
        />
      );
    }
  }
  for (let i = 0; i < props.Total - props.Left; i++) {
    if (renderProgress.length == 0)
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.leftEndBar, styles.incompleteBarColor]}
        />
      );
    else if (renderProgress.length == props.Total - 1) {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.rightEndBar, styles.incompleteBarColor]}
        />
      );
    } else {
      renderProgress.push(
        <View
          key={renderProgress.length}
          style={[styles.middleBar, styles.incompleteBarColor]}
        />
      );
    }
  }
  return (
    <Footer style={[styles.footerStyle, props.footerStyle]}>
      <View style={styles.footerInnerView1Style}>{renderProgress}</View>
      <View style={styles.footerInnerView2Style}>
        <Text style={styles.footerInnerView2TextStyle}>
          {props.left + "/" + props.total}
        </Text>
      </View>
    </Footer>
  );
};

HomeFooter.propTypes = {
  footerStyle: PropTypes.number,
  left: PropTypes.number,
  total: PropTypes.number
};
HomeFooter.defaultProps = {};

export { HomeFooter as default };
