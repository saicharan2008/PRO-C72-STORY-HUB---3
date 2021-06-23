import React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity,TextInput,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from'../config.js';


export default class TransactionScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hasCameraPermissions:null,
      author:'',
      storyText:'',
      title:'',
      }
      }
      
submitStory=()=>{
  db.collection('stories').add({
    author:this.state.author,
    storyText:this.state.storyText,
    title:this.state.title,
  })
  this.setState({
     author:'',
      storyText:'',
      title:'',
  })
 ToastAndroid.show('STORY SUBMITED',ToastAndroid.SHORT)
}

render(){
  return(
       <View style={styles.container}>
            <View>
              <Text style={{textAlign: 'center', fontSize: 30,backgroundColor:'lightgreen',
              textDecorationLine:'underline',boder:'solid',}}>STORY HUB</Text>
            </View>
            <View style={styles.inputView}>
         <KeyboardAvoidingView>   <TextInput 
              style={styles.inputBox}
              placeholder="TITLE OF STORY"/>
             </KeyboardAvoidingView>
              </View>
               <View style={styles.inputView}>
                <KeyboardAvoidingView>
            <TextInput 
              style={styles.inputBox}
              placeholder="AUTHOR OF STORY"/>
               </KeyboardAvoidingView>
               </View>
                <KeyboardAvoidingView>
                <TextInput 
              style={styles.storyBox}
              placeholder="WRITE YOUR STORY HERE"/> 
          </KeyboardAvoidingView>
      <TouchableOpacity onPress={this.submitStory} style={styles.submitButton}>
      <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
     </View>
      )}}

const styles=StyleSheet.create({
  container:{
textAlign:'center',
backgroundColor:'lightgreen',
flex:1,
justifyContent:'center,'
  },
inputView:{
flexDirection:'row',
margin:20,
alignSelf:'center',
},
inputBox:{
width:200,
height:40,
borderWidth:1.5,
borderRightWidth:1.5,
backgroundColor:'white',
fontSize:20,
},
storyBox:{
width:200,
alignSelf:'center',
height:200,
borderWidth:1.5,
borderRightWidth:1.5,
backgroundColor:'white',
fontSize:17,
},
submitButton:{
width:200,
height:50,
backgroundColor:'gold',
alignSelf:'center',
},
submitButtonText:{
padding:10,
textAlign:'center',
color:'white',
alignSelf:'center',
fontSize:20,
fontWeight:'bold',
}})