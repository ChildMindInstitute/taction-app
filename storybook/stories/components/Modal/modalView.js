import React from "react";
import { Container, Text } from "native-base";
import ModalCommon from "./modal";
import ModalContent from "./ModalContent";
class ModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <Container>
        <ModalCommon
          isVisible={this.state.modalVisible}
          Content={
            <ModalContent
              GreetingLine1="Spider"
              Line2needed={true}
              GreetingLine2="Level Completed"
              Stars={require("../../../../js/assets/Asset_5.png")}
              DisplayPoints={120}
              Description="Time: 02.14 Min"
              IsButtonNeeded={true}
              PlayNext={() => {
                alert("PlayNext Pressed");
              }}
              PlayAgain={() => {
                alert("PlayAgain Pressed");
              }}
            />
          }
          toggleVisiblity={() => {
            this.setModalVisible(false);
          }}
        />
        <Text button onPress={() => this.setModalVisible(true)}>
          Click To Open
        </Text>
      </Container>
    );
  }
}
module.exports = ModalView;
