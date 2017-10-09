import React from "react";
import { View } from "native-base";
import Modal from "react-native-modal";
import styles from "./styles";
class ModalCommon extends React.Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isVisible}
        style={styles.MainModal}
      >
        <View style={styles.view1}>
          <View style={styles.mainContent}>{this.props.Content}</View>
        </View>
      </Modal>
    );
  }
}
module.exports = ModalCommon;
