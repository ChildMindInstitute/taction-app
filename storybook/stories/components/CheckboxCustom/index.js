import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Platform } from "react-native";
import IconNB from "react-native-vector-icons/Ionicons";
class CheckBox extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: this.props.checked
            ? this.props.checkedbackgroundColor
              ? this.props.checkedbackgroundColor
              : "blue"
            : "transparent",
          borderRadius: 100,
          borderWidth: 1,
          borderColor: this.props.BorderColor
            ? this.props.BorderColor
            : "transparent",
          width: 30,
          height: 30
        }}
        onPress={this.props.onPress}
      >
        <IconNB
          style={{
            color:
              this.props.checked === true
                ? this.props.TickColor ? this.props.TickColor : "#ffffff"
                : "transparent",
            fontSize: 42,
            backgroundColor: "transparent",
            left: 6,
            top: -8
          }}
          name={
            Platform.OS === "ios" ? "ios-checkmark-outline" : "md-checkmark"
          }
        />
      </TouchableOpacity>
    );
  }
}

CheckBox.propTypes = {
  ...TouchableOpacity.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  checked: PropTypes.bool
};

export default CheckBox;
