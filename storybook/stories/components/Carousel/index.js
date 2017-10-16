import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  Animated,
  Dimensions,
  PanResponder
} from "react-native";
import { Left, Right, Body, Button } from "native-base";
import styles from "./styles";

const SWIPE_THRESHOLD = 0.25;

class SwipeableParallaxCarousel extends Component {
  static defaultProps = {
    height: 200,
    navigationColor: "#0067a0",
    onPress: () => {}
  };
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (event, gesture) => {
        return Math.abs(gesture.dx) > 5;
      },
      onPanResponderGrant: () => {
        if (this.props.parentScrollViewRef)
          this.props.parentScrollViewRef.setNativeProps({
            scrollEnabled: false
          });
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD * this.state.screenWidth) {
          if (this.state.currentItem === 0) {
            this._resetPosition();
          } else this._forceSwipe("right");
        } else if (gesture.dx < -SWIPE_THRESHOLD * this.state.screenWidth) {
          if (this.state.currentItem === this.props.data.length - 1) {
            this._resetPosition();
          } else this._forceSwipe("left");
        } else {
          this._resetPosition();
        }
        if (this.props.parentScrollViewRef)
          this.props.parentScrollViewRef.setNativeProps({
            scrollEnabled: true
          });
      }
    });
    this.panResponder = panResponder;
    this.position = position;

    this.state = {
      currentItem: 0,
      nextItem: 0,
      screenWidth: Dimensions.get("window").width
    };
  }

  _forceSwipe(direction) {
    const distance =
      direction === "right" ? this.state.screenWidth : -this.state.screenWidth;
    const currentitem = this.state.currentItem;
    const newitem = direction === "right" ? currentitem - 1 : currentitem + 1;
    this.setState({ nextItem: newitem });
    Animated.spring(this.position, {
      toValue: { x: distance, y: 0 }
    }).start(() => this._onSwipeComplete(direction, newitem));
  }

  _onSwipeComplete(direction, newitem) {
    this.position.setValue({ x: 0, y: 0 });
    this.setState({ currentItem: newitem });
  }

  _resetPosition() {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }
  _getOverlay(overlayPath, height) {
    if (overlayPath)
      return (
        <Image
          source={overlayPath}
          style={[styles.overlay, { height, width: this.state.screenWidth }]}
        />
      );
    return null;
  }
  _getTitle(item, titleColor) {
    if (item.title) {
      return (
        <View
          style={[
            styles.itemTitleContainer,
            this._getTitleAlign(),
            this._getTitlePadding()
          ]}
        >
          <Text style={[styles.itemTitle, { color: titleColor }]}>
            {item.title}
          </Text>
          {item.subtitle && (
            <Text style={[styles.itemSubtitle, { color: titleColor }]}>
              {item.subtitle}
            </Text>
          )}
        </View>
      );
    }
    return null;
  }
  _getTitleAlign() {
    if (this.props.align === "center") return { alignItems: "center" };
    if (this.props.align === "right") return { alignItems: "flex-end" };
    return { alignItems: "flex-start" };
  }
  _getTitlePadding() {
    if (this.props.navigation) return { paddingBottom: 50 };
    return null;
  }
  _getItemStyle(index) {
    const { position } = this;
    const zIndex = index === this.state.currentItem ? 0 : 1;
    const defaultmargin =
      (index - this.state.currentItem) * this.state.screenWidth;
    let deltaleft = this.state.screenWidth;
    if (this.props.parallax && index === this.state.currentItem)
      deltaleft = this.state.screenWidth / 4;
    if (
      !this.props.parallax &&
      this.state.currentItem === this.props.data.length - 1
    )
      deltaleft = this.state.screenWidth / 4;
    let deltaright = this.state.screenWidth;
    if (this.props.parallax && index === this.state.currentItem)
      deltaright = this.state.screenWidth / 4;
    if (!this.props.parallax && this.state.currentItem === 0)
      deltaright = this.state.screenWidth / 4;
    const margin = position.x.interpolate({
      inputRange: [-this.state.screenWidth, 0, this.state.screenWidth],
      outputRange: [
        defaultmargin - deltaleft,
        defaultmargin,
        defaultmargin + deltaright
      ]
    });
    return { left: margin, zIndex, elevation: zIndex };
  }
  _renderItems() {
    const { data, height, overlayPath, titleColor } = this.props;
    return data.map((item, index) => {
      return (
        <Animated.View
          key={item.id}
          {...this.panResponder.panHandlers}
          style={[
            styles.itemContainer,
            { height, width: this.state.screenWidth },
            this._getItemStyle(index)
          ]}
        >
          <View style={styles.touchableContainer} activeOpacity={0.98}>
            <ImageBackground source={item.imagePath} style={styles.itemImage}>
              {this._getOverlay(overlayPath, height)}
              {this._getTitle(item, titleColor)}
            </ImageBackground>
          </View>
          <View
            style={{
              flex: 1,
              position: "absolute",
              height,
              width: this.state.screenWidth,
              backgroundColor: "#000",
              opacity: 0.5
            }}
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              width: 200,
              height: 50,
              borderColor: "#0067a0",
              borderWidth: 1,
              top: 130,
              left: 150
            }}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                width: 20,
                height: 20,
                borderBottomColor: "#0067a0",
                borderBottomWidth: 1,
                borderRightColor: "#0067a0",
                borderRightWidth: 1,
                transform: [{ rotate: "45deg" }],
                top: 39,
                left: 110,
                justifyContent: "center"
              }}
            />
            <Text style={{ alignSelf: "center" }}>{item.tooTipText}</Text>
          </View>
        </Animated.View>
      );
    });
  }
  _renderNavigation() {
    const { navigation } = this.props;
    if (navigation) {
      return (
        <View style={styles.navigationContainer}>
          <Left style={{ flex: 2 }}>
            <Button transparent onPress={() => this.props.SkipPress()}>
              <Text style={{ fontSize: 20, color: "#aaa" }}>Skip</Text>
            </Button>
          </Left>
          <Body
            style={{ flexDirection: "row", flex: 8, justifyContent: "center" }}
          >
            {this._renderNavigationItems()}
          </Body>
          <Right style={{ flex: 2 }}>
            <Button
              transparent
              onPress={() => {
                if (this.state.currentItem == 0)
                  this.setState({ currentItem: this.state.currentItem + 1 });
                else this.setState({ currentItem: this.state.currentItem - 1 });
              }}
            >
              <Text style={{ fontSize: 20, color: "#0067a0" }}>Next</Text>
            </Button>
          </Right>
        </View>
      );
    }
    return null;
  }
  _renderNavigationItems() {
    const { data, navigationColor, navigationType } = this.props;
    // Type of item (dots == default, bars, squares)
    let typeItem = null;
    if (navigationType === "bars") typeItem = styles.navigationItemBars;
    if (navigationType === "squares") typeItem = styles.navigationItemSquares;

    return data.map((item, index) => {
      // Current item selection
      let currentItem = null;
      if (index === this.state.nextItem)
        currentItem = {
          backgroundColor: navigationColor,
          transform: [{ scale: 2 }]
        };
      return (
        <Animated.View
          key={index}
          style={[styles.navigationItem, typeItem, currentItem]}
        />
      );
    });
  }
  _onLayout() {
    this.setState({ screenWidth: Dimensions.get("window").width });
  }
  render() {
    return (
      <View onLayout={this._onLayout.bind(this)}>
        <View
          style={{ height: this.props.height, width: this.state.screenWidth }}
        >
          {this._renderItems()}
          {this._renderNavigation()}
        </View>
      </View>
    );
  }
}

export default SwipeableParallaxCarousel;
