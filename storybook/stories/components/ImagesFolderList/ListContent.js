import React, { Component } from "react";
import {
  ListItem,
  Text,
  Left,
  Right,
  Body,
  View,
  Switch,
  Badge,
  CheckBox
} from "native-base";
import { Image } from "react-native";
import Grid from "react-native-grid-component";
class ListContent extends Component {
  static navigationOptions = {
    title: "ListContent",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      switched: false,
      IsContentVisible: false
    };
  }
  render() {
    return (
      <ListItem
        onPress={() => {
          this.setState({ IsContentVisible: !this.state.IsContentVisible });
        }}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "#ccc",
          marginRight: 0
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, flexDirection: "row", margin: "2%" }}>
            <Left style={{ flex: 2, flexDirection: "row" }}>
              <View
                style={{
                  flex: 3,
                  alignContent: "center",
                  justifyContent: "center"
                }}
              >
                <CheckBox
                  checked={this.state.checked}
                  onPress={checked => {
                    this.setState({ checked: !this.state.checked });
                    this.props.CheckBoxChange(this.props.ListItem, checked);
                  }}
                  style={{ backgroundColor: "#eeae30", borderColor: "#eeae30" }}
                />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: "-5%"
                }}
              >
                <Image
                  source={this.props.ListItem.DataFolderContent[0].Image}
                  style={{ width: 35, height: 35 }}
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>

              <View
                style={{
                  flex: 4,
                  alignContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#0067a0"
                  }}
                >
                  {this.props.ListItem.Name}
                </Text>
              </View>
            </Left>
            <Body>
              <View
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: "-5%"
                }}
              >
                <Badge style={{ backgroundColor: "#eeae30" }}>
                  <Text>{this.props.ListItem.DataFolderContent.length}</Text>
                </Badge>
              </View>
            </Body>
            <Right style={{ flexDirection: "column", marginTop: "-2%" }}>
              <Switch
                onTintColor="#eeae30"
                value={this.state.switched}
                onValueChange={() => {
                  this.setState({ switched: !this.state.switched });
                  this.props.SwitchToggled(this.props.ListItem);
                }}
              />
            </Right>
          </View>
          {this.state.IsContentVisible ? (
            <View
              style={{
                flex: 3,
                marginLeft: 0,
                marginRight: "-5%",
                marginBottom: "-3.75%"
              }}
            >
              <Grid
                style={{ flex: 1 }}
                renderItem={(data, i) => (
                  <Image
                    source={data.Image}
                    style={{
                      flex: 1,
                      borderWidth: 0.4,
                      borderColor: "#ccc",
                      height: 80,
                      width: 40,
                      opacity: data.IsCompleted ? 1 : 0.7
                    }}
                    resizeMethod="auto"
                    resizeMode="contain"
                    key={i}
                  />
                )}
                data={this.props.ListItem.DataFolderContent}
                itemsPerRow={4}
              />
            </View>
          ) : (
            <View />
          )}
        </View>
      </ListItem>
    );
  }
}
export default ListContent;
