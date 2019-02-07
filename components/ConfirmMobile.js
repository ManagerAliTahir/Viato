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
  Image,AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import {Auth} from 'aws-amplify';
class ConfirmMobile extends Component {
    static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
      elevation:0
    }
  };

  constructor(props) {
    super(props);
    this.state = {code:''};
    Confirm= this.Confirm.bind(this);
  }

  Confirm(phonenumber){
    Auth.confirmSignUp("+92"+phonenumber, this.state.code, {
        forceAliasCreation: true
    }).then(data => {
      console.log(data)
      Auth.signIn("+92"+phonenumber,"+92"+phonenumber)
      .then(data => {
      console.log(data);
      console.log(this.props.loggedin);
      this.props.navigation.navigate('EnterName',{phonenumber:phonenumber});
      console.log(user)
    })
this.props.navigation.navigate('EnterName',{phonenumber:phonenumber});
  })
      .catch(err => console.log(err));

    }


  render() {
    const phonenumber=this.props.navigation.state.params.phonenumber;
    return (
       <View style={{ ...StyleSheet.absoluteFillObject, flex: 1, backgroundColor: '#FFFFFF'}}>
<Text style={styles.loginText1}>Enter your Confirmation Code</Text>
<Text style={styles.loginText2}>If you did not receive a code. Please Go back and try again</Text>
<Text style={styles.loginText2}>Zong numbers are not supported</Text>
       <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={require('./assets/2.png')}/>
          <TextInput style={styles.inputs}
              placeholder="6 digit Verification Code "
              maxLength={6}
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(code) => {this.setState({code});}}
              />

        </View>
        <TouchableOpacity style={{alignItems:"center",justifyContent:"center",marginTop:'5%',marginLeft:'35%',backgroundColor:"transparent",borderBottomWidth:1,borderBottomColor:"white",width:'25%',height:'4%'}}>
        <Text style={{fontSize:16,color:"black"}}>Resend Code</Text>
        </TouchableOpacity>
          <KeyboardAvoidingView style={styles.ButtonView}>
            <View style={styles.bottomView}>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => {
              Confirm(phonenumber);
              }} >
          <Text style={styles.loginText}>Confirm</Text>
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

function mapStateToProps(state){
  return{
    loggedin:state.loggedin,
  }
}

export default connect(mapStateToProps)(ConfirmMobile);
