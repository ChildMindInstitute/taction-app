import React from "react";
import { Text, List, ListItem, View } from "native-base";
import Logo from "../Logo";
import Logo1 from "../Logo.1";
import styles from "./styles";
import { connect } from "react-redux";
let count = 0;
const datas = [
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
  componentWillUpdate() {
    if (
      this.props.child &&
      this.props.child.childID &&
      !this.state.childAdded
    ) {
      this.setState({ childAdded: true });
    }
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.contentStyle}>
          <View style={styles.drawerCover}>
            <Logo imageDimensions={styles.drawerImage} />
          </View>
          <View style={styles.listSpace}>
            <List
              dataArray={datas}
              renderRow={data =>
                data.name == "Add Child" ? (
                  !this.state.childAdded ? (
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
                  ) : (
                    false
                  )
                ) : (
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
                )
              }
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
