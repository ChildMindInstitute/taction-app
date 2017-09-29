import React from "react";
import PropTypes from "prop-types";
import { Text, View, Card } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import Grid from "react-native-grid-component";
const DashboardChildList = props => (
  <View style={{ flex: 1, margin: "5%", alignContent: "center" }}>
    <Grid
      style={{ flex: 1 }}
      renderItem={(data, i) => (
        <TouchableOpacity
          transparent
          onPress={() => props.ItemPress(data)}
          style={{
            opacity: data.IsPlayed ? 0.3 : 1,
            height: 160,
            width: 110,
            marginLeft: "1%",
            marginBottom: "3%"
          }}
          key={i + "    "}
        >
          <Card key={i + " "}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "15%",
                height: 100
              }}
              key={i}
            >
              <Image
                source={data.Image}
                style={{ width: 50, height: 50 }}
                resizeMethod="auto"
                resizeMode="contain"
                key={i + "  "}
              />
              <Text key={i + "   "} style={{ fontSize: 14 }}>
                {data.Name}
              </Text>
              {data.IsPlayed ? (
                <Image
                  source={data.Stars}
                  style={{ width: 50, height: 15 }}
                  resizeMethod="auto"
                  resizeMode="contain"
                  key={i + "    "}
                />
              ) : (
                <View />
              )}
            </View>
          </Card>
        </TouchableOpacity>
      )}
      data={props.ExcercisesAvailable}
      itemsPerRow={3}
    />
  </View>
);

DashboardChildList.propTypes = {
  ExcercisesAvailable: PropTypes.array,
  ItemPress: PropTypes.func
};

export { DashboardChildList as default };
