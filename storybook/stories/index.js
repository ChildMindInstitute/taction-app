import React from "react";
import { Text, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Welcome from "./components/Welcome";
import Spinner from "./components/Spinner";
import FormInput from "./components/FormInput";
import Logo from "./components/Logo";
import Dashboard from "./screens/Dashboard";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import RegisterWithUs from "./components/RegisterWithUs";
import SubmitButton from "./components/Button";
import ForgotPassword from "./components/ForgotPassword";
import HeaderCommon from "./components/Header";
import Drawer from "./components/Drawer";
import Settings from "./screens/Settings";
import SettingsList from "./components/SettingsList";
import DashboardList from "./components/DashboardList";
import DashboardGreetings from "./components/DashboardGreetings";
import ListOfChildren from "./components/ListOfChildren";
import LoginAs from "./screens/LoginAs";
import Modal from "./components/Modal";
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("LoginForm", module)
  .add("FormInputUName", () => (
    <FormInput
      InputStyle={{ margin: "5%" }}
      Label="UserName"
      onChange={event => console.log(event.nativeEvent.text)}
      isPassword={false}
    />
  ))
  .add("FormInputPassword", () => (
    <View style={{ flex: 1 }}>
      <FormInput
        InputStyle={{ margin: "5%" }}
        Label="password"
        onChange={event => console.log(event.nativeEvent.text)}
        isPassword={true}
        InputStyle={{ backgroundColor: "white", width: "100%", height: 50 }}
        labelStyle={{ fontSize: 12, color: "white", alignSelf: "flex-start" }}
        ItemStyle={{ flex: 1, flexDirection: "column" }}
        ViewStyle={{ backgroundColor: "blue", flex: 1 }}
      />
      <View style={{ flex: 12 }} />
    </View>
  ))
  .add("RegisterWithUs", () => (
    <RegisterWithUs
      onPressRegisterNow={action("onPressRegisterNow-clicked")}
      textButtonStyle={{ color: "gray", fontWeight: "bold" }}
      textStyle={{ alignSelf: "center", marginTop: "20%" }}
    />
  ))
  .add("ForgotPassword", () => (
    <ForgotPassword
      forgotPasswordTextStyle={{ color: "gray", fontWeight: "bold" }}
      forgotPasswordButtonStyle={{
        flex: 1,
        alignSelf: "flex-end",
        justifyContent: "flex-end"
      }}
      onPressForgotPassword={action("forgotPassword-clicked")}
    />
  ))
  .add("SubmitButton", () => (
    <SubmitButton
      onPress={action("form-submitted")}
      SubmitButtonStyle={{ backgroundColor: "#eeae30" }}
      SubmitButtonTextStyle={{ color: "white" }}
    />
  ));
storiesOf("Settings", module).add("Settings List", () => (
  <SettingsList
    PressMinimumDurationOfTouch={action("PressMinimumDurationOfTouch-pressed")}
    MinimumDurationOfTouch={"30sec"}
    PressTimerOfNext={action("PressTimerOfNext-pressed")}
    TimerOfNext={"30sec"}
    PressNoOfImagesPerSession={action("PressNoOfImagesPerSession-pressed")}
    NoOfImagesPerSession={10}
    NamePress={action("NamePress-pressed")}
    Name={"Arno"}
    Age={7}
    PasswordPress={action("PasswordPress-pressed")}
    AgePress={action("AgePress-pressed")}
  />
));
storiesOf("LoginAs", module).add("ListOfChildren", () => (
  <View style={{ backgroundColor: "#0067a0" }}>
    <ListOfChildren
      ListStyle={{}}
      Data={[
        { Name: "Akarsh", isChecked: false },
        { Name: "Praneet", isChecked: false },
        { Name: "Arno", isChecked: true }
      ]}
      ListItemPress={item => alert(item.Name + " pressed")}
      CheckBoxPress={item => {
        item.isChecked = !item.isChecked;
      }}
    />
  </View>
));
storiesOf("Dashboard", module)
  .add("Dashboard List", () => (
    <DashboardList
      IconName="home"
      ListData={[{ Name: "Spider", Points: 100 }, { Name: "Ball", Points: 80 }]}
      ListItemPress={item => alert(item.Name + " selected")}
    />
  ))
  .add("Dashboard Greetings", () => (
    <DashboardGreetings>
      <Text style={{ color: "orange", fontSize: 20, alignSelf: "center" }}>
        Congratulations
      </Text>
      <Text style={{ fontSize: 14, alignSelf: "center" }}>
        You have earned 10 points
      </Text>
    </DashboardGreetings>
  ));

storiesOf("Common", module)
  .add("Logo", () => (
    <Logo
      source={require("../../js/assets/minion.jpg")}
      imageDimensions={{ width: 200, height: 300 }}
    />
  ))
  .add("Modal", () => <Modal />)
  .add("Base Color Spinner", () => <Spinner color="#0067a0" />)
  .add("HeaderCommon", () => (
    <HeaderCommon
      isRightRequired={false}
      leftIconStyle={{ color: "white" }}
      leftPress={() => {}}
      leftIconName="menu"
      headerStyle={{ backgroundColor: "#0067a0" }}
      Title="CustomHeader"
      TitleStyle={{ color: "white" }}
    />
  ))
  .add("Drawer", () => <Drawer />);

storiesOf("Screens", module)
  .add("Splash", () => (
    <SplashScreen
      MainLogoSource={require("../../js/assets/minion.jpg")}
      SubLogoSource={require("../../js/assets/minion.jpg")}
      ImageDimensions={{ width: 200, height: 300 }}
      backgroundColor="#0067a0"
      color="#ccc"
    />
  ))
  .add("Login", () => (
    <Login
      MainLogoSource={require("../../js/assets/minion.jpg")}
      SubLogoSource={require("../../js/assets/minion.jpg")}
      BackgroundColor="#0067a0"
      ViewStyle={{ flex: 1 }}
      UsernameChange={event => console.log(event.nativeEvent.text)}
      InputStyle={{
        width: "102%",
        backgroundColor: "white"
      }}
      InputLabelStyle={{
        fontSize: 16,
        color: "white",
        alignSelf: "flex-start",
        marginTop: "-13%"
      }}
      InputItemStyle={{
        flex: 1,
        flexDirection: "column"
      }}
      InputViewStyle={{ flex: 1, margin: "6%" }}
      PasswordChange={event => console.log(event.nativeEvent.text)}
      ForgotPasswordTextStyle={{ color: "white", fontWeight: "bold" }}
      ForgotPasswordButtonStyle={{
        flex: 1,
        alignSelf: "flex-end",
        justifyContent: "flex-end"
      }}
      OnPressForgotPassword={action("forgotPassword-clicked")}
      OnPressSubmitButton={action("form-submitted")}
      SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "5%" }}
      SubmitButtonTextStyle={{ color: "white" }}
      OnPressRegisterNow={action("onPressRegisterNow-clicked")}
      RegisterWithUsTextButtonStyle={{ color: "white", fontWeight: "bold" }}
      RegisterWithUsTextStyle={{
        alignSelf: "center",
        marginTop: "20%",
        color: "#ccc"
      }}
    />
  ))
  .add("Dashboard", () => (
    <Dashboard
      DrawerOpen={() => {}}
      TotalPoints={100}
      OnPressSubmitButton={action("resume-playing pressed")}
      SubmitButtonStyle={{ backgroundColor: "#eeae30" }}
      SubmitButtonTextStyle={{ color: "white" }}
      ExcerciseDataIcon="home"
      ExcerciseData={[
        { Name: "Spider", Points: 100 },
        { Name: "Ball", Points: 80 }
      ]}
      ListItemPress={item => console.log(item)}
    >
      <Text>Time to earn some points</Text>
    </Dashboard>
  ))
  .add("Settings", () => (
    <Settings
      PressMinimumDurationOfTouch={action("MinimumDurationOfTouch-clicked")}
      MinimumDurationOfTouch="30sec"
      PressTimerOfNext={action("TimerOfNext-clicked")}
      TimerOfNext="30sec"
      PressNoOfImagesPerSession={action("NoOfImagesPerSession-clicked")}
      NoOfImagesPerSession={10}
      NamePress={action("NamePress-clicked")}
      Name="Arno"
      PasswordPress={action("PasswordPress-clicked")}
      Age={7}
      AgePress={action("AgePress-clicked")}
      Back={action("Back-clicked")}
    />
  ))
  .add("LoginAs", () => (
    <LoginAs
      MainLogoSource={require("../../js/assets/minion.jpg")}
      SubLogoSource={require("../../js/assets/minion.jpg")}
      BackgroundColor="#0067a0"
      ListStyle={{}}
      Data={[
        { Name: "Akarsh", isChecked: false },
        { Name: "Praneet", isChecked: false },
        { Name: "Arno", isChecked: true }
      ]}
      ListItemPress={item => alert(item.Name + " pressed")}
      CheckBoxPress={item => {
        item.isChecked = !item.isChecked;
      }}
    />
  ));
