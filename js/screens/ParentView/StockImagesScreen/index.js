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
  }

  componentWillMount() {
    this.props.dispatch({ type: "SET_STOCK_IMAGE_LIST" });
  }

  render() {
    return (
      <StockImages
        back={() => this.props.navigation.navigate("AddFolder")}
        excerciseData={this.props.stockImages}
        onDownloadPress={item => {
          console.log(item);
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
