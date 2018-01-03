import React from "react";
import { connect } from "react-redux";
import Prizes from "../../../../storybook/stories/screens/PrizesChild";
import { View } from "native-base";
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
