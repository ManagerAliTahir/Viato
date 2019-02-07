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
  Image,
  Picker
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import ToggleSwitch from 'toggle-switch-react-native'
import {LogOut} from './redux/Actions'
import { connect } from 'react-redux'

 class Notification extends Component {
   state = {language: ''}
   updateUser = (language) => {
      this.setState({ language: language
     })
   }
   static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
      elevation:0
    }
 };
  render() {

    return (
        <View style={{ ...StyleSheet.absoluteFillObject, flex: 1, backgroundColor: '#FFFFFF'}}>

        <View style={{height:'10%',width:'100%',backgroundColor:'#1f1f14',justifyContent:'center'}}>
      <Text style={{fontSize:18,color:'white',marginLeft:'5%'}}>Settings</Text>
        </View >
        <View style={{marginTop:'10%',height:'10%',width:'100%',flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:1}}>
<Text style={{marginLeft:'5%',fontSize:16,color:'black'}}>Notifications</Text>
     <View style={{backgroundColor:"transparent",height:'20%',width:'20%',marginLeft:'50%'}}>
<ToggleSwitch
style={{marginLeft:'30%'}}
        isOn={false}
    onColor='#004d4d'
    offColor='#00ffff'
    size='medium'
    onToggle={ (isOn) => console.log('changed to : ', isOn) }
/>


     </View>


        </View>

<View style={{height:'10%',width:'100%',flexDirection:"row",backgroundColor:"transparent",marginTop:"10%",borderBottomColor:"grey",borderBottomWidth:1}}>
<Text style={{marginLeft:'5%',fontSize:16,color:'black'}}>Sign Out</Text>
<TouchableOpacity onPress={()=>{this.props.LogOut();}} style={{marginLeft:"58%",backgroundColor:"#1f1f14",height:'70%',width:'16%',borderRadius:12,justifyContent:'center',alignItems:'center'}}>
<Text style={{color:"white",marginTop:'-3%'}}>Logout</Text>
</TouchableOpacity>

        </View>

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
      marginLeft:'5%',
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


function mapStateToProps(state){
 return{
   loggedin:state.loggedin,
 }
}
export default connect(mapStateToProps,{LogOut})(Notification);
