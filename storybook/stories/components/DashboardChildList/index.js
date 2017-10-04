import React from "react";
import PropTypes from "prop-types";
import { Text, View, Card } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import Grid from "react-native-grid-component";
import styles from "./styles";
const DashboardChildList = props => (
  <View style={styles.MainView}>
    <Grid
      style={styles.GridStyle}
      renderItem={(data, i) => (
        <TouchableOpacity
          transparent
          onPress={() => props.ItemPress(data)}
          style={[
            styles.GridItemButtonStyle,
            { opacity: data.IsPlayed ? 0.3 : 1 }
          ]}
        >
          <Card>
            <View style={styles.CardView} key={i}>
              <Image
                source={data.Image}
                style={styles.CardImage}
                resizeMethod="auto"
                resizeMode="contain"
              />
              <Text style={styles.CardText}>{data.Name}</Text>
              {data.IsPlayed ? (
                <Image
                  source={data.Stars}
                  style={styles.CardStarImage}
                  resizeMethod="auto"
                  resizeMode="contain"
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
