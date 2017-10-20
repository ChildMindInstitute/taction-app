import React from "react";
import { NavigationActions } from "react-navigation";
import LoginAs from "../../../storybook/stories/screens/LoginAs";
import { connect } from "react-redux";

var data = [];
class LoginAsScreen extends React.Component {
  static navigationOptions = {
    title: "LoginAsScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.child.childDetails == null || this.props.child == null) {
      data = [{ name: this.props.parent.name }];
    } else {
      data = [
        { name: this.props.parent.name },
        { name: this.props.child.childDetails.name }
      ];
    }
  }

  render() {
    return (
      <LoginAs
        data={data}
        listItemPress={item => {
          if (data.indexOf(item) === 0) {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    params: { newRegistration: false },
                    routeName: "ParentDrawer"
                  })
                ]
              })
            );
          } else {
            this.props.navigation.dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    params: { newRegistration: false, showModal: true },
                    routeName: "ChildDrawer"
                  })
                ]
              })
            );
          }
        }}
      />
    );
  }
}

const mapStateToProps = store => {
  return { parent: store.user.parent, child: store.user.child };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginAsScreen);
