import React from "react";
import {
  ListItem,
  Text,
  Left,
  Right,
  Body,
  View,
  Switch,
  Badge,
  CheckBox
} from "native-base";
import { Image } from "react-native";
import styles from "./styles";
import Grid from "react-native-grid-component";
class ListContent extends React.Component {
  static navigationOptions = {
    title: "ListContent",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      switched: false,
      IsContentVisible: false
    };
  }
  render() {
    return (
      <ListItem
        onPress={() => {
          this.setState({ IsContentVisible: !this.state.IsContentVisible });
        }}
        style={styles.ListItemStyle}
      >
        <View style={styles.ListItemInnerViewStyle}>
          <View style={styles.ListItemInnerViewInnerViewStyle}>
            <Left style={styles.ListItemInnerViewInnerViewLeftStyle}>
              <View
                style={styles.ListItemInnerViewInnerViewLeftInnerView1Style}
              >
                <CheckBox
                  checked={this.state.checked}
                  onPress={checked => {
                    this.setState({ checked: !this.state.checked });
                    this.props.CheckBoxChange(this.props.ListItem, checked);
                  }}
                  style={
                    styles.ListItemInnerViewInnerViewLeftInnerView1CheckboxStyle
                  }
                />
              </View>
              <View
                style={styles.ListItemInnerViewInnerViewLeftInnerView2Style}
              >
                <Image
                  source={this.props.ListItem.DataFolderContent[0].Image}
                  style={
                    styles.ListItemInnerViewInnerViewLeftInnerView2ImageStyle
                  }
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>

              <View
                style={styles.ListItemInnerViewInnerViewLeftInnerView3Style}
              >
                <Text
                  style={
                    styles.ListItemInnerViewInnerViewLeftInnerView3TextStyle
                  }
                >
                  {this.props.ListItem.Name}
                </Text>
              </View>
            </Left>
            <Body>
              <View style={styles.ListItemInnerViewInnerViewBodyInnerViewStyle}>
                <Badge
                  style={
                    styles.ListItemInnerViewInnerViewBodyInnerViewBadgeStyle
                  }
                >
                  <Text>{this.props.ListItem.DataFolderContent.length}</Text>
                </Badge>
              </View>
            </Body>
            <Right style={styles.ListItemInnerViewInnerViewRightStyle}>
              <Switch
                onTintColor="#eeae30"
                value={this.state.switched}
                onValueChange={() => {
                  this.setState({ switched: !this.state.switched });
                  this.props.SwitchToggled(
                    this.props.ListItem,
                    !this.state.switched
                  );
                }}
              />
            </Right>
          </View>
          {this.state.IsContentVisible ? (
            <View style={styles.ListItemInnerViewGridOuterViewStyle}>
              <Grid
                style={styles.ListItemInnerViewGridViewStyle}
                renderItem={(data, i) => (
                  <Image
                    source={data.Image}
                    style={[
                      styles.ListItemInnerViewGridItemImageStyle,
                      {
                        opacity: data.IsCompleted ? 1 : 0.7
                      }
                    ]}
                    resizeMethod="auto"
                    resizeMode="contain"
                    key={i}
                  />
                )}
                data={this.props.ListItem.DataFolderContent}
                itemsPerRow={4}
              />
            </View>
          ) : (
            <View />
          )}
        </View>
      </ListItem>
    );
  }
}
export default ListContent;
