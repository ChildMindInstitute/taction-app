import React from "react";
import StockImagesList from "../../components/StockImagesList";
import HeaderCommon from "../../components/Header";
import { Container, View } from "native-base";
import styles from "./styles";
class StockImages extends React.Component {
  static navigationOptions = {
    title: "StockImages",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={styles.containerStyle}>
        <HeaderCommon
          isRightRequired={false}
          leftIconStyle={styles.headerLeftStyle}
          leftPress={this.props.back}
          leftIconName="arrow-back"
          headerStyle={styles.headerStyle}
          title="Stock Images"
          titleStyle={styles.headerLeftStyle}
        />
        <View style={styles.contentStyle}>
          <View style={styles.listSpace}>
            <StockImagesList
              listData={this.props.excerciseData}
              onDownloadPress={this.props.onDownloadPress}
            />
          </View>
        </View>
      </Container>
    );
  }
}
export default StockImages;
