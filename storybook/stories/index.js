import React from "react";
import { Text, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
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
import ListOfUsers from "./components/ListOfUsers";
import LoginAs from "./screens/LoginAs";
import Home from "./screens/Home";
import Modal from "./components/Modal";
import HomeContent from "./components/HomeContent";
import HomeTimer from "./components/HomeTimer";
import HomeFooter from "./components/HomeFooter";
import NewIntro from "./screens/NewIntroScreen";
import Consent from "./screens/Consent";
import SignUp from "./screens/SignUp";
import AlmostThere from "./screens/AlmostThere";
import WelcomeApp from "./screens/Welcome";
import AddChild from "./screens/AddChild";
import AddFolder from "./screens/AddFolder";
import ImagesFolderList from "./components/ImagesFolderList";
import ImagesFolder from "./screens/ImagesFolder";
import DashboardChildList from "./components/DashboardChildList";
import DashboardChild from "./screens/DashboardChild";
storiesOf("DashboardChild", module).add("DashboardChildList", () => (
  <DashboardChildList
    ExcercisesAvailable={[
      {
        Name: "Spider",
        Image: require("../../js/assets/spiderman.jpg"),
        Stars: require("../../js/assets/all_stars.png"),
        IsPlayed: false
      },
      {
        Name: "Basketball",
        Image: require("../../js/assets/ball1.jpg"),
        Stars: require("../../js/assets/all_stars.png"),
        IsPlayed: true
      },
      {
        Name: "FootBall",
        Image: require("../../js/assets/ball2.jpg"),
        Stars: require("../../js/assets/all_stars.png"),
        IsPlayed: false
      },
      {
        Name: "Minion",
        Image: require("../../js/assets/minion.jpg"),
        Stars: require("../../js/assets/all_stars.png"),
        IsPlayed: false
      }
    ]}
  />
));
storiesOf("ImagesFolder", module).add("ImagesFolderList", () => (
  <ImagesFolderList
    ListData={[
      {
        Name: "Spider",
        Points: 100,
        Taps: 13,
        TotalTaps: 20,
        Stars: require("../../js/assets/all_stars.png"),
        IsContentVisible: true,
        DataFolderContent: [
          {
            Image: require("../../js/assets/spiderman.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/spiderman.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/spiderman.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/spiderman.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/spiderman.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/spiderman.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: false
          },
          {
            Image: require("../../js/assets/spiderman.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: false
          },
          {
            Image: require("../../js/assets/spiderman.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: false
          }
        ]
      },
      {
        Name: "Ball",
        Taps: 13,
        TotalTaps: 20,
        Points: 80,
        Stars: require("../../js/assets/two_stars.png"),
        IsContentVisible: true,
        DataFolderContent: [
          {
            Image: require("../../js/assets/ball1.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/ball1.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/ball1.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/ball1.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/ball1.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: true
          },
          {
            Image: require("../../js/assets/ball1.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: false
          },
          {
            Image: require("../../js/assets/ball1.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: false
          },
          {
            Image: require("../../js/assets/ball1.jpg"),
            Taps: 3,
            TotalTaps: 8,
            IsCompleted: false
          }
        ]
      }
    ]}
    ListItemPress={item => console.log(item)}
  />
));
storiesOf("Home", module)
  .add("HomeContent", () => (
    <HomeContent
      Image1={require("../../js/assets/ball1.jpg")}
      Image2={require("../../js/assets/spiderman.jpg")}
      Image3={require("../../js/assets/minion.jpg")}
      Image4={require("../../js/assets/ball2.jpg")}
    />
  ))
  .add("HomeTimer", () => (
    <HomeTimer
      TimeLeftDenomination="Min"
      TimeLeft="02.17"
      ViewStyle={{ position: "absolute", left: "35%", top: "35%" }}
    />
  ))
  .add("HomeFooter", () => <HomeFooter />);
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
    RandomSlider={value => alert(value)}
    RandomSliderValue={true}
    SoundSliderValue={false}
    SoundSlider={value => alert(value)}
    PressAddPrizes={action("PressAddPrizes-pressed")}
  />
));
storiesOf("LoginAs", module).add("ListOfUsers", () => (
  <View style={{ backgroundColor: "#0067a0" }}>
    <ListOfUsers
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
      ListData={[
        {
          Name: "Spider",
          Points: 100,
          Taps: 13,
          TotalTaps: 20,
          Stars: require("../../js/assets/all_stars.png"),
          IsContentVisible: true,
          DataFolderContent: [
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            }
          ]
        },
        {
          Name: "Ball",
          Taps: 13,
          TotalTaps: 20,
          Points: 80,
          Stars: require("../../js/assets/two_stars.png"),
          IsContentVisible: true,
          DataFolderContent: [
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            }
          ]
        }
      ]}
      ListItemPress={item => console.log(item)}
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
  .add("Logo", () => <Logo imageDimensions={{ width: 200, height: 300 }} />)
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
      ImageDimensions={{ width: 200, height: 300 }}
      backgroundColor="#0067a0"
      color="#ccc"
    />
  ))
  .add("Login", () => (
    <Login
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
      ExcerciseData={[
        {
          Name: "Spider",
          Points: 100,
          Taps: 13,
          TotalTaps: 20,
          Stars: require("../../js/assets/all_stars.png"),
          IsContentVisible: true,
          DataFolderContent: [
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            }
          ]
        },
        {
          Name: "Ball",
          Taps: 13,
          TotalTaps: 20,
          Points: 80,
          Stars: require("../../js/assets/two_stars.png"),
          IsContentVisible: true,
          DataFolderContent: [
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            }
          ]
        }
      ]}
      IsContentVisible={true}
      ListItemPress={item => console.log(item)}
    >
      <Text style={{ fontSize: 22 }}>Today's Activities</Text>
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
      RandomSlider={value => action("value changed to-" + value)}
      RandomSliderValue={true}
      SoundSliderValue={false}
      SoundSlider={value => action("value changed to-" + value)}
      PressAddPrizes={action("PressAddPrizes-pressed")}
    />
  ))
  .add("LoginAs", () => (
    <LoginAs
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
  ))
  .add("Home", () => (
    <Home
      Back={action("Back-Pressed")}
      TotalPoints={100}
      TimeLeftDenomination={"Min"}
      TimeLeft={"2.07"}
      Image1={require("../../js/assets/ball1.jpg")}
      Image2={require("../../js/assets/spiderman.jpg")}
      Image3={require("../../js/assets/minion.jpg")}
      Image4={require("../../js/assets/ball2.jpg")}
      LeftImages={3}
      TotalImages={10}
      Question="Tap on The Spider"
    />
  ))
  .add("NewIntro", () => (
    <NewIntro
      TopViewBackgroundColor="rgba(0, 103, 158, 1)"
      BottomViewBackGroundColor="rgba(255, 255, 255, 0.9)"
      ScoreColor="rgba(0, 103, 158, 1)"
      Score={1250}
      Stars={require("../../js/assets/all_stars.png")}
      PlayOnPress={action("Play-pressed")}
      HowToPlayOnPress={action("HowToPlay-pressed")}
    />
  ))
  .add("Consent", () => (
    <Consent
      TopText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,as opposed to using the 'Content here."
      Term1="Child mind institute access to data and recontract?"
      Term2="Child mind institute access to data and recontract?"
      Term3="Child mind institute access to data and recontract?"
      Term4="Child mind institute access to data and recontract?"
      SubmitButtonStyle={{ backgroundColor: "#eeae30" }}
      SubmitButtonTextStyle={{ color: "white" }}
      Disabled={true}
      Checked1={true}
      Checked2={false}
      Checked3={true}
      Checked4={true}
      CheckboxChange1={action("CheckboxChange1-done")}
      CheckboxChange2={action("CheckboxChange2-done")}
      CheckboxChange3={action("CheckboxChange3-done")}
      CheckboxChange4={action("CheckboxChange4-done")}
    />
  ))
  .add("SignUp", () => (
    <SignUp
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
        marginTop: "-10%"
      }}
      InputItemStyle={{
        flex: 1,
        flexDirection: "column",
        margin: "1%"
      }}
      InputViewStyle={{ flex: 1, margin: "6%" }}
      PasswordChange={event => console.log(event.nativeEvent.text)}
      OnPressSubmitButton={action("form-submitted")}
      SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "5%" }}
      SubmitButtonTextStyle={{ color: "white" }}
    />
  ))
  .add("Almost There", () => <AlmostThere />)
  .add("Welcome", () => (
    <WelcomeApp
      OnPressSubmitButton={action("Got In-clicked")}
      SubmitButtonStyle={{ backgroundColor: "#eeae30", margin: "5%" }}
      SubmitButtonTextStyle={{ color: "white", fontWeight: "500" }}
    />
  ))
  .add("Add Child", () => (
    <AddChild
      OnPressSaveButton={action("Save-clicked")}
      OnPressSkipButton={action("Skip-clicked")}
      ChildNameChange={action("ChildNameChanged")}
      DrawerOpen={action("DrawerOpen")}
    />
  ))
  .add("Add Folder", () => (
    <AddFolder
      OnPressSaveButton={action("Save-clicked")}
      OnPressSkipButton={action("Skip-clicked")}
      ChildNameChange={action("ChildNameChanged")}
      DrawerOpen={action("DrawerOpen-clicked")}
      OnPressAddImage={action("AddImage-clicked")}
      FolderNameChange={action("ChildNameChanged")}
    />
  ))
  .add("ImagesFolder", () => (
    <ImagesFolder
      DrawerOpen={() => {}}
      TotalPoints={100}
      OnPressSubmitButton={action("resume-playing pressed")}
      SubmitButtonStyle={{ backgroundColor: "#eeae30" }}
      SubmitButtonTextStyle={{ color: "white" }}
      ExcerciseData={[
        {
          Name: "Spider",
          Points: 100,
          Taps: 13,
          TotalTaps: 20,
          Stars: require("../../js/assets/all_stars.png"),
          IsContentVisible: true,
          DataFolderContent: [
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/spiderman.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            }
          ]
        },
        {
          Name: "Ball",
          Taps: 13,
          TotalTaps: 20,
          Points: 80,
          Stars: require("../../js/assets/two_stars.png"),
          IsContentVisible: true,
          DataFolderContent: [
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: true
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            },
            {
              Image: require("../../js/assets/ball1.jpg"),
              Taps: 3,
              TotalTaps: 8,
              IsCompleted: false
            }
          ]
        }
      ]}
      IsContentVisible={true}
      ListItemPress={item => console.log(item)}
    >
      <Text>Time to earn some points</Text>
    </ImagesFolder>
  ))
  .add("Dashboard Child", () => (
    <DashboardChild
      DrawerOpen={() => {}}
      ExcercisesAvailable={[
        {
          Name: "Spider",
          Image: require("../../js/assets/spiderman.jpg"),
          Stars: require("../../js/assets/all_stars.png"),
          IsPlayed: true
        },
        {
          Name: "Basketball",
          Image: require("../../js/assets/ball1.jpg"),
          Stars: require("../../js/assets/all_stars.png"),
          IsPlayed: true
        },
        {
          Name: "FootBall",
          Image: require("../../js/assets/ball2.jpg"),
          Stars: require("../../js/assets/all_stars.png"),
          IsPlayed: false
        },
        {
          Name: "Minion",
          Image: require("../../js/assets/minion.jpg"),
          Stars: require("../../js/assets/all_stars.png"),
          IsPlayed: false
        },
        {
          Name: "FootBall",
          Image: require("../../js/assets/ball2.jpg"),
          Stars: require("../../js/assets/all_stars.png"),
          IsPlayed: false
        },
        {
          Name: "Spider",
          Image: require("../../js/assets/spiderman.jpg"),
          Stars: require("../../js/assets/all_stars.png"),
          IsPlayed: false
        }
      ]}
      ItemPress={data => {
        alert(data.Name);
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Choose Folder</Text>
    </DashboardChild>
  ));
