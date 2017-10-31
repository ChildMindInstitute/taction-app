import React from "react";
import PropTypes from "prop-types";
import Button2 from "../../components/Button";
import HeaderCommon from "../../components/Header";
import {
  Container,
  View,
  Text,
  Button,
  Icon,
  Segment,
  Content
} from "native-base";
import FormInput from "../../components/FormInput";
import styles from "./styles";
const AddFolder = props => (
  <Container style={styles.containerStyle}>
    <HeaderCommon
      isRightRequired={props.isRightRequired}
      leftIconStyle={styles.headerLeftStyle}
      leftPress={props.drawerOpen}
      leftIconName="menu"
      headerStyle={styles.headerStyle}
      title="Setup"
      titleStyle={styles.headerLeftStyle}
    >
      <Button transparent onPress={props.delPress}>
        <Icon name="trash" style={{ color: "white" }} />
      </Button>
    </HeaderCommon>
    <Content>
      <View
        style={[
          styles.mainSpace,
          {
            height: props.children ? 600 : 300,
            marginTop: props.children ? 16 : "40%"
          }
        ]}
      >
        <View
          style={{
            flex:
              props.errorDisplay && !props.children
                ? 1.2
                : !props.errorDisplay && props.children
                  ? 0.5
                  : !props.errorDisplay && !props.children ? 1.2 : 0.5,
            height: 50,
            alignContent: "center",
            justifyContent: "flex-start"
          }}
        >
          <FormInput
            isPassword={false}
            label="Add new folder with images"
            onChange={event => props.folderNameChange(event)}
            viewStyle={styles.inputViewStyle}
            placeholder="Folder name (such as 'Spider')"
            onFocus={props.onFocus}
            disabled={props.formDisabled}
          />
        </View>
        {props.errorDisplay ? (
          <Text style={{ color: "red", alignSelf: "center" }}>
            Folder name cannot be empty
          </Text>
        ) : (
          false
        )}
        <View
          style={{ flex: props.children ? 0.2 : 0.4, justifyContent: "center" }}
        >
          <Text>Select images from </Text>
        </View>

        <View style={{ flex: 3 }}>
          <View
            style={{
              flex: 0.6,
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <Segment>
              <Button
                first
                active={props.activeSegment == 1 ? true : false}
                onPress={() => {
                  props.setActiveSegement(1);
                }}
                style={{
                  width: "50%",
                  height: "98%",
                  justifyContent: "center",
                  backgroundColor:
                    props.activeSegment == 1 ? "#0067a0" : "#fff",
                  borderRadius: 0,
                  borderColor: "#0067a0"
                }}
                disabled={props.galleryDisabled}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: props.activeSegment == 1 ? "#fff" : "#0067a0"
                  }}
                >
                  Gallery
                </Text>
              </Button>
              <Button
                last
                active={props.activeSegment == 2 ? true : false}
                onPress={() => {
                  props.setActiveSegement(2);
                }}
                style={{
                  width: "50%",
                  height: "98%",
                  marginTop: 10,
                  marginBottom: 10,
                  justifyContent: "center",
                  backgroundColor:
                    props.activeSegment == 2 ? "#0067a0" : "#fff",
                  borderRadius: 0,
                  borderColor: "#0067a0"
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: props.activeSegment == 2 ? "#fff" : "#0067a0"
                  }}
                >
                  CM server
                </Text>
              </Button>
            </Segment>
          </View>
          {props.children ? (
            <View
              style={{
                flex: 2.3,
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              {props.children}
            </View>
          ) : (
            <View />
          )}
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <Button2
              onPress={props.onPressSaveButton}
              submitButtonStyle={styles.saveButtonStyle}
              buttonText={props.saveFolderButtonText}
              disabled={props.saveDisabled}
              submitted={props.submitted}
              iconName="md-arrow-round-forward"
              iconRight={true}
              iconLeft={false}
              iconColor="white"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "flex-start"
            }}
          >
            <Button2
              onPress={props.onPressSkipButton}
              submitButtonStyle={styles.submitButton2Style}
              buttonText="Skip"
              disabled={props.skipDisabled}
              submitButtonTextStyle={styles.submitButton2TextStyle}
            />
          </View>
        </View>
      </View>
    </Content>
  </Container>
);

AddFolder.propTypes = {
  saveDisabled: PropTypes.bool,
  saveFolderButtonText: PropTypes.string,
  drawerOpen: PropTypes.func,
  onPressAddImage: PropTypes.func,
  folderNameChange: PropTypes.func,
  onPressSkipButton: PropTypes.func,
  onPressSaveButton: PropTypes.func,
  disabledOpacity: PropTypes.bool
};
AddFolder.defaultProps = {
  drawerOpen: () => {},
  onPressAddImage: () => {},
  folderNameChange: () => {},
  onPressSkipButton: () => {},
  onPressSaveButton: () => {}
};

export { AddFolder as default };
