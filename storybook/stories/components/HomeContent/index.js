import React from "react";
import { View, Left, Right } from "native-base";
import { Image, TouchableOpacity } from "react-native";
class HomeContent extends React.Component {
  static navigationOptions = {
    title: "HomeContent",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      IsFirstTouched: false,
      IsSecondTouched: false,
      IsThirdTouched: false,
      IsFourthTouched: false,
      IsFirstDisabled: false,
      IsSecondDisabled: false,
      IsThirdDisabled: false,
      IsFourthDisabled: false,
      IsCorrect: false
    };
  }

  render() {
    return (
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
          this.props.HomeContentStyle
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "5%",
            marginBottom: "5%"
          }}
        >
          <View>
            <TouchableOpacity
              disabled={this.state.IsFirstDisabled}
              onPress={() => {
                this.setState({
                  IsFirstTouched: true,
                  IsFirstDisabled: true,
                  IsSecondDisabled: true,
                  IsThirdDisabled: true,
                  IsFourthDisabled: true
                });
                this.props.Pressed(1);
              }}
            >
              <Image
                style={{
                  marginRight: "10%",
                  marginLeft: "5%",
                  height: 100,
                  width: 100
                }}
                resizeMethod="auto"
                resizeMode="contain"
                source={this.props.Image1}
              />
              {this.state.IsFirstTouched ? (
                <View
                  style={{
                    position: "absolute",
                    height: 125,
                    width: 125,
                    left: -3,
                    top: -10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,.4)"
                  }}
                >
                  <Image
                    style={{ height: 80, width: 80 }}
                    source={
                      this.props.CorrectOption == 1 ? (
                        this.props.TickImage
                      ) : (
                        this.props.CrossImage
                      )
                    }
                  />
                </View>
              ) : (
                <View />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={this.state.IsSecondDisabled}
            onPress={() => {
              this.setState({
                IsSecondTouched: true,
                IsFirstDisabled: true,
                IsSecondDisabled: true,
                IsThirdDisabled: true,
                IsFourthDisabled: true
              });
              this.props.Pressed(2);
            }}
          >
            <Image
              style={{ marginLeft: "10%", height: 100, width: 100 }}
              resizeMethod="auto"
              resizeMode="contain"
              source={this.props.Image2}
            />
            {this.state.IsSecondTouched ? (
              <View
                style={{
                  position: "absolute",
                  height: 125,
                  width: 125,
                  left: -3,
                  top: -10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,.4)"
                }}
              >
                <Image
                  style={{ height: 80, width: 80 }}
                  source={
                    this.props.CorrectOption == 2 ? (
                      this.props.TickImage
                    ) : (
                      this.props.CrossImage
                    )
                  }
                />
              </View>
            ) : (
              <View />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "5%",
            marginBottom: "5%"
          }}
        >
          <TouchableOpacity
            disabled={this.state.IsThirdDisabled}
            onPress={() => {
              this.setState({
                IsThirdTouched: true,
                IsFirstDisabled: true,
                IsSecondDisabled: true,
                IsThirdDisabled: true,
                IsFourthDisabled: true
              });
              this.props.Pressed(3);
            }}
          >
            <Image
              style={{
                marginRight: "10%",
                marginLeft: "5%",
                height: 100,
                width: 100
              }}
              resizeMethod="auto"
              resizeMode="contain"
              source={this.props.Image3}
            />
            {this.state.IsThirdTouched ? (
              <View
                style={{
                  position: "absolute",
                  height: 125,
                  width: 125,
                  left: -3,
                  top: -10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,.4)"
                }}
              >
                <Image
                  style={{ height: 80, width: 80 }}
                  source={
                    this.props.CorrectOption == 3 ? (
                      this.props.TickImage
                    ) : (
                      this.props.CrossImage
                    )
                  }
                />
              </View>
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.IsFourthDisabled}
            onPress={() => {
              this.setState({
                IsFourthTouched: true,
                IsFirstDisabled: true,
                IsSecondDisabled: true,
                IsThirdDisabled: true,
                IsFourthDisabled: true
              });
              this.props.Pressed(4);
            }}
          >
            <Image
              style={{ marginLeft: "10%", height: 100, width: 100 }}
              resizeMethod="auto"
              resizeMode="contain"
              source={this.props.Image4}
            />
            {this.state.IsFourthTouched ? (
              <View
                style={{
                  position: "absolute",
                  height: 125,
                  width: 125,
                  left: -3,
                  top: -10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,.4)"
                }}
              >
                <Image
                  style={{ height: 80, width: 80 }}
                  source={
                    this.props.CorrectOption == 4 ? (
                      this.props.TickImage
                    ) : (
                      this.props.CrossImage
                    )
                  }
                />
              </View>
            ) : (
              <View />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeContent;
