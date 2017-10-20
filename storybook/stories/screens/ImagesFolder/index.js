import React from "react";
import ImagesFolderList from "../../components/ImagesFolderList";
import HeaderCommon from "../../components/Header";
import { Container, View, Button, Icon } from "native-base";
import styles from "./styles";
let checkedItems = [];
class ImagesFolder extends React.Component {
  static navigationOptions = {
    title: "ImagesFolder",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: [],
      pressed: false,
      pressed1: false,
      pressed2: false,
      pressed3: false,
      operationPerformed: false
    };
    this.maintainCheckedItems = this.maintainCheckedItems.bind(this);
  }
  maintainCheckedItems(listItem, checked) {
    if (this.state.checkedItems.indexOf(listItem) == -1 && checked) {
      checkedItems.push(listItem);
      this.setState({
        checkedItems: checkedItems
      });
    } else {
      checkedItems.splice(checkedItems.indexOf(listItem), 1);
      this.setState({
        checkedItems: checkedItems
      });
    }
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
          title="Images Folder"
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
                  onPress={() => {
                    this.setState({ operationPerformed: true });
                    let temp = checkedItems.slice();
                    checkedItems.length = 0;
                    this.props.onPressDeleteButton(temp);
                  }}
                  disabled={this.state.checkedItems.length <= 0}
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
                  onPress={() => {
                    this.setState({ operationPerformed: true });
                    let temp = checkedItems.slice();
                    checkedItems.length = 0;
                    this.props.onPressMoveUp(temp[0]);
                  }}
                  disabled={!(this.state.checkedItems.length == 1)}
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
                  onPress={() => {
                    this.setState({ operationPerformed: true });
                    let temp = checkedItems.slice();
                    checkedItems.length = 0;
                    this.props.onPressMoveDown(temp[0]);
                  }}
                  disabled={!(this.state.checkedItems.length == 1)}
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
            <ImagesFolderList
              checkBoxChange={(listItem, checked) => {
                this.maintainCheckedItems(listItem, !checked);
              }}
              operationPerformedReset={() => {
                this.setState({ operationPerformed: false });
              }}
              operationPerformed={this.state.operationPerformed}
              listData={this.props.excerciseData}
              switchToggled={this.props.switchToggled}
            />
          </View>
        </View>
      </Container>
    );
  }
}
export default ImagesFolder;
