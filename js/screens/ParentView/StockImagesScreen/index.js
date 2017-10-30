import React from "react";
import StockImages from "../../../../storybook/stories/screens/StockImages";
import { connect } from "react-redux";
import { Spinner, View } from "native-base";

class StockImagesScreen extends React.Component {
  static navigationOptions = {
    title: "StockImagesScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      stockImages: this.props.stockImages,
      imagesLoaded: true
    };
  }

  componentWillMount() {
    this.props.dispatch({ type: "SET_STOCK_IMAGE_LIST" });
  }
  componentDidUpdate() {
    if (this.props.imagesLoaded && this.state.imagesLoaded) {
      this.setState({
        stockImages: this.props.stockImages,
        imagesLoaded: false
      });
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StockImages
          back={() => this.props.navigation.navigate("AddFolder")}
          excerciseData={this.props.stockImages}
          onDownloadPress={item => {
            this.props.navigation.navigate("AddFolder", {
              stockImages: item.dataFolderContent,
              noAddedImages: false
            });
          }}
        />
        {this.props.imagesLoaded ? (
          <View />
        ) : (
          <Spinner
            color="#0067a0"
            style={{ position: "absolute", left: "45%", top: "50%" }}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    parent: store.user.parent,
    child: store.user.child,
    stockImages: store.stockImageList,
    imagesLoaded: store.loaded.stockImagesLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockImagesScreen);
