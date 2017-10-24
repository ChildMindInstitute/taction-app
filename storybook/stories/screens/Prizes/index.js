import React from "react";
import PrizesList from "../../components/PrizesList";
import HeaderCommon from "../../components/Header";
import { Container, View, Button, Icon } from "native-base";
import styles from "./styles";
class ImagesFolder extends React.Component {
  static navigationOptions = {
    title: "ImagesFolder",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: []
    };
  }
  render() {
    return (
      <Container style={styles.containerStyle}>
        <HeaderCommon
          isRightRequired={true}
          leftIconStyle={styles.headerLeftStyle}
          leftPress={this.props.back}
          leftIconName="ios-arrow-back"
          headerStyle={styles.headerStyle}
          title="Images Folder"
          titleStyle={styles.headerLeftStyle}
        >
          <Button onPress={this.props.onAddPress} transparent>
            <Icon name="ios-add-circle" style={{ color: "#fff" }} />
          </Button>
        </HeaderCommon>
        <View style={styles.contentStyle}>
          <View style={styles.listSpace}>
            <PrizesList
              data={this.props.data}
              listItemPress={this.props.listItemPress}
              editPress={this.props.editPress}
              deletePress={this.props.deletePress}
            />
          </View>
        </View>
      </Container>
    );
  }
}
export default ImagesFolder;
