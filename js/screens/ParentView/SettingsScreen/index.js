import React from "react";
import Settings from "../../../../storybook/stories/screens/Settings";
import { connect } from "react-redux";
import Prompt from "react-native-prompt";
import { View, ActionSheet } from "native-base";
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "SettingsScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      Random: false,
      Sound: true,
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
      Random: this.props.parent.settings.random,
      Sound: this.props.parent.settings.sound
    });
  }

  componentDidMount() {
    this.setState({
      Random: this.props.parent.settings.random,
      Sound: this.props.parent.settings.sound
    });
  }
  render() {
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
          PressMaximumImageDuration={() => {
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
          MaximumImageDuration={
            this.props.parent.settings.maxImageDuration + " sec"
          }
          PressNoOfImagesPerSession={() => {
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
          NoOfImagesPerSession={this.props.parent.settings.imagesPerSession}
          NamePress={() => {
            this.setState({
              promptTitle: "Name",
              promptPlaceHolder: this.props.parent.name,
              promptVisible: true
            });
          }}
          Name={this.props.parent.name}
          PasswordPress={() => {}}
          Age={
            this.props.child.childDetails
              ? this.props.child.childDetails.age
              : "0"
          }
          AgePress={() => {
            this.setState({
              promptTitle: "Age",
              promptPlaceHolder: this.props.child.childDetails.age,
              promptVisible: true
            });
          }}
          RandomSlider={value => {
            this.setState({ Random: value });
            this.props.dispatch({
              type: "UPDATE_SETTINGS",
              payload: {
                update: {
                  random: value
                }
              }
            });
          }}
          RandomSliderValue={this.state.Random}
          SoundSliderValue={this.state.Sound}
          SoundSlider={value => {
            this.setState({ Sound: value });
            this.props.dispatch({
              type: "UPDATE_SETTINGS",
              payload: {
                update: {
                  sound: value
                }
              }
            });
          }}
          ChildExists={this.props.child.childDetails ? true : false}
          NameChild={
            this.props.child.childDetails
              ? this.props.child.childDetails.name
              : ""
          }
          NameChildPress={() => {
            this.setState({
              promptTitle: "Name of Child",
              promptPlaceHolder: this.props.child.childDetails.name,
              promptVisible: true
            });
          }}
          PressAddPrizes={() => {}}
          DrawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
          StatusBarStyle="light-content"
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
