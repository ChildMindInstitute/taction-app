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
      CheckedItems: []
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
                style={styles.AddButton}
                onPress={this.props.OnPressSubmitButton}
              >
                <Icon name="add" style={styles.AddButtonIcon} />
              </Button>
              <Button
                style={styles.OtherButtons}
                onPress={() => this.props.OnPressDeleteButton(CheckedItems)}
                disabled={this.state.CheckedItems.length <= 0}
              >
                <Icon name="remove" style={styles.OtherButtonIcons} />
              </Button>
              <Button
                style={styles.OtherButtons}
                onPress={() => this.props.OnPressMoveUp(CheckedItems[0])}
                disabled={!(this.state.CheckedItems.length == 1)}
              >
                <Icon name="arrow-up" style={styles.OtherButtonIcons} />
              </Button>
              <Button
                style={styles.OtherButtons}
                onPress={() => this.props.OnPressMoveDown(CheckedItems[0])}
                disabled={!(this.state.CheckedItems.length == 1)}
              >
                <Icon name="arrow-down" style={styles.OtherButtonIcons} />
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
