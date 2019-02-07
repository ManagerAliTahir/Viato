import React, { Component } from 'react';
import { ImageBackground,Button,Dimensions } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { connect } from 'react-redux'
import {EnterUser,SaveName,SaveRoom} from './redux/Actions'
import Icon from 'react-native-vector-icons/Entypo'

import { StackActions, NavigationActions } from 'react-navigation';


class EnterName extends Component {
   static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
      elevation:0
    }
              };

    constructor(props) {
    super(props);
    this.state = {
                  name:'Anonymous',
                  phone_number:'',
                  room:"S1",
      };
        post = this.post.bind(this);
              }


post(state)
{
  console.log(JSON.stringify(state));
  fetch('http://192.168.0.103:8080/teacher/post',
  {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name:state.name,
    phone_number:state.phone_number,
    room:state.room
  }),
}).then((response) => {console.log(response);
  this.props.SaveName(state.name);
  this.props.SaveRoom(state.room);
  this.props.EnterUser();})

}

  render() {
    this.state.phone_number="+923152899989"
    return (

        <View style={{ ...StyleSheet.absoluteFillObject, flex: 1, backgroundColor: '#FFFFFF'}}>


<Text style={styles.loginText1}>Enter your Name and Room number.</Text>
<Text style={{color: 'black',fontSize:12,marginTop:'0%',marginLeft: '5%'}}>Room Number can be R1,R109,S1,CR1,Audi etc</Text>
       <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={require('./assets/name.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Enter your name "
              keyboardType="default"
              underlineColorAndroid='transparent'
              maxLength={14}
              onChangeText={(name) => {this.setState({name});}}

              />
        </View>
    <View style={styles.inputContainer}>
          <Icon style={{margin:"2%"}} name="location" size={30}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Room Number"
              keyboardType="default"
              underlineColorAndroid='transparent'
              maxLength={4}
              onChangeText={(room) => {this.setState({room});}}
              />
        </View>

           <KeyboardAvoidingView style={styles.ButtonView}>
            <View style={styles.bottomView}>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => post(this.state)} >
          <Text style={styles.loginText}>Continue</Text>
        </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>

        </View>


    );
  }
}

const styles = StyleSheet.create({

  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:5,
      borderBottomWidth: 'thick',
      width:'90%',
      height:'auto',
      marginTop:'5%',
      marginLeft:'5%',
      flexDirection: 'row',
      alignItems:'center',
      borderBottomColor:'black',
      borderBottomWidth:2

  },
  inputs:{
    fontSize:18,
      height:45,
      marginLeft:'15%',
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:'5%',
    justifyContent: 'center'
  },
  buttonContainer: {
    width:'90%',
      height:52,
      flexDirection: 'row',
    borderRadius:5,
   marginLeft:'5%',
   backgroundColor: '#00CC00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonView:{
    flex:1,
  },

    bottomView:{
      flex: 1,
      width: '100%',
      height: '25%',
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'space-between'
    },
  loginText: {
    color: 'white',
    fontSize:24,

  },
   loginText1: {
    color: 'black',
    fontSize:18,
    marginTop:'0%',

    marginLeft: '5%'
  },

});


function mapStateToProps(state)
{
  return{
    loggedin:state.loggedin,
  }
}
export default connect(mapStateToProps,{EnterUser,SaveName,SaveRoom})(EnterName)
