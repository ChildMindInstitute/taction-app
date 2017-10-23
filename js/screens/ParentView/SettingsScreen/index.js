import React from "react";
import Settings from "../../../../storybook/stories/screens/Settings";
import { connect } from "react-redux";
import { Alert } from "react-native";
import {
  View,
  ActionSheet,
  Toast,
  Container,
  Header,
  Title,
  Body,
  Input,
  Item,
  Label,
  Button,
  Text
} from "native-base";
import Modal from "../../../../storybook/stories/components/Modal/modal";
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
    this.input = {
      entry1: "",
      entry2: ""
    };
  }
  findRoutes() {
    switch (this.state.modalTitle) {
      case "Name of parent": {
        this.props.dispatch({
          type: "UPDATE_PARENT",
          payload: this.input.entry1
        });
        break;
      }
      case "Age of child":
        this.props.dispatch({
          type: "UPDATE_CHILD",
          payload: {
            id: this.props.child.childID,
            update: { age: this.input.entry1 }
          }
        });
        break;
      case "Name of child":
        this.props.dispatch({
          type: "UPDATE_CHILD",
          payload: {
            id: this.props.child.childID,
            update: { name: this.input.entry1 }
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
          extraModalStyle={{
            paddingTop: this.state.modalTitle == "Add prizes" ? "40%" : "60%",
            paddingBottom: "75%",
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
          extraModalViewStyle={{
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: 10
          }}
          content={
            <Container>
              <Header>
                <Body>
                  <Title style={{ color: "#007aff" }}>
                    {this.state.modalTitle}
                  </Title>
                </Body>
              </Header>
              <View style={{ flex: 1 }}>
                <Item stackedLabel style={{ flex: 1 }}>
                  {this.state.modalTitle == "Add prizes" ? (
                    <Label>Points to be achieved</Label>
                  ) : (
                    false
                  )}
                  <Input
                    style={{ backgroundColor: "#fff" }}
                    placeholder={this.state.modalPlaceHolder}
                    keyboardType={
                      this.state.modalTitle == "Age of child"
                        ? "numeric"
                        : "default"
                    }
                    onChange={event => {
                      this.input.entry1 = event.nativeEvent.text;
                    }}
                  />
                </Item>
                {this.state.modalTitle == "Add prizes" ? (
                  <Item stackedLabel style={{ flex: 1 }}>
                    <Label>Prize</Label>
                    <Input
                      style={{ backgroundColor: "#fff" }}
                      onChange={event => {
                        this.input.entry2 = event.nativeEvent.text;
                      }}
                    />
                  </Item>
                ) : (
                  false
                )}
              </View>
              <View style={{ flexDirection: "row" }}>
                <Button
                  block
                  bordered
                  light
                  style={{ width: "50%" }}
                  onPress={() => {
                    this.findRoutes();
                    this.setState({ modalVisible: false });
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
            </Container>
          }
        />
        <Settings
          pressMaximumImageDuration={() => {
            ActionSheet.show(
              {
                options: ["5", "10", "25", "50", "100", "Cancel"],
                cancelButtonIndex: 5
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
                cancelButtonIndex: 5
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
                      buttonText: "Okay"
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
          childExists={this.props.child.childDetails ? true : false}
          nameChild={
            this.props.child.childDetails
              ? this.props.child.childDetails.name
              : ""
          }
          nameChildPress={() => {
            this.setState({
              modalTitle: "Name of child",
              modalPlaceHolder: this.props.child.childDetails.name,
              modalVisible: true
            });
          }}
          pressAddPrizes={() => {
            this.setState({
              modalTitle: "Add prizes",
              modalPlaceHolder: "",
              modalVisible: true
            });
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
