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
      switched: this.props.listItem.status,
      isContentVisible: false
    };
  }
  render() {
    return (
      <ListItem
        onPress={() => {
          this.setState({ isContentVisible: !this.state.isContentVisible });
        }}
        style={styles.listItemStyle}
      >
        <View style={styles.listItemInnerViewStyle}>
          <View style={styles.listItemInnerViewInnerViewStyle}>
            <Left style={styles.listItemInnerViewInnerViewLeftStyle}>
              <View
                style={styles.listItemInnerViewInnerViewLeftInnerView1Style}
              >
                <CheckBox
                  label=""
                  checked={this.state.checked}
                  onChange={checked => {
                    this.setState({ checked: !this.state.checked });
                    this.props.checkBoxChange(this.props.listItem, checked);
                  }}
                  checkboxStyle={{
                    borderRadius: 0,
                    borderWidth: 1,
                    borderColor: "#ccc"
                  }}
                  uncheckedImage={require("../../../../js/assets/empty.png")}
                  checkedImage={require("../../../../js/assets/chkbx-tick.png")}
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
                style={styles.listItemInnerViewInnerViewLeftInnerView2Style}
              >
                <Image
                  source={this.props.listItem.dataFolderContent[0].image}
                  style={
                    styles.listItemInnerViewInnerViewLeftInnerView2ImageStyle
                  }
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>

              <View
                style={styles.listItemInnerViewInnerViewLeftInnerView3Style}
              >
                <Text
                  style={
                    styles.listItemInnerViewInnerViewLeftInnerView3TextStyle
                  }
                >
                  {this.props.listItem.name}
                </Text>
              </View>
              <View style={styles.listItemInnerViewInnerViewBodyInnerViewStyle}>
                <Text
                  style={
                    styles.listItemInnerViewInnerViewBodyInnerViewBadgeStyle
                  }
                >
                  {"(" + this.props.listItem.dataFolderContent.length + ")"}
                </Text>
              </View>
            </Body>
            <Right style={styles.listItemInnerViewInnerViewRightStyle}>
              <Switch
                onTintColor="#eeae30"
                value={this.state.switched}
                onValueChange={() => {
                  this.setState({ switched: !this.state.switched });
                  this.props.switchToggled(
                    this.props.listItem,
                    !this.state.switched
                  );
                }}
              />
            </Right>
          </View>
          {this.state.isContentVisible ? (
            <View style={styles.listItemInnerViewGridOuterViewStyle}>
              <Grid
                style={styles.listItemInnerViewGridViewStyle}
                renderItem={(data, i) => (
                  <Image
                    source={data.image}
                    style={[
                      styles.listItemInnerViewGridItemImageStyle,
                      {
                        opacity: data.isCompleted ? 1 : 0.7
                      }
                    ]}
                    resizeMethod="auto"
                    resizeMode="contain"
                    key={i}
                  />
                )}
                data={this.props.listItem.dataFolderContent}
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
