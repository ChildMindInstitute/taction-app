import React from "react";
import { Text, List, ListItem, View } from "native-base";
import Logo from "../Logo";
import Logo1 from "../Logo.1";
import styles from "./styles";
import { connect } from "react-redux";
let datas = [
  {
    name: "Dashboard",
    route: "Dashboard",
    types: "3"
  },
  {
    name: "Add Child",
    route: "AddChild"
  },
  {
    name: "Settings",
    route: "Settings"
  },
  {
    name: "Images",
    route: "Images",
    types: "2"
  },
  {
    name: "How to Use",
    route: "HowtoUse"
  },
  {
    name: "About",
    route: "About"
  },
  {
    name: "Switch user",
    route: "SwitchUser"
  },
  {
    name: "Logout",
    route: "Logout"
  }
];
class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    childAdded: false
  };
  componentDidUpdate() {
    if (this.props.child) {
      if (this.props.child.childID && !this.state.childAdded) {
        this.setState({ childAdded: true });
      }
    }
  }
  componentWillMount() {
    if (this.props.child) {
      if (this.props.child.childID && !this.state.childAdded) {
        this.setState({ childAdded: true });
      }
    }
  }
  render() {
    console.log(this.props.child, this.state.childAdded);
    return (
      <View style={styles.containerStyle}>
        <View style={styles.contentStyle}>
          <View style={styles.drawerCover}>
            <Logo imageDimensions={styles.drawerImage} />
          </View>
          <View style={styles.listSpace}>
            <List
              dataArray={datas.filter(
                (item => {
                  if (this.state.childAdded) {
                    return item.route !== "AddChild";
                  }
                  return 1 === 1;
                }).bind(this)
              )}
              renderRow={(data => (
                <ListItem
                  button
                  style={styles.listItemStyle}
                  underlayColor="#0067a0"
                  onPress={() => {
                    this.props.navigation.navigate(data.route);
                  }}
                >
                  <Text style={styles.text}>{data.name}</Text>
                </ListItem>
              )).bind(this)}
            />
          </View>
          <View style={styles.footer}>
            <Logo1 imageDimensions={styles.drawerImage2} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = store => {
  return { child: store.user.child };
};

export default connect(mapStateToProps, null)(SideBar);
