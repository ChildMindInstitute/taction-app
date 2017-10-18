import React from "react";
import ImagesFolderList from "../../components/ImagesFolderList";
import HeaderCommon from "../../components/Header";
import { Container, View, Button, Icon } from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
let checkedItems = [];
class ListContent extends React.Component {
  static navigationOptions = {
    title: "ListContent",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: [],
      pressed: false,
      pressed1: false,
      pressed2: false,
      pressed3: false
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
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
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
                  onPress={this.props.onPressSubmitButton}
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
                  onPress={() => this.props.onPressDeleteButton(checkedItems)}
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
                  onPress={() => this.props.onPressMoveUp(checkedItems[0])}
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
                  onPress={() => this.props.onPressMoveDown(checkedItems[0])}
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
              listData={this.props.excerciseData}
              switchToggled={this.props.switchToggled}
            />
          </View>
        </View>
      </Container>
    );
  }
}
export default ListContent;
