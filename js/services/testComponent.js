//dummy app

import React from "react";
import { Image } from "react-native";
import { decode } from "base64-arraybuffer";
import {
  Container,
  Content,
  Item,
  Label,
  List,
  ListItem,
  Form,
  Input,
  Button,
  Text,
  View
} from "native-base";
import Db from "./Db";
const { ImagePicker } = Expo;
class Test extends React.Component {
  constructor(props) {
    super(props);
    Db.initDb();
    this.state = {
      Email: "",
      Password: "",
      username: "",
      cnfPass: "",
      status: {},
      Child: "",
      childID: "",
      exercise: "",
      exeID: "",
      exerciseList: [],
      imgID: "",
      imgList: [],
      childDetails: {},
      exerciseDetails: {}
    };
  }
  addParent() {
    if (this.state.Password == this.state.cnfPass) {
      Db.createParent(
        this.state.Email,
        this.state.Password,
        this.state.username
      ).then(user => {
        this.setState({ status: user });
        // navigation logic here
      });
    } else {
      alert("passwords do not match");
    }
  }
  signIn() {
    Db.signIn(this.state.Email, this.state.Password).then(user => {
      this.setState({ status: user });
    });
  }

  addChild() {
    Db.createChild(this.state.Child).then(child => {
      this.setState({ childID: child });
    });
  }

  viewParent() {
    this.setState({ status: Db.getUser() });
  }

  addFolder() {
    Db.addExercise(this.state.childID, this.state.exercise).then(res => {
      this.setState({ exeID: res });
    });
  }

  getExerciseList() {
    Db.fetchExeriseList(this.state.childID).then(res => {
      this.setState({ exerciseList: res });
    });
  }

  addImage() {
    ImagePicker.launchImageLibraryAsync({ base64: true }).then(image => {
      var bytes = decode(image.base64);
      Db.addImage(this.state.exerciseList[0].exerciseID, bytes).then(res => {
        this.setState({ imgID: res });
      });
    });
  }

  getImage() {
    Db.fetchImageList(this.state.exerciseList[0].exerciseID).then(res => {
      this.setState({ imgList: res });
    });
  }

  getChild() {
    Db.getChildFromParent()
      .then(res => {
        this.setState({ childDetails: res.childDetails, childID: res.childID });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getExercise() {
    Db.getExercise(this.state.exerciseList[0].exerciseID).then(res => {
      this.setState({ exerciseDetails: res });
      var count = 0;
      Object.keys(res.images).map((item, index) => {
        count++;
      });
    });
  }

  render() {
    return (
      <View>
        <View>
          <Text style={{ marginTop: 25 }}>
            Add User Screen/ Register Screen
          </Text>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={username =>
                  this.setState({
                    username
                  })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                onChangeText={Email =>
                  this.setState({
                    Email
                  })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={Password => this.setState({ Password })}
              />
            </Item>
            <Item floatingLabel>
              <Label>confirm Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={cnfPass => this.setState({ cnfPass })}
              />
            </Item>
          </Form>
          <Button onPress={() => this.addParent()}>
            <Text>Sign Up</Text>
          </Button>
          <Button onPress={() => this.signIn()}>
            <Text>Sign In</Text>
          </Button>

          <Button onPress={() => this.viewParent()}>
            <Text>View</Text>
          </Button>
          <Text>Email: {this.state.status.email}</Text>
          <Text>Display Name: {this.state.status.displayName} </Text>
          <Text>UID: {this.state.status.uid} </Text>
          <Text> Add Child Screen </Text>
          <Form>
            <Item floatingLabel>
              <Label>Child Name</Label>
              <Input
                onChangeText={Child =>
                  this.setState({
                    Child
                  })}
              />
            </Item>
          </Form>
          <Button onPress={() => this.addChild()}>
            <Text>Add Child</Text>
          </Button>
          <Text>ID: {this.state.childID}</Text>
          <Form>
            <Item floatingLabel>
              <Label>Folder Name</Label>
              <Input
                onChangeText={exercise =>
                  this.setState({
                    exercise
                  })}
              />
            </Item>
          </Form>
          <Button onPress={() => this.addFolder()}>
            <Text>Add Folder</Text>
          </Button>
          <Text>Exercise ID: {this.state.exeID} </Text>
          <Button onPress={() => this.getExerciseList()}>
            <Text>Show Exercises</Text>
          </Button>
          <List
            dataArray={this.state.exerciseList}
            renderRow={exe => (
              <ListItem>
                <Text>Name: {exe.exerciseName}</Text>
                <Text> Id: {exe.exerciseID} </Text>
                <Text> score: {exe.score}</Text>
              </ListItem>
            )}
          />

          <Button onPress={() => this.addImage()}>
            <Text>Add Images</Text>
          </Button>
          <Text>Image Id: {this.state.imgID}</Text>
          <Button onPress={() => this.getImage()}>
            <Text>View Images</Text>
          </Button>
          <List
            dataArray={this.state.imgList}
            renderRow={img => (
              <ListItem>
                <Text>ImgID: {img.imageID}</Text>
                <Image
                  source={{ uri: img.URL }}
                  style={{ height: 150, width: 150 }}
                />
              </ListItem>
            )}
          />
          <Button onPress={() => this.getChild()}>
            <Text>Get Child Details</Text>
          </Button>
          <Text>Name: {this.state.childDetails.name}</Text>
          <Text>Level: {this.state.childDetails.level}</Text>
          <Text>HighScore: {this.state.childDetails.highScore}</Text>
          <Text>TotalScore: {this.state.childDetails.totalScore} </Text>
          <Button onPress={() => this.getExercise()}>
            <Text>Get exercise detail</Text>
          </Button>
          <Text>Name: {this.state.exerciseDetails.exerciseName} </Text>
          <Text>Status: {this.state.exerciseDetails.status} </Text>
          <Text>
            imagesTouched: {this.state.exerciseDetails.imagesTouched}{" "}
          </Text>
          <Text>score: {this.state.exerciseDetails.score} </Text>
          <Text>
            totalDuration: {this.state.exerciseDetails.totalDuration}{" "}
          </Text>
          <Text>Image Count: {} </Text>
        </View>
      </View>
    );
  }
}

export default Test;
