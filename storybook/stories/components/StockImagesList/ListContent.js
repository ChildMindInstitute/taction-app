import React from "react";
import {
  ListItem,
  Text,
  Left,
  Right,
  Body,
  View,
  Icon,
  Button
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
      isContentVisible: false,
      dataLength: 0
    };
  }

  componentDidMount() {
    this.setState({ dataLength: this.props.listItem.dataFolderContent.length });
  }

  componentDidUpdate() {
    if (
      this.props.listItem.dataFolderContent.length > 0 &&
      this.state.dataLength == 0
    ) {
      this.setState({
        dataLength: this.props.listItem.dataFolderContent.length
      });
    }
  }

  render() {
    return (
      <View>
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
                  style={styles.listItemInnerViewInnerViewLeftInnerView2Style}
                >
                  <Image
                    source={this.props.listItem.dataFolderContent[0]}
                    style={
                      styles.listItemInnerViewInnerViewLeftInnerView2ImageStyle
                    }
                    resizeMethod="auto"
                    resizeMode="contain"
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
                <View
                  style={styles.listItemInnerViewInnerViewBodyInnerViewStyle}
                >
                  <Text
                    style={
                      styles.listItemInnerViewInnerViewBodyInnerViewBadgeStyle
                    }
                  >
                    {"(" + this.state.dataLength + ")"}
                  </Text>
                </View>
              </Body>
              <Right style={styles.listItemInnerViewInnerViewRightStyle}>
                <Button
                  transparent
                  onPress={() =>
                    this.props.onDownloadPress(this.props.listItem)}
                >
                  <Icon
                    name="ios-cloud-download"
                    style={{ color: "#eeae30" }}
                  />
                </Button>
              </Right>
            </View>
          </View>
        </ListItem>
        {this.state.isContentVisible ? (
          <View style={styles.listItemInnerViewGridOuterViewStyle}>
            <Grid
              style={styles.listItemInnerViewGridViewStyle}
              renderItem={(data, i) => (
                <Image
                  source={data}
                  style={styles.listItemInnerViewGridItemImageStyle}
                  resizeMethod="auto"
                  resizeMode="stretch"
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
    );
  }
}
export default ListContent;
