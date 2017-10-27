import React from "react";
import StockImages from "../../../../storybook/stories/screens/StockImages";
import { connect } from "react-redux";
class StockImagesScreen extends React.Component {
  static navigationOptions = {
    title: "StockImagesScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      stockImages: this.props.stockImages
    };
  }

  componentWillMount() {
    this.props.dispatch({ type: "SET_STOCK_IMAGE_LIST" });
  }
  componentWillUpdate() {
    console.log(this.props.stockImages, "component Did riecieve props");
    this.setState({ stockImages: this.props.stockImages });
  }

  componentDidMount() {
    console.log("component didmount");
    this.setState({ stockImages: this.props.stockImages });
  }

  render() {
    return (
      <StockImages
        back={() => this.props.navigation.navigate("AddFolder")}
        excerciseData={this.state.stockImages}
        onDownloadPress={item => {
          this.props.navigation.navigate("AddFolder", {
            stockImages: item.dataFolderContent,
            noAddedImages: false
          });
        }}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    parent: store.user.parent,
    child: store.user.child,
    stockImages: store.stockImageList
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockImagesScreen);
