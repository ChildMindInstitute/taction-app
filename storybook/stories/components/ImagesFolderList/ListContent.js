import React from "react";
import { ListItem, Text, Left, Right, Body, View, Switch } from "native-base";
import { Image } from "react-native";
import CheckBox from "react-native-checkbox";
import GridItem from "./GridItem";
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
      isContentVisible: false
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: "#fff" }}>
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
                    checked={this.props.listItem.checked}
                    onChange={this.props.checkBoxChange}
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
                    source={
                      this.props.listItem.imageList.dataFolderContent[0].image
                    }
                    style={
                      styles.listItemInnerViewInnerViewLeftInnerView2ImageStyle
                    }
                    resizeMethod="auto"
                    resizeMode="cover"
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
                    {this.props.listItem.imageList.name}
                  </Text>
                </View>
                <View
                  style={styles.listItemInnerViewInnerViewBodyInnerViewStyle}
                >
                  <Text
                    style={
                      styles.listItemInnerViewInnerViewBodyInnerViewBadgeStyle
                    }
                  >
                    {"(" +
                      this.props.listItem.imageList.dataFolderContent.length +
                      ")"}
                  </Text>
                </View>
              </Body>
              <Right style={styles.listItemInnerViewInnerViewRightStyle}>
                <Switch
                  onTintColor="#eeae30"
                  value={this.props.listItem.switched}
                  onValueChange={this.props.switchToggled}
                />
              </Right>
            </View>
          </View>
        </ListItem>
        {this.state.isContentVisible ? (
          <View style={styles.listItemInnerViewGridOuterViewStyle}>
            <Grid
              style={styles.listItemInnerViewGridViewStyle}
              renderItem={(data, i) => <GridItem data={data} key={i} />}
              data={this.props.listItem.imageList.dataFolderContent}
              itemsPerRow={4}
            />
          </View>
        ) : (
          false
        )}
      </View>
    );
  }
}
export default ListContent;
