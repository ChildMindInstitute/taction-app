import React from "react";
import { connect } from "react-redux";
import Prizes from "../../../../storybook/stories/screens/PrizesChild";
import { Toast } from "native-base";
import { View } from "native-base";
import { Alert } from "react-native";
class PrizesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      placeholderPoints: "",
      placeholderDesc: "",
      prizeId: "",
      edit: false
    };
    this.input = {
      pointsReq: "",
      prizeDesc: ""
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: "SET_PRIZE_LIST",
      payload: this.props.child.childID
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Prizes
          childsPoints={this.props.child.childDetails.totalScore}
          data={this.props.prizeList}
          back={() => this.props.navigation.goBack()}
          onTickPress={item => {
            Alert.alert(
              "",
              "Are you sure you have recieved this prize from your parent?",
              [
                {
                  text: "OK",

                  onPress: (() => {
                    Toast.show({
                      text: "Done",
                      position: "bottom",
                      buttonText: "Awaiting confirmation from your child",
                      duration: 5000,
                      type: "success"
                    });
                    this.props.dispatch({
                      type: "UPDATE_PRIZE_TO_RECIEVED",
                      payload: {
                        childID: this.props.child.childID,
                        prizeID: item.prizeID
                      }
                    });
                  }).bind(this)
                },
                { text: "Cancel", onPress: () => {} }
              ]
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    child: store.user.child,
    prizeList: store.prizeList
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrizesScreen);
