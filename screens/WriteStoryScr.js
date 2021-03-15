import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
          title: '',
          author: '',
          story: '',
        }
    }

    submitStory = ()=>{
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          story: this.state.story
      })
      this.setState({
          title: "",
          author: "",
          story: ""
      })
      ToastAndroid.show("Story Saved successfully!", ToastAndroid.SHORT);
  }
    
    render(){
        return(
          <KeyboardAvoidingView  style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title"
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the author👩🏽"
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Write your story here📖"
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText} onPress={this.submitStory}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#abe6ff',
    flex: 1,
  },
  header: {
    backgroundColor: 'pink',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
     width: '90%',
    height: 20,
    backgroundColor: 'pink',
    fontFamily: 'britannic',
    border: 'dashed',
    borderColor: 'black',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'pink',
    fontFamily: 'britannic',
    border: 'dashed',
    borderColor: 'black',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'pink',
    fontFamily: 'britannic',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'pink',
    width: '50%',
    height: 40,
    border: 'dashed',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});