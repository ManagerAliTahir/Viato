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

import {Auth} from 'aws-amplify';



export default class LoginView extends Component {
    static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
      elevation:0
    }
  };


  constructor(props) {
    super(props);
    this.state = {
      phonenumber:'',
    };
      SendCode = this.SendCode.bind(this);
  }

  validate(text,type)
                 {
                  alph= /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
                  if(type=='phonenumber')
                  {
                    if(alph.test("92"+text))
                    {
                      console.warn("valid phonenumber")
                    }
                    else
                    {
                      console.warn("invalid phonenumber")
                    }
                  }
                 }

  SendCode()
  {
    Auth.signUp({
      username: "+92"+this.state.phonenumber,
      password: "+92"+this.state.phonenumber,
        attributes: {
            phone_number:"+92"+this.state.phonenumber,   // optional - E.164 number convention

        },
        })
        .then(data => {
        console.log(data);

        this.props.navigation.navigate('ConfirmMobile',{phonenumber:this.state.phonenumber});
    })
        .catch(err => console.log(err));
  }

  render() {
    return (
       <View style={{ ...StyleSheet.absoluteFillObject, flex: 1, backgroundColor: '#FFFFFF'}}>
<Text style={styles.loginText1}>Enter your mobile number</Text>
<Text style={styles.loginText2}>Enter your number here to create an account or sign in</Text>
       <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={require('./assets/2.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Phone Number "
              maxLength={10}
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(phonenumber) => {this.setState({phonenumber},()=>{this.validate(phonenumber,"phonenumber")});}}
              />

        </View>
          <KeyboardAvoidingView style={styles.ButtonView}>
            <View style={styles.bottomView}>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => {
              SendCode();
              }} >
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
      borderBottomWidth:2,

  },
  inputs:{
    fontSize:18,
      height:45,
      marginLeft:'15%',
      borderBottomColor: '#FFFFFF',
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:'5%',
    justifyContent: 'center'
  },
  loginText1: {
    color: 'black',
    fontSize:18,
    marginTop:'0%',
    marginLeft: '5%'
  },

   loginText2: {
    color: 'black',
    fontSize:12,
    marginLeft: '5%'
  },

  ButtonView:{
    flex:1,
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

    bottomView:{
      flex: 1,
      width: '100%',
      height: '20%',
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 0
    },
      loginText: {
    color: 'white',
    fontSize:24,


  }
});
