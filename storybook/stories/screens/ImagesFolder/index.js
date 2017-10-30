import React from "react";
import ImagesFolderList from "../../components/ImagesFolderList";
import HeaderCommon from "../../components/Header";
import { Container, View, Button, Icon, Text } from "native-base";
import styles from "./styles";
class ImagesFolder extends React.Component {
  static navigationOptions = {
    title: "ImagesFolder",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      pressed1: false,
      pressed2: false,
      pressed3: false
    };
  }

  render() {
    return (
      <Container style={styles.containerStyle}>
        <HeaderCommon
          isRightRequired={false}
          leftIconStyle={styles.headerLeftStyle}
          leftPress={this.props.drawerOpen}
          leftIconName="menu"
          headerStyle={styles.headerStyle}
          title="Images"
          titleStyle={styles.headerLeftStyle}
        />
        <View style={styles.contentStyle}>
          <View style={styles.greetingsSpace}>
            <View style={styles.greetingsSpaceInnerView}>
              <View style={styles.greetingsSpaceInnerViewInnerView}>
                <Button
                  style={[
                    styles.buttons,
                    {
                      backgroundColor: this.state.pressed
                        ? "#eeae30"
                        : "#ffffff"
                    }
                  ]}
                  onPress={this.props.onPressAddButton}
                  onPressIn={() => this.setState({ pressed: true })}
                  onPressOut={() => this.setState({ pressed: false })}
                >
                  <Icon
                    name="md-add"
                    style={[
                      styles.buttonIcons,
                      {
                        color: this.state.pressed ? "#ffffff" : "#eeae30"
                      }
                    ]}
                  />
                </Button>
              </View>
              <View style={styles.greetingsSpaceInnerViewInnerView}>
                <Button
                  style={[
                    styles.buttons,
                    {
                      backgroundColor: this.state.pressed1
                        ? "#eeae30"
                        : "#ffffff"
                    }
                  ]}
                  onPress={this.props.onPressDeleteButton}
                  disabled={this.props.deleteDisabled}
                  onPressIn={() => this.setState({ pressed1: true })}
                  onPressOut={() => this.setState({ pressed1: false })}
                >
                  <Icon
                    name="md-remove"
                    style={[
                      styles.buttonIcons,
                      {
                        color: this.state.pressed1 ? "#ffffff" : "#eeae30"
                      }
                    ]}
                  />
                </Button>
              </View>
              <View style={styles.greetingsSpaceInnerViewInnerView}>
                <Button
                  style={[
                    styles.buttons,
                    ,
                    {
                      backgroundColor: this.state.pressed2
                        ? "#eeae30"
                        : "#ffffff"
                    }
                  ]}
                  onPress={this.props.onPressMoveUp}
                  disabled={this.props.moveUpDisabled}
                  onPressIn={() => this.setState({ pressed2: true })}
                  onPressOut={() => this.setState({ pressed2: false })}
                >
                  <Icon
                    name="arrow-up"
                    style={[
                      styles.buttonIcons,
                      {
                        color: this.state.pressed2 ? "#ffffff" : "#eeae30"
                      }
                    ]}
                  />
                </Button>
              </View>
              <View style={styles.greetingsSpaceInnerViewInnerView}>
                <Button
                  style={[
                    styles.buttons,
                    {
                      backgroundColor: this.state.pressed3
                        ? "#eeae30"
                        : "#ffffff"
                    }
                  ]}
                  onPress={this.props.onPressMoveDown}
                  disabled={this.props.moveDownDisabled}
                  onPressIn={() => this.setState({ pressed3: true })}
                  onPressOut={() => this.setState({ pressed3: false })}
                >
                  <Icon
                    name="arrow-down"
                    style={[
                      styles.buttonIcons,
                      {
                        color: this.state.pressed3 ? "#ffffff" : "#eeae30"
                      }
                    ]}
                  />
                </Button>
              </View>
            </View>
          </View>
          <View style={styles.listSpace}>
            {this.props.excerciseData.length > 0 ? (
              <ImagesFolderList
                checkBoxChange={this.props.checkBoxChange}
                listData={this.props.excerciseData}
                switchToggled={this.props.switchToggled}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#eee"
                }}
              >
                <Text>Feeling pretty lonely in here!</Text>
              </View>
            )}
          </View>
        </View>
      </Container>
    );
  }
}
export default ImagesFolder;
