import React from "react";
import { ListItem, Text, Left, Right, Body, View, Icon } from "native-base";
import { Image } from "react-native";
import Grid from "react-native-grid-component";
import styles from "./styles";
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
      <ListItem
        onPress={() => {
          this.setState({ isContentVisible: !this.state.isContentVisible });
        }}
        style={styles.listItemStyle}
      >
        <View style={styles.listItem1stViewStyle}>
          <View style={styles.listItem2ndViewStyle}>
            <Left style={styles.listItemLeftStyle}>
              <View style={styles.listItemLeft1stViewStyle}>
                <Image
                  source={
                    this.props.listData.dataFolderContent[
                      Math.floor(
                        Math.random() *
                          this.props.listData.dataFolderContent.length
                      )
                    ].image
                  }
                  style={styles.listItemLeftImageStyle}
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>
              <View style={styles.listItemLeft2ndViewStyle}>
                <Text style={styles.listItemLeft2ndViewTextStyle}>
                  {this.props.listData.name}
                </Text>
              </View>
            </Left>
            <Body style={styles.listItemBodyStyle}>
              <Text style={styles.listItemBodyTextStyle}>
                {this.props.listData.points}
              </Text>
              <Image
                source={this.props.listData.stars}
                style={styles.listItemBodyImageStyle}
                resizeMethod="auto"
                resizeMode="contain"
              />
            </Body>
            <Right style={styles.listItemRightStyle}>
              <View style={styles.listItemRightViewStyle}>
                <View style={styles.listItemRightViewInnerViewStyle}>
                  <Text
                    style={[
                      styles.listItemGridItemInnerViewText2Style,
                      { fontSize: 22 }
                    ]}
                  >
                    {this.props.listData.correctTaps}
                  </Text>
                  <Icon
                    name="md-checkmark"
                    style={{ fontSize: 30, color: "green" }}
                  />
                </View>
                <View style={styles.listItemRightViewInnerViewStyle}>
                  <Text
                    style={[
                      styles.listItemGridItemInnerViewTextStyle,
                      { fontSize: 22 }
                    ]}
                  >
                    {this.props.listData.wrongTaps}
                  </Text>
                  <Icon
                    name="md-close"
                    style={{ fontSize: 30, color: "red" }}
                  />
                </View>
              </View>
            </Right>
          </View>
          {this.state.isContentVisible ? (
            <View style={styles.listItemGridViewStyle}>
              <Grid
                style={styles.listItemGrid}
                renderItem={data => (
                  <Image
                    source={data.image}
                    style={[
                      styles.listItemGridItemStyle,
                      { opacity: data.isCompleted ? 0.4 : 1 }
                    ]}
                    resizeMethod="auto"
                    resizeMode="contain"
                  >
                    <View style={styles.listItemGridItemInnerViewStyle}>
                      <View
                        style={styles.listItemGridItemInnerViewInnerViewStyle}
                      >
                        <Icon
                          name="md-checkmark"
                          style={{ fontSize: 20, color: "green" }}
                        />
                        <Text
                          style={styles.listItemGridItemInnerViewText2Style}
                        >
                          {data.correctTaps}
                        </Text>
                      </View>
                      <View
                        style={styles.listItemGridItemInnerViewInnerViewStyle}
                      >
                        <Icon
                          name="md-close"
                          style={{ fontSize: 20, color: "red" }}
                        />
                        <Text style={styles.listItemGridItemInnerViewTextStyle}>
                          {data.wrongTaps}
                        </Text>
                      </View>
                    </View>
                  </Image>
                )}
                data={this.props.listData.dataFolderContent}
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
