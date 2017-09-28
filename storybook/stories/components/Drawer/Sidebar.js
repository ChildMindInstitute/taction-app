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
import Logo from "../Logo";
import Logo1 from "../Logo.1";
import styles from "./styles";

const datas = [
  {
    name: "Dashboard",
    route: "Dashboard",
    types: "3"
  },
  {
    name: "Settings",
    route: "Settings"
  },

  {
    name: "Images Folder",
    route: "ImagesFolder"
  },
  {
    name: "About",
    route: "About",
    types: "2"
  },
  {
    name: "Logout",
    route: "Logout"
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
            <Logo imageDimensions={styles.drawerImage} />
          </View>
          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
                style={{
                  backgroundColor: "#0067a0",
                  borderBottomColor: "#005d8f",
                  borderBottomWidth: 1
                }}
              >
                <Text style={styles.text}>{data.name}</Text>
              </ListItem>
            )}
          />
        </Content>
        <View style={styles.Footer}>
          <Logo1 imageDimensions={styles.drawerImage} />
        </View>
      </Container>
    );
  }
}

export default SideBar;
