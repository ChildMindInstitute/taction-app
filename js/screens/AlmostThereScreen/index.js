import React from "react";
import AlmostThere from "../../../storybook/stories/screens/AlmostThere";
import Db from "../../services";
import { connect } from "react-redux";
import { Toast } from "native-base";

class AlmostThereScreen extends React.Component {
  static navigationOptions = {
    title: "AlmostThereScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      getInPressed: false
    };
  }

  componentDidUpdate() {
    console.log("Get in");
    if (this.state.checked && this.props.loaded) {
      if (this.props.parent.emailVerified && this.state.getInPressed) {
        this.setState({ getInPressed: false });
        this.props.navigation.navigate("Welcome");
        this.setState({ checked: false });
      } else if (!this.props.parent.emailVerified && this.state.getInPressed) {
        Toast.show({
          text: "please verify your email!",
          position: "bottom",
          buttonText: "Okay",
          duration: 1500
        });
        this.setState({ getInPressed: false });
      }
    }
  }

  render() {
    return (
      <AlmostThere
        onGetInPress={() => {
          this.setState({ getInPressed: true });
          this.props.dispatch({ type: "VERIFY_EMAIL" });
          this.setState({ checked: true });
        }}
        getInPressed={this.state.getInPressed}
        onResendLinkPress={() => {
          Db.verifyEmail();
          Toast.show({
            text:
              "An email verification link has been sent to your registered email",
            position: "bottom",
            buttonText: "Okay",
            duration: 1500
          });
        }}
        onBackPress={() => {
          this.props.navigation.goBack();
        }}
        email={this.props.navigation.state.params.email}
      />
    );
  }
}
const mapStateToProps = store => {
  return {
    parent: store.user.parent,
    loaded: store.loaded.userLoaded,
    verifyLoaded: store.loaded.verifyLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlmostThereScreen);
