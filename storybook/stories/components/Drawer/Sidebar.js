import React, { Component } from "react";
import { Content, Text, List, ListItem, Container, View } from "native-base";
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
    name: "Logout"
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
                onPress={(() => {
                  if (data.name === "Logout")
                    this.props.navigation.navigate("Login");
                  else this.props.navigation.navigate(data.route);
                }).bind(this)}
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
          <View style={styles.Footer}>
            <Logo1 imageDimensions={styles.drawerImage} />
          </View>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
