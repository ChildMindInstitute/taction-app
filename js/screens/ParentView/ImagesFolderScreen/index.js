import React from "react";
import ImagesFolder from "../../../../storybook/stories/screens/ImagesFolder";
const ExcerciseData = [
  {
    Name: "Spider",
    Points: 100,
    Taps: 13,
    TotalTaps: 20,
    Stars: require("../../../assets/all_stars.png"),
    IsContentVisible: true,
    DataFolderContent: [
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/spiderman.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      }
    ]
  },
  {
    Name: "Ball",
    Taps: 13,
    TotalTaps: 20,
    Points: 80,
    Stars: require("../../../assets/two_stars.png"),
    IsContentVisible: true,
    DataFolderContent: [
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: true
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      },
      {
        Image: require("../../../assets/ball1.jpg"),
        Taps: 3,
        TotalTaps: 8,
        IsCompleted: false
      }
    ]
  }
];
class ImagesFolderScreen extends React.Component {
  static navigationOptions = {
    title: "ImagesFolderScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      IsAvailableToChild: false,
      CheckedItems: []
    };
  }

  render() {
    return (
      <ImagesFolder
        DrawerOpen={() => {
          this.props.navigation.navigate("DrawerOpen");
        }}
        TotalPoints={100}
        OnPressSubmitButton={() => {
          this.props.navigation.navigate("AddFolder");
        }}
        ExcerciseData={ExcerciseData}
        SwitchToggled={(item, onOff) => {
          console.log(item + " " + onOff);
        }}
        StatusBarStyle="light-content"
        OnPressDeleteButton={CheckedItems => console.log(CheckedItems)}
        OnPressMoveDown={CheckedItem => console.log(CheckedItem)}
        OnPressMoveUp={CheckedItem => console.log(CheckedItem)}
      />
    );
  }
}
export default ImagesFolderScreen;
