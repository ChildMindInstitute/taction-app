import React from "react";
import { connect } from "react-redux";
import Prizes from "../../../../storybook/stories/screens/Prizes";
import Modal from "../../../../storybook/stories/components/Modal/modal";
import { Toast } from "native-base";
import {
  View,
  Container,
  Header,
  Title,
  Body,
  Input,
  Item,
  Label,
  Button,
  Text
} from "native-base";
import { Alert } from "react-native";
class PrizesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      placeholderPoints: "",
      placeholderDesc: ""
    };
    this.input = {
      pointsReq: "",
      prizeDesc: ""
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: "SET_PRIZE_LIST",
      payload: this.props.child.childID
    });
  }

  submitAction(item) {
    if (this.input.pointsReq != "" && this.input.prizeDesc != "") {
      if (
        this.state.placeholderDesc == "" &&
        this.state.placeholderPoints == ""
      ) {
        console.log(this.input, "Add");
        this.props.dispatch({
          type: "ADD_PRIZE",
          payload: {
            childID: this.props.child.childID,
            points: this.input.pointsReq,
            description: this.input.prizeDesc
          }
        });
      } else {
        console.log(this.input, "Edit");
        console.log(item);
      }
    }
  }
  deleteAction(item) {
    console.log("delete Action", item);
  }
  render() {
    return (
      <Container>
        <Modal
          isVisible={this.state.modalVisible}
          extraModalStyle={{
            paddingTop: "40%",
            paddingBottom: "75%",
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
          extraModalViewStyle={{
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: 10
          }}
          content={
            <Container>
              <Header>
                <Body>
                  <Title style={{ color: "#007aff" }}>Add Prizes</Title>
                </Body>
              </Header>
              <View style={{ flex: 1 }}>
                <Item stackedLabel style={{ flex: 1 }}>
                  <Label>Points to be achieved</Label>
                  <Input
                    style={{ backgroundColor: "#fff" }}
                    onChange={event => {
                      this.input.pointsReq = event.nativeEvent.text;
                    }}
                    placeholder={this.state.placeholderPoints.toString()}
                  />
                </Item>
                <Item stackedLabel style={{ flex: 1 }}>
                  <Label>Prize</Label>
                  <Input
                    style={{ backgroundColor: "#fff" }}
                    onChange={event => {
                      this.input.prizeDesc = event.nativeEvent.text;
                    }}
                    placeholder={this.state.placeholderDesc.toString()}
                  />
                </Item>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Button
                  block
                  bordered
                  light
                  style={{ width: "50%" }}
                  onPress={() => {
                    this.submitAction({
                      points: this.state.placeholderPoints,
                      description: this.state.placeholderDesc
                    });
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Text style={{ color: "#007aff" }}>Ok</Text>
                </Button>
                <Button
                  block
                  bordered
                  light
                  style={{ width: "50%" }}
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Text style={{ color: "#007aff" }}>Cancel</Text>
                </Button>
              </View>
            </Container>
          }
        />
        <Prizes
          data={this.props.prizeList}
          back={() => this.props.navigation.goBack()}
          editPress={item => {
            this.setState({
              placeholderDesc: item.description,
              placeholderPoints: item.points
            });
            this.setState({ modalVisible: true });
          }}
          deletePress={item => {
            Alert.alert(
              "Delete Folders",
              "Are you sure you want to delete these folders?",
              [
                {
                  text: "OK",
                  onPress: () => {
                    this.deleteAction(item);
                  }
                },
                { text: "Cancel", onPress: () => {} }
              ]
            );
          }}
          onAddPress={() => {
            if (this.props.child.childID) {
              this.setState({ placeholderDesc: "", placeholderPoints: "" });
              this.setState({ modalVisible: true });
            } else {
              Toast.show({
                text: "Please add a child first!",
                buttonText: "Okay",
                position: "bottom",
                duration: 1500
              });
            }
          }}
        />
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {
    child: store.user.child,
    prizeList: store.prizeList
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrizesScreen);
