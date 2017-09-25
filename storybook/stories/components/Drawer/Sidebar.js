import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  View
} from "native-base";

import styles from "./styles";
const drawerImage = require("../../../../js/assets/minion.jpg");

const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "navigate",
    bg: "#BE6F50"
  },
  {
    name: "Dashboard",
    route: "Dashboard",
    icon: "home",
    bg: "#AB6AED",
    types: "3"
  },
  {
    name: "About",
    route: "About",
    icon: "image",
    bg: "#cc0000",
    types: "2"
  },
  {
    name: "Settings",
    route: "Settings",
    icon: "albums",
    bg: "#C5F442"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#0067a0", top: -1 }}
        >
          <View style={styles.drawerCover}>
            <Image style={styles.drawerImage} source={drawerImage} />
          </View>
          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
                style={{ backgroundColor: "#0067a0" }}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#fff", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
