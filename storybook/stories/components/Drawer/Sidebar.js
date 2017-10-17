import React from "react";
import { Text, List, ListItem, View } from "native-base";
import Logo from "../Logo";
import Logo1 from "../Logo.1";
import styles from "./styles";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
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
    name: "Logout",
    route: "Logout"
  }
];

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.ContainerStyle}>
        <StatusBar barStyle="light-content" />
        <View style={styles.ContentStyle}>
          <View style={styles.drawerCover}>
            <Logo imageDimensions={styles.drawerImage} />
          </View>
          <View style={styles.ListSpace}>
            <List
              dataArray={datas}
              renderRow={data => (
                <ListItem
                  button
                  style={[
                    styles.ListItemStyle,
                    {
                      display:
                        data.name == "Add Child" &&
                        this.props.child &&
                        this.props.child.childID
                          ? "none"
                          : "flex"
                    }
                  ]}
                  underlayColor="#0067a0"
                  onPress={() => {
                    this.props.navigation.navigate(data.route);
                  }}
                >
                  <Text style={styles.text}>{data.name}</Text>
                </ListItem>
              )}
            />
          </View>
          <View style={styles.Footer}>
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
