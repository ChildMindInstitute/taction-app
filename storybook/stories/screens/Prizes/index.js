import React from "react";
import PrizesListWithEditAndDelete from "../../components/PrizesListWithEditAndDelete";
import PrizesListNoSwipe from "../../components/PrizesListNoSwipe";
import {
  Container,
  Button,
  Icon,
  Text,
  Header,
  Left,
  Right,
  Body,
  Tabs,
  Tab
} from "native-base";
import styles from "./styles";
class ImagesFolder extends React.Component {
  static navigationOptions = {
    title: "ImagesFolder",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: []
    };
  }
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header
          style={{ backgroundColor: "#0067a0" }}
          hasTabs
          androidStatusBarColor="rgba(0, 70, 107, 1)"
          iosBarStyle="light-content"
          noShadow
        >
          <Left>
            <Button onPress={this.props.back} transparent>
              <Icon name="ios-arrow-back" style={{ color: "#fff" }} />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "#fff" }}>Prizes</Text>
          </Body>
          <Right>
            <Button onPress={this.props.onAddPress} transparent>
              <Icon name="ios-add-circle" style={{ color: "#fff" }} />
            </Button>
          </Right>
        </Header>
        <Tabs
          locked
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: "#0067a0" }}
        >
          <Tab
            heading="Upcoming"
            activeTabStyle={{ backgroundColor: "#F8F8F8" }}
            tabStyle={{ backgroundColor: "#F8F8F8" }}
            activeTextStyle={{ color: "#0067a0" }}
          >
            <PrizesListWithEditAndDelete
              data={this.props.data.filter(
                function(prize) {
                  return prize.points > this.props.childsPoints;
                }.bind(this)
              )}
              editPress={this.props.editPress}
              deletePress={this.props.deletePress}
            />
          </Tab>
          <Tab
            heading="Achieved"
            activeTabStyle={{ backgroundColor: "#F8F8F8" }}
            tabStyle={{ backgroundColor: "#F8F8F8" }}
            activeTextStyle={{ color: "#0067a0" }}
          >
            <PrizesListNoSwipe
              data={this.props.data.filter(
                function(prize) {
                  return prize.points < this.props.childsPoints;
                }.bind(this)
              )}
              onTick={this.props.onTickPress}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default ImagesFolder;
