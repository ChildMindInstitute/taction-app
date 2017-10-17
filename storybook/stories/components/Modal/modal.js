import React from "react";
import { View } from "native-base";
import Modal from "react-native-modal";
import styles from "./styles";
class ModalCommon extends React.Component {
  render() {
    return (
      <Modal
        backdropColor="#000"
        backdropOpacity={1}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        animationType="slide"
        transparent={true}
        visible={this.props.isVisible}
        style={[styles.MainModal, this.props.ExtraModalStyle]}
      >
        <View style={styles.view1}>
          <View style={styles.mainContent}>{this.props.Content}</View>
        </View>
      </Modal>
    );
  }
}
module.exports = ModalCommon;
