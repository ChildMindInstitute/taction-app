import React from "react";
import ImagesFolderList from "../../components/ImagesFolderList";
import Button2 from "../../components/Button";
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
          isRightRequired={true}
          leftIconStyle={styles.HeaderLeftStyle}
          leftPress={this.props.DrawerOpen}
          leftIconName="menu"
          headerStyle={styles.HeaderStyle}
          Title="Images Folder"
          TitleStyle={styles.HeaderLeftStyle}
        >
          {this.state.CheckedItems.length > 0 ? (
            <Button
              transparent
              onPress={() => this.props.OnPressDeleteButton(CheckedItems)}
            >
              <Icon name="trash" style={{ color: "#fff" }} />
            </Button>
          ) : (
            <View />
          )}
        </HeaderCommon>
        <View style={styles.ContentStyle}>
          <View style={styles.GreetingsSpace}>
            <Button2
              OnPress={this.props.OnPressSubmitButton}
              SubmitButtonStyle={styles.AddFolderButtonStyle}
              ButtonText="+ AddFolder"
            />
          </View>
          <View style={styles.ListSpace}>
            <ImagesFolderList
              CheckBoxChange={(ListItem, checked) => {
                this.MaintainCheckedItems(ListItem, checked);
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
