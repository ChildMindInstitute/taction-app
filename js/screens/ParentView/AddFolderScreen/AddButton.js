import { View, Button, Icon } from "native-base";
import React from "react";
export default class AddButton extends React.Component {
  render() {
    return (
      <View style={{ height: 90, width: 85 }}>
        <Button
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "#fff",
            marginTop: 10,
            marginBottom: 10
          }}
          onPress={this.props.onPress}
        >
          <Icon
            name="md-add"
            style={{
              fontSize: 36,
              color: "#333",
              paddingLeft: 0,
              paddingRight: 0
            }}
          />
        </Button>
      </View>
    );
  }
}
