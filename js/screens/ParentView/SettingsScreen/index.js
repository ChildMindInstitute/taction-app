import React from "react";
import Settings from "../../../../storybook/stories/screens/Settings";
import { connect } from "react-redux";
import { Alert, Dimensions } from "react-native";
import {
  View,
  ActionSheet,
  Toast,
  Header,
  Title,
  Body,
  Input,
  Button,
  Text
} from "native-base";
import Modal from "../../../../storybook/stories/components/Modal/modal";
let { width } = Dimensions.get("screen");
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "SettingsScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      random: false,
      sound: true,
      modalVisible: false,
      newValue: null,
      modalTitle: "",
      modalPlaceHolder: ""
    };
    this.modalInput = "";
  }
  findRoutes() {
    switch (this.state.modalTitle) {
      case "Name of parent": {
        this.props.dispatch({
          type: "UPDATE_PARENT",
          payload: this.modalInput
        });
        break;
      }
      case "Age of child":
        this.props.dispatch({
          type: "UPDATE_CHILD",
          payload: {
            id: this.props.child.childID,
            update: { age: this.modalInput }
          }
        });
        break;
      case "Name of child":
        this.props.dispatch({
          type: "UPDATE_CHILD",
          payload: {
            id: this.props.child.childID,
            update: { name: this.modalInput }
          }
        });
        break;
      case "App prizes":
        // Add Prizes callback
        break;
    }
  }
  componenetDidUpdate() {
    this.setState({
      random: this.props.parent.settings.random,
      sound: this.props.parent.settings.sound
    });
  }

  componentDidMount() {
    this.setState({
      random: this.props.parent.settings.random,
      sound: this.props.parent.settings.sound
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={this.state.modalVisible}
          extraModalViewStyle={{
            backgroundColor: "rgba(255,255,255,0.9)",
            flex: 0.2,
            width: width - 50,
            top: "30%"
          }}
          content={
            <View style={{ flex: 1 }}>
              <Header
                style={{ backgroundColor: "#fff" }}
                iosBarStyle="light-content"
                androidStatusBarColor="rgba(0, 70, 107, 1)"
              >
                <Body>
                  <Title style={{ color: "#007aff" }}>
                    {this.state.modalTitle}
                  </Title>
                </Body>
              </Header>
              <View style={{ flex: 1 }}>
                <Input
                  style={{ backgroundColor: "#fff" }}
                  placeholder={this.state.modalPlaceHolder}
                  keyboardType={
                    this.state.modalTitle == "Age of child"
                      ? "numeric"
                      : "default"
                  }
                  onChange={event => {
                    this.modalInput = event.nativeEvent.text;
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Button
                  block
                  bordered
                  light
                  style={{ width: "50%" }}
                  onPress={() => {
                    if (this.modalInput != "") {
                      this.findRoutes();
                      this.setState({ modalVisible: false });
                    } else {
                      Toast.show({
                        text: "Fields cannot be left blank!",
                        buttonText: "Okay",
                        duration: 2000,
                        position: "bottom"
                      });
                    }
                  }}
                >
                  <Text style={{ color: "#007aff" }}>Ok</Text>
                </Button>
                <Button
                  block
                  bordered
                  light
                  style={{ width: "50%" }}
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Text style={{ color: "#007aff" }}>Cancel</Text>
                </Button>
              </View>
            </View>
          }
        />
        <Settings
          pressMaximumImageDuration={() => {
            ActionSheet.show(
              {
                options: ["5", "10", "25", "50", "100", "Cancel"],
                cancelButtonIndex: 5,
                title: "Maximum image duration"
              },
              buttonIndex => {
                switch (buttonIndex) {
                  case 0: {
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          maxImageDuration: 5
                        }
                      }
                    });
                    break;
                  }
                  case 1: {
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          maxImageDuration: 10
                        }
                      }
                    });
                    break;
                  }
                  case 2: {
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          maxImageDuration: 25
                        }
                      }
                    });
                    break;
                  }
                  case 3: {
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          maxImageDuration: 50
                        }
                      }
                    });
                    break;
                  }
                  case 4: {
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          maxImageDuration: 100
                        }
                      }
                    });
                    break;
                  }
                }
              }
            );
          }}
          maximumImageDuration={
            this.props.parent.settings.maxImageDuration + " sec"
          }
          pressNoOfImagesPerSession={() => {
            ActionSheet.show(
              {
                options: ["5", "10", "25", "50", "100", "Cancel"],
                cancelButtonIndex: 5,
                title: "Images per session"
              },
              buttonIndex => {
                switch (buttonIndex) {
                  case 0:
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          imagesPerSession: 5
                        }
                      }
                    });
                    break;
                  case 1:
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          imagesPerSession: 10
                        }
                      }
                    });
                    break;
                  case 2:
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          imagesPerSession: 25
                        }
                      }
                    });
                    break;
                  case 3:
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          imagesPerSession: 50
                        }
                      }
                    });
                    break;
                  case 4:
                    this.props.dispatch({
                      type: "UPDATE_SETTINGS",
                      payload: {
                        update: {
                          imagesPerSession: 100
                        }
                      }
                    });
                }
              }
            );
          }}
          noOfImagesPerSession={this.props.parent.settings.imagesPerSession}
          namePress={() => {
            this.setState({
              modalTitle: "Name of parent",
              modalPlaceHolder: this.props.parent.name,
              modalVisible: true
            });
          }}
          name={this.props.parent.name}
          passwordPress={() => {
            Alert.alert(
              "Reset paswword",
              "Are you sure you want to reset the password?",
              [
                {
                  text: "OK",
                  onPress: () => {
                    this.props.dispatch({
                      type: "RESET_PASSWORD",
                      payload: this.props.parent.email
                    });
                    Toast.show({
                      text: "A password reset mail has been sent!",
                      position: "bottom",
                      buttonText: "Okay",
                      duration: 1500
                    });
                  }
                },
                {
                  text: "Cancel",
                  onPress: () => {}
                }
              ]
            );
          }}
          age={
            this.props.child.childDetails
              ? this.props.child.childDetails.age
              : "0"
          }
          agePress={() => {
            this.setState({
              modalTitle: "Age of child",
              modalPlaceHolder: this.props.child.childDetails.age,
              modalVisible: true
            });
          }}
          randomSlider={value => {
            this.setState({ random: value });
            this.props.dispatch({
              type: "UPDATE_SETTINGS",
              payload: {
                update: {
                  random: value
                }
              }
            });
          }}
          randomSliderValue={this.state.random}
          soundSliderValue={this.state.sound}
          soundSlider={value => {
            this.setState({ sound: value });
            this.props.dispatch({
              type: "UPDATE_SETTINGS",
              payload: {
                update: {
                  sound: value
                }
              }
            });
          }}
          childExists={this.props.child.childID ? true : false}
          nameChild={
            this.props.child.childID ? this.props.child.childDetails.name : ""
          }
          nameChildPress={() => {
            this.setState({
              modalTitle: "Name of child",
              modalPlaceHolder: this.props.child.childDetails.name,
              modalVisible: true
            });
          }}
          pressAddPrizes={() => {
            this.props.navigation.navigate("PrizesScreen");
          }}
          drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
        />
      </View>
    );
  }
}

const mapStateToProps = store => {
  return { parent: store.user.parent, child: store.user.child };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
