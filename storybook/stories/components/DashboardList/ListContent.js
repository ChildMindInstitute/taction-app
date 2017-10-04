import React from "react";
import { ListItem, Text, Left, Right, Body, View } from "native-base";
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
        <View style={styles.ListItem1stViewStyle}>
          <View style={styles.ListItem2ndViewStyle}>
            <Left style={styles.ListItemLeftStyle}>
              <View style={styles.ListItemLeft1stViewStyle}>
                <Image
                  source={this.props.ListData.DataFolderContent[0].Image}
                  style={styles.ListItemLeftImageStyle}
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>
              <View style={styles.ListItemLeft2ndViewStyle}>
                <Text style={styles.ListItemLeft2ndViewTextStyle}>
                  {this.props.ListData.Name}
                </Text>
              </View>
            </Left>
            <Body style={styles.ListItemBodyStyle}>
              <Text style={styles.ListItemBodyTextStyle}>
                {this.props.ListData.Points}
              </Text>
              <Image
                source={this.props.ListData.Stars}
                style={styles.ListItemBodyImageStyle}
              />
            </Body>
            <Right style={styles.ListItemRightStyle}>
              <View style={styles.ListItemRightViewStyle}>
                <Text note>Taps</Text>
                <View style={styles.ListItemRightViewInnerViewStyle}>
                  <Text>
                    {this.props.ListData.Taps +
                      "/" +
                      this.props.ListData.TotalTaps}
                  </Text>
                </View>
              </View>
            </Right>
          </View>
          {this.state.IsContentVisible ? (
            <View style={styles.ListItemGridViewStyle}>
              <Grid
                style={styles.ListItemGrid}
                renderItem={data => (
                  <Image
                    source={data.Image}
                    style={[
                      styles.ListItemGridItemStyle,
                      {
                        opacity: data.IsCompleted ? 1 : 0.7
                      }
                    ]}
                    resizeMethod="auto"
                    resizeMode="contain"
                  >
                    <View style={styles.ListItemGridItemInnerViewStyle}>
                      <Text style={styles.ListItemGridItemInnerViewTextStyle}>
                        {data.Taps}/{data.TotalTaps}{" "}
                      </Text>
                    </View>
                  </Image>
                )}
                data={this.props.ListData.DataFolderContent}
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
