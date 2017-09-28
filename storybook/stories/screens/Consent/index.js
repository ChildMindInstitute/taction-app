import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { View, Text, Item, CheckBox, Body, Right } from "native-base";
import styles from "./styles";
const Consent = props => (
  <View style={styles.MainView}>
    <View style={styles.TopSpace}>
      <Logo imageDimensions={styles.MainLogoStyles} />
    </View>
    <View style={styles.TopTextSpace}>
      <Text style={styles.TopTextStyle}>{props.TopText}</Text>
      <View style={styles.Seperator} />
    </View>
    <View style={styles.ConsentTextSpace}>
      <Text style={styles.ConsentText}>Consent</Text>
    </View>
    <View style={styles.TermsSpace}>
      <View style={styles.TermsItem}>
        <View style={styles.ItemTextSpace}>
          <Text style={styles.ItemText}>{props.Term1}</Text>
        </View>
        <View style={styles.ItemCheckBoxSpace}>
          <CheckBox
            onPress={props.CheckboxChange1}
            checked={props.Checked1}
            style={styles.ItemCheckBox}
          />
        </View>
      </View>
      <View style={styles.TermsItem}>
        <View style={styles.ItemTextSpace}>
          <Text style={styles.ItemText}>{props.Term2}</Text>
        </View>
        <View style={styles.ItemCheckBoxSpace}>
          <CheckBox
            onPress={props.CheckboxChange2}
            checked={props.Checked2}
            style={styles.ItemCheckBox}
          />
        </View>
      </View>
      <View style={styles.TermsItem}>
        <View style={styles.ItemTextSpace}>
          <Text style={styles.ItemText}>{props.Term3}</Text>
        </View>
        <View style={styles.ItemCheckBoxSpace}>
          <CheckBox
            onPress={props.CheckboxChange3}
            checked={props.Checked3}
            style={styles.ItemCheckBox}
          />
        </View>
      </View>
      <View style={styles.TermsItem}>
        <View style={styles.ItemTextSpace}>
          <Text style={styles.ItemText}>{props.Term4}</Text>
        </View>
        <View style={styles.ItemCheckBoxSpace}>
          <CheckBox
            onPress={props.CheckboxChange4}
            checked={props.Checked4}
            style={styles.ItemCheckBox}
          />
        </View>
      </View>
    </View>
    <View style={styles.SubmitButtonSpace}>
      <Button
        OnPress={props.OnPressSubmitButton}
        SubmitButtonStyle={props.SubmitButtonStyle}
        ButtonText="Next &rarr;"
        Disabled={props.Disabled}
        SubmitButtonTextStyle={props.SubmitButtonTextStyle}
      />
    </View>
  </View>
);

Consent.propTypes = {
  SubmitButtonTextStyle: PropTypes.object,
  SubmitButtonStyle: PropTypes.object,
  OnPressSubmitButton: PropTypes.func,
  Disabled: PropTypes.bool,
  CheckboxChange1: PropTypes.func,
  Checked1: PropTypes.bool,
  CheckboxChange2: PropTypes.func,
  Checked2: PropTypes.bool,
  CheckboxChange3: PropTypes.func,
  Checked3: PropTypes.bool,
  CheckboxChange4: PropTypes.func,
  Checked4: PropTypes.bool,
  Term1: PropTypes.string,
  Term2: PropTypes.string,
  Term3: PropTypes.string,
  Term4: PropTypes.string,
  TopText: PropTypes.string
};
Consent.defaultProps = {
  OnPressSubmitButton: () => {},
  CheckboxChange1: () => {},
  CheckboxChange2: () => {},
  CheckboxChange3: () => {},
  CheckboxChange4: () => {}
};

export { Consent as default };
