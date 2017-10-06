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
    return <ListItem onPress={() => {
          this.setState({ IsContentVisible: !this.state.IsContentVisible });
        }} style={styles.ListItemStyle}>
        <View style={styles.ListItem1stViewStyle}>
          <View style={styles.ListItem2ndViewStyle}>
            <Left style={styles.ListItemLeftStyle}>
              <View style={styles.ListItemLeft1stViewStyle}>
                <Image source={this.props.ListData.DataFolderContent[Math.floor(Math.random() * this.props.ListData.DataFolderContent.length)].Image} style={styles.ListItemLeftImageStyle} resizeMethod="auto" resizeMode="contain" />
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
              <Image source={this.props.ListData.Stars} style={styles.ListItemBodyImageStyle} />
            </Body>
            <Right style={styles.ListItemRightStyle}>
              <View style={styles.ListItemRightViewStyle}>
                <View style={styles.ListItemRightViewInnerViewStyle}>
                  <Text
                    style={[
                      styles.ListItemGridItemInnerViewText2Style,
                      { fontSize: 22 }
                    ]}
                  >
                    {this.props.ListData.CorrectTaps}
                  </Text>
                  <Image source={require("../../../../js/assets/Tick.png")} style={styles.TickCrossImageDimenstions} resizeMode="contain" resizeMethod="auto" />
                </View>
                <View style={styles.ListItemRightViewInnerViewStyle}>
                  <Text
                    style={[
                      styles.ListItemGridItemInnerViewTextStyle,
                      { fontSize: 22 }
                    ]}
                  >
                    {this.props.ListData.WrongTaps}
                  </Text>
                  <Image source={require("../../../../js/assets/Cross.png")} style={styles.TickCrossImageDimenstions} resizeMode="contain" resizeMethod="auto" />
                </View>
              </View>
            </Right>
          </View>
          {this.state.IsContentVisible ? <View style={styles.ListItemGridViewStyle}>
              <Grid style={styles.ListItemGrid} renderItem={data => <Image source={data.Image} style={[styles.ListItemGridItemStyle, { opacity: data.IsCompleted ? 0.4 : 1 }]} resizeMethod="auto" resizeMode="contain">
                    <View style={styles.ListItemGridItemInnerViewStyle}>
                      <View style={styles.ListItemGridItemInnerViewInnerViewStyle}>
                        <Image source={require("../../../../js/assets/Tick.png")} style={styles.TickCrossImageDimenstions} resizeMode="contain" resizeMethod="auto" />
                        <Text
                          style={styles.ListItemGridItemInnerViewText2Style}
                        >
                          {data.CorrectTaps}
                        </Text>
                      </View>
                      <View style={styles.ListItemGridItemInnerViewInnerViewStyle}>
                        <Image source={require("../../../../js/assets/Cross.png")} style={styles.TickCrossImageDimenstions} resizeMode="contain" resizeMethod="auto" />
                        <Text
                          style={styles.ListItemGridItemInnerViewTextStyle}
                        >
                          {data.WrongTaps}
                        </Text>
                      </View>
                    </View>
                  </Image>} data={this.props.ListData.DataFolderContent} itemsPerRow={4} />
            </View> : <View />}
        </View>
      </ListItem>;
  }
}
export default ListContent;
