import React from "react";
import PropTypes from "prop-types";
import { Text, View, Card } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import Grid from "react-native-grid-component";
import styles from "./styles";
const DashboardChildList = props => (
  <View style={styles.mainView}>
    <Grid
      style={styles.gridStyle}
      renderItem={(data, i) => (
        <TouchableOpacity
          transparent
          onPress={() => props.itemPress(data)}
          style={[
            styles.gridItemButtonStyle,
            { opacity: data.isPlayed ? 0.3 : 1 }
          ]}
        >
          <Card>
            <View style={styles.cardView} key={i}>
              <Image
                source={data.image}
                style={styles.cardImage}
                resizeMethod="auto"
                resizeMode="contain"
              />
              <Text style={styles.cardText}>{data.name}</Text>
              {data.IsPlayed ? (
                <Image
                  source={data.stars}
                  style={styles.cardStarImage}
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
      data={props.excercisesAvailable}
      itemsPerRow={3}
    />
  </View>
);

DashboardChildList.propTypes = {
  excercisesAvailable: PropTypes.array,
  itemPress: PropTypes.func
};

export { DashboardChildList as default };
