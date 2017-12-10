import React from "react";
import PrizesListNoSwipe from "../../components/PrizesListNoSwipe";
import PrizesListWithTick from "../../components/PrizesListWithTick";
import {
  Container,
  View,
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
    const thisPage = this;
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
          <Right />
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
            <PrizesListNoSwipe
              data={this.props.data.filter(
                function(prize) {
                  return prize.points > this.props.childsPoints;
                }.bind(this)
              )}
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
                  return (
                    prize.points < this.props.childsPoints &&
                    !prize.deliveredByParent
                  );
                }.bind(this)
              )}
            />
          </Tab>
          <Tab
            heading="Confirm"
            activeTabStyle={{ backgroundColor: "#F8F8F8" }}
            tabStyle={{ backgroundColor: "#F8F8F8" }}
            activeTextStyle={{ color: "#0067a0" }}
          >
            <PrizesListWithTick
              data={this.props.data.filter(function(prize) {
                return prize.deliveredByParent && !prize.recievedByChild;
              })}
              onTick={this.props.onTickPress}
            />
          </Tab>
          <Tab
            heading="Received"
            activeTabStyle={{ backgroundColor: "#F8F8F8" }}
            tabStyle={{ backgroundColor: "#F8F8F8" }}
            activeTextStyle={{ color: "#0067a0" }}
          >
            <PrizesListNoSwipe
              data={this.props.data.filter(function(prize) {
                return prize.recievedByChild;
              })}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default ImagesFolder;
