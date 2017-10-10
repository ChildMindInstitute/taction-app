import React from "react";
import { Content, Text, List, ListItem, View } from "native-base";
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
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Content bounces={false} style={styles.ContentStyle}>
          <View style={styles.drawerCover}>
            <Logo imageDimensions={styles.drawerImage} />
          </View>
          <View style={styles.ListSpace}>
            <List
              dataArray={datas}
              renderRow={data => (
                <ListItem
                  button
                  onPress={() => {
                    this.props.navigation.navigate(data.route);
                  }}
                  style={[
                    styles.ListItemStyle,
                    {
                      display:
                        data.name == "Add Child" && this.props.child
                          ? "none"
                          : "flex"
                    }
                  ]}
                >
                  <Text style={styles.text}>{data.name}</Text>
                </ListItem>
              )}
            />
          </View>
          <View style={styles.Footer}>
            <Logo1 imageDimensions={styles.drawerImage2} />
          </View>
        </Content>
      </View>
    );
  }
}

const mapStateToProps = store => {
  return { child: store.user.child };
};

export default connect(mapStateToProps, null)(SideBar);
