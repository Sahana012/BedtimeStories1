import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import db from '../config';

export default class ReadStoryScr extends React.Component {
  constructor(){
    super();
      this.state = {
        search: '',
        allStories: [],
      }
    }

    componentDidMount(){
      this.retrieveStories()
    }

    updateSearch = (search) => {
      this.setState({ search });
    };
  
    retrieveStories=()=>{
      try {
        var allStories= []
        var stories = db.collection("books")
          .get().then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
                
                allStories.push(doc.data())
                console.log('this are the stories',allStories)
            })
            this.setState({allStories})
          })
      }
      catch (error) {
        console.log(error);
      }
    }


  render() {
    const { search } = this.state;
    return (
      <KeyboardAvoidingView style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        style = {{ backgroundColor: 'pink', border: 'dashed', borderColor: 'black', color: 'black'}}
        value={search}
      />
        <ScrollView>
        {this.state.allStories.map((stories)=>{
            return(
            <View key={db.collection("books")} style={{borderBottomWidth: 2}}>
              <Text>{"Title: " + stories.title }</Text>
              <Text>{"Author: " + stories.author }</Text>
            </View>
            )
            })
            }
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#abe6ff',
    flex: 1,
    fontFamily: 'britannic',
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
  displayText: {
    fontFamily: 'britannic',
    fontSize: 19,
    padding: 15,
  },
});