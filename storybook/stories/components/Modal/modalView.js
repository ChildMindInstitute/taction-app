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
          content={
            <ModalContent
              greetingLine1="Spider"
              line2needed={true}
              greetingLine2="Level Completed"
              stars={require("../../../../js/assets/all-stars.png")}
              displayPoints={120}
              description="Time: 02.14 Min"
              isButtonNeeded={true}
              playNext={() => {
                alert("PlayNext Pressed");
              }}
              playAgain={() => {
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
