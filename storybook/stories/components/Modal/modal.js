import React from "react";
import { View } from "native-base";
//import Modal from "react-native-modal";
import { Modal } from "react-native";
import styles from "./styles";
class ModalCommon extends React.Component {
  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={() => {}}
      >
        <View style={[styles.mainModal, this.props.extraModalStyle]}>
          <View style={[styles.view1, this.props.extraModalViewStyle]}>
            <View style={styles.mainContent}>{this.props.content}</View>
          </View>
        </View>
      </Modal>
    );
  }
}
module.exports = ModalCommon;
