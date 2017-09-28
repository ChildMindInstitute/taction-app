import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  View,
  Icon
} from "native-base";
import { Image } from "react-native";
import Grid from "react-native-grid-component";
const DashboardList = props => (
  <List
    style={props.ListStyle}
    dataArray={props.ListData}
    renderRow={item => (
      <ListItem
        onPress={() => props.ListItemPress(item)}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "#ccc",
          marginRight: 0
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Left style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={
                    item.DataFolderContent[
                      Math.floor(Math.random() * item.DataFolderContent.length)
                    ]
                  }
                  style={{ width: 35, height: 35 }}
                  resizeMethod="auto"
                  resizeMode="contain"
                />
              </View>

              <View
                style={{
                  flex: 3,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#0067a0",
                    marginTop: "5%"
                  }}
                >
                  {item.Name}
                </Text>
              </View>
            </Left>
            <Body
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 20, color: "black" }}>
                {item.Points}
              </Text>
              <Image source={item.Stars} style={{ width: 35, height: 12 }} />
            </Body>
            <Right style={{ flexDirection: "column" }}>
              <Text note>Duration</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: "3%"
                }}
              >
                <Icon
                  name="alarm"
                  style={{
                    color: "#eeae30",
                    fontSize: 20,
                    marginRight: "5%"
                  }}
                />
                <Text>{item.Duration}</Text>
              </View>
            </Right>
          </View>
          {item.IsContentVisible ? (
            <View
              style={{
                flex: 3,
                marginLeft: 0,
                marginRight: "-5%",
                marginBottom: "-3.75%"
              }}
            >
              <Grid
                style={{ flex: 1 }}
                renderItem={(data, i) => (
                  <Image
                    source={data}
                    style={{
                      flex: 1,
                      borderWidth: 0.4,
                      borderColor: "#ccc",
                      height: 80,
                      width: 40
                    }}
                    resizeMethod="auto"
                    resizeMode="contain"
                    key={i}
                  />
                )}
                data={item.DataFolderContent}
                itemsPerRow={4}
              />
            </View>
          ) : (
            <View />
          )}
        </View>
      </ListItem>
    )}
  />
);

DashboardList.propTypes = {
  ListData: PropTypes.array,
  IconName: PropTypes.string,
  ListStyle: PropTypes.object
};

export { DashboardList as default };
