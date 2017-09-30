import React, { Component } from "react";
import { ListItem, Text, Left, Right, Body, View } from "native-base";
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
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Left style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={this.props.ListData.DataFolderContent[0].Image}
                  style={{ width: 35, height: 35 }}
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>

              <View
                style={{
                  flex: 3,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#0067a0",
                    marginTop: "5%"
                  }}
                >
                  {this.props.ListData.Name}
                </Text>
              </View>
            </Left>
            <Body
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 20, color: "black" }}>
                {this.props.ListData.Points}
              </Text>
              <Image
                source={this.props.ListData.Stars}
                style={{ width: 35, height: 12 }}
              />
            </Body>
            <Right style={{ flexDirection: "column" }}>
              <View style={{ alignItems: "center" }}>
                <Text note>Taps</Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: "3%"
                  }}
                >
                  <Text>
                    {this.props.ListData.Taps +
                      "/" +
                      this.props.ListData.TotalTaps}
                  </Text>
                </View>
              </View>
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
                  >
                    <View
                      style={{
                        backgroundColor: "#000",
                        alignItems: "center",
                        marginTop: "63%",
                        opacity: 0.65
                      }}
                    >
                      <Text
                        style={{
                          color: "#ccc",
                          fontSize: 14,
                          margin: "2%"
                        }}
                      >
                        {data.Taps}/{data.TotalTaps}{" "}
                      </Text>
                    </View>
                  </Image>
                )}
                data={this.props.ListData.DataFolderContent}
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
