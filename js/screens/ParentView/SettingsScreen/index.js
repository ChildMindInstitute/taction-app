import React from "react";
import Settings from "../../../../storybook/stories/screens/Settings";
import { connect } from "react-redux";
import { Alert, StatusBar } from "react-native";
import Prompt from "react-native-prompt";
import { View, ActionSheet, Toast } from "native-base";
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
      promptVisible: false,
      newValue: null,
      promptTitle: "",
      promptPlaceHolder: ""
    };
  }
  findRoutes(value) {
    switch (this.state.promptTitle) {
      case "Name": {
        this.props.dispatch({ type: "UPDATE_PARENT", payload: value });
        break;
      }
      case "Age":
        this.props.dispatch({
          type: "UPDATE_CHILD",
          payload: { id: this.props.child.childID, update: { age: value } }
        });
        break;
      case "Name of Child":
        this.props.dispatch({
          type: "UPDATE_CHILD",
          payload: {
            id: this.props.child.childID,
            update: { name: value }
          }
        });
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
    StatusBar.setBarStyle("light-content", true);
    return (
      <View style={{ flex: 1 }}>
        <Prompt
          title={this.state.promptTitle}
          placeholder={this.state.promptPlaceHolder}
          visible={this.state.promptVisible}
          onCancel={() =>
            this.setState({
              promptVisible: false,
              newValue: null
            })}
          onSubmit={value => {
            this.setState(
              {
                promptVisible: false
              },
              this.findRoutes(value)
            );
          }}
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
              promptTitle: "Name",
              promptPlaceHolder: this.props.parent.name,
              promptVisible: true
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
              promptTitle: "Age",
              promptPlaceHolder: this.props.child.childDetails.age,
              promptVisible: true
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
              promptTitle: "Name of Child",
              promptPlaceHolder: this.props.child.childDetails.name,
              promptVisible: true
            });
          }}
          pressAddPrizes={() => {}}
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
