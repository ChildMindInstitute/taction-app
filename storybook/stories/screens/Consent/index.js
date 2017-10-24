import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { View, Text } from "native-base";
import CheckBox from "../../components/CheckboxCustom";
import { ScrollView, StatusBar } from "react-native";
import styles from "./styles";
const Consent = props => (
  <View style={styles.mainOuterViewOuterView}>
    <StatusBar barStyle="light-content" />
    <View style={styles.mainOuterView}>
      <View style={styles.topSpace}>
        <Logo imageDimensions={styles.mainLogoStyles} />
      </View>
      <View style={styles.scrollViewSpaceSpace}>
        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.topTextSpace}>
              <Text style={styles.topTextStyle}>{props.topText}</Text>
              <View style={styles.seperator} />
            </View>
            <View style={styles.consentTextSpace}>
              <Text style={styles.consentText}>Consent</Text>
            </View>
            <View style={styles.termsSpace}>
              <View style={styles.termsItem}>
                <View style={styles.itemCheckBoxSpace}>
                  <CheckBox
                    onPress={props.checkboxChange1}
                    checked={props.checked1}
                    checkedbackgroundColor="#ffffff"
                    borderColor="#ffffff"
                    tickColor="#0067a0"
                  />
                </View>
                <View style={styles.itemTextSpace}>
                  <Text style={styles.itemText}>{props.term1}</Text>
                </View>
              </View>
              <View style={styles.termsItem}>
                <View style={styles.itemCheckBoxSpace}>
                  <CheckBox
                    onPress={props.checkboxChange2}
                    checked={props.checked2}
                    checkedbackgroundColor="#ffffff"
                    borderColor="#ffffff"
                    tickColor="#0067a0"
                  />
                </View>
                <View style={styles.itemTextSpace}>
                  <Text style={styles.itemText}>{props.term2}</Text>
                </View>
              </View>
              <View style={styles.termsItem}>
                <View style={styles.itemCheckBoxSpace}>
                  <CheckBox
                    onPress={props.checkboxChange3}
                    checked={props.checked3}
                    checkedbackgroundColor="#ffffff"
                    borderColor="#ffffff"
                    tickColor="#0067a0"
                  />
                </View>
                <View style={styles.itemTextSpace}>
                  <Text style={styles.itemText}>{props.term3}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Button
        onPress={props.onPressSubmitButton}
        submitButtonStyle={props.submitButtonStyle}
        buttonText="Next"
        iconName="ios-arrow-round-forward"
        iconRight={true}
        iconLeft={false}
        iconColor="white"
        disabled={props.disabled}
        submitButtonTextStyle={props.submitButtonTextStyle}
      />
    </View>
  </View>
);

Consent.propTypes = {
  submitButtonTextStyle: PropTypes.object,
  submitButtonStyle: PropTypes.object,
  onPressSubmitButton: PropTypes.func,
  disabled: PropTypes.bool,
  checkboxChange1: PropTypes.func,
  checked1: PropTypes.bool,
  checkboxChange2: PropTypes.func,
  checked2: PropTypes.bool,
  checkboxChange3: PropTypes.func,
  checked3: PropTypes.bool,
  term1: PropTypes.string,
  term2: PropTypes.string,
  term3: PropTypes.string,
  topText: PropTypes.string
};
Consent.defaultProps = {
  OnPressSubmitButton: () => {},
  CheckboxChange1: () => {},
  CheckboxChange2: () => {},
  CheckboxChange3: () => {},
  CheckboxChange4: () => {}
};

export { Consent as default };
