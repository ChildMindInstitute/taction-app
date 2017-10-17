import React from "react";
import { ListItem, Text, Left, Right, Body, View, Switch } from "native-base";
import { Image } from "react-native";
import CheckBox from "react-native-checkbox";
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
      switched: this.props.ListItem.Status,
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
                  label=""
                  checked={this.state.checked}
                  onChange={checked => {
                    this.setState({ checked: !this.state.checked });
                    this.props.CheckBoxChange(this.props.ListItem, checked);
                  }}
                  checkboxStyle={{
                    borderRadius: 0,
                    borderWidth: 1,
                    borderColor: "#ccc"
                  }}
                  uncheckedImage={require("../../../../js/assets/Empty.png")}
                  checkedImage={require("../../../../js/assets/chkbxTick.png")}
                />
              </View>
            </Left>
            <Body
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                flex: 8
              }}
            >
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
              <View style={styles.ListItemInnerViewInnerViewBodyInnerViewStyle}>
                <Text
                  style={
                    styles.ListItemInnerViewInnerViewBodyInnerViewBadgeStyle
                  }
                >
                  {"(" + this.props.ListItem.DataFolderContent.length + ")"}
                </Text>
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
