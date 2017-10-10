import React from "react";
import ImagesFolderList from "../../components/ImagesFolderList";
import HeaderCommon from "../../components/Header";
import { Container, View, Button, Icon } from "native-base";
import styles from "./styles";
let CheckedItems = [];
class ListContent extends React.Component {
  static navigationOptions = {
    title: "ListContent",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      CheckedItems: [],
      pressed: false,
      pressed1: false,
      pressed2: false,
      pressed3: false
    };
    this.MaintainCheckedItems = this.MaintainCheckedItems.bind(this);
  }
  MaintainCheckedItems(ListItem, checked) {
    if (this.state.CheckedItems.indexOf(ListItem) == -1 && checked) {
      CheckedItems.push(ListItem);
      this.setState({
        CheckedItems: CheckedItems
      });
    } else {
      CheckedItems.splice(CheckedItems.indexOf(ListItem), 1);
      this.setState({
        CheckedItems: CheckedItems
      });
    }
  }
  render() {
    return (
      <Container style={styles.ContainerStyle}>
        <HeaderCommon
          isRightRequired={false}
          leftIconStyle={styles.HeaderLeftStyle}
          leftPress={this.props.DrawerOpen}
          leftIconName="menu"
          headerStyle={styles.HeaderStyle}
          Title="Images Folder"
          TitleStyle={styles.HeaderLeftStyle}
        />
        <View style={styles.ContentStyle}>
          <View style={styles.GreetingsSpace}>
            <View style={styles.GreetingsSpaceInnerView}>
              <Button
                style={[
                  styles.AddButton,
                  {
                    backgroundColor: this.state.pressed ? "#eeae30" : "#ffffff"
                  }
                ]}
                onPress={this.props.OnPressSubmitButton}
                onPressIn={() => this.setState({ pressed: true })}
                onPressOut={() => this.setState({ pressed: false })}
              >
                <Icon
                  name="add"
                  style={[
                    styles.AddButtonIcon,
                    {
                      color: this.state.pressed ? "#ffffff" : "#eeae30"
                    }
                  ]}
                />
              </Button>
              <Button
                style={[
                  styles.OtherButtons,
                  {
                    backgroundColor: this.state.pressed1 ? "#eeae30" : "#ffffff"
                  }
                ]}
                onPress={() => this.props.OnPressDeleteButton(CheckedItems)}
                disabled={this.state.CheckedItems.length <= 0}
                onPressIn={() => this.setState({ pressed1: true })}
                onPressOut={() => this.setState({ pressed1: false })}
              >
                <Icon
                  name="remove"
                  style={[
                    styles.OtherButtonIcons,
                    {
                      color: this.state.pressed1 ? "#ffffff" : "#eeae30"
                    }
                  ]}
                />
              </Button>
              <Button
                style={[
                  styles.OtherButtons,
                  ,
                  {
                    backgroundColor: this.state.pressed2 ? "#eeae30" : "#ffffff"
                  }
                ]}
                onPress={() => this.props.OnPressMoveUp(CheckedItems[0])}
                disabled={!(this.state.CheckedItems.length == 1)}
                onPressIn={() => this.setState({ pressed2: true })}
                onPressOut={() => this.setState({ pressed2: false })}
              >
                <Icon
                  name="arrow-up"
                  style={[
                    styles.OtherButtonIcons,
                    {
                      color: this.state.pressed2 ? "#ffffff" : "#eeae30"
                    }
                  ]}
                />
              </Button>
              <Button
                style={[
                  styles.OtherButtons,
                  {
                    backgroundColor: this.state.pressed3 ? "#eeae30" : "#ffffff"
                  }
                ]}
                onPress={() => this.props.OnPressMoveDown(CheckedItems[0])}
                disabled={!(this.state.CheckedItems.length == 1)}
                onPressIn={() => this.setState({ pressed3: true })}
                onPressOut={() => this.setState({ pressed3: false })}
              >
                <Icon
                  name="arrow-down"
                  style={[
                    styles.OtherButtonIcons,
                    {
                      color: this.state.pressed3 ? "#ffffff" : "#eeae30"
                    }
                  ]}
                />
              </Button>
            </View>
          </View>
          <View style={styles.ListSpace}>
            <ImagesFolderList
              CheckBoxChange={(ListItem, checked) => {
                this.MaintainCheckedItems(ListItem, !checked);
              }}
              ListData={this.props.ExcerciseData}
              SwitchToggled={this.props.SwitchToggled}
            />
          </View>
        </View>
      </Container>
    );
  }
}
export default ListContent;
