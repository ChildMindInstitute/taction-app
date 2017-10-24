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
      checked: false
    };
  }

  componentDidUpdate() {
    console.log("Get in");
    if (this.state.checked && this.props.loaded) {
      if (this.props.parent.emailVerified) {
        this.props.navigation.navigate("Welcome");
        this.setState({ checked: false });
      } else {
        Toast.show({
          text: "please verify your email!",
          position: "bottom",
          buttonText: "Okay"
        });
      }
    }
  }

  render() {
    return (
      <AlmostThere
        onGetInPress={() => {
          this.props.dispatch({ type: "VERIFY_EMAIL" });
          this.setState({ checked: true });
        }}
        onResendLinkPress={() => {
          console.log("Resend Link");
          Db.verifyEmail();
          Toast.show({
            text:
              "An email verification link has been sent to your registered email",
            position: "bottom",
            buttonText: "Okay"
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
  return { parent: store.user.parent, loaded: store.loaded.userLoaded };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlmostThereScreen);
