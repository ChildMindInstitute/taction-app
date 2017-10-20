import React from "react";
import StockImages from "../../../../storybook/stories/screens/StockImages";
const data = [
  {
    name: "Spider",
    dataFolderContent: [
      require("../../../assets/spiderman.jpg"),
      require("../../../assets/spiderman.jpg"),
      require("../../../assets/spiderman.jpg"),
      require("../../../assets/spiderman.jpg"),
      require("../../../assets/spiderman.jpg"),
      require("../../../assets/spiderman.jpg"),
      require("../../../assets/spiderman.jpg"),
      require("../../../assets/spiderman.jpg")
    ]
  },
  {
    name: "Ball",
    dataFolderContent: [
      require("../../../assets/ball-1.jpg"),
      require("../../../assets/ball-1.jpg"),
      require("../../../assets/ball-1.jpg"),
      require("../../../assets/ball-1.jpg"),
      require("../../../assets/ball-1.jpg"),
      require("../../../assets/ball-1.jpg"),
      require("../../../assets/ball-1.jpg"),
      require("../../../assets/ball-1.jpg")
    ]
  }
];
class StockImagesScreen extends React.Component {
  static navigationOptions = {
    title: "StockImagesScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StockImages
        back={() => this.props.navigation.navigate("AddFolder")}
        excerciseData={data}
        onDownloadPress={item => {
          console.log(item);
        }}
      />
    );
  }
}

export default StockImagesScreen;
