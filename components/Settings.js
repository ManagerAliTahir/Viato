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
  Picker,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import {SaveRoom} from './redux/Actions'
import { connect } from 'react-redux'

class Settings extends Component {
   state = {room: this.props.room}
   updateUser = (room) => {
      this.setState({ room: room
     })
   }
   static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
      elevation:0
    }
 };
  handleChangeOption(val) {
  if (val != 0) {
    this.setState({room: val});
  }
}

  render() {

    return (
        <View style={{ ...StyleSheet.absoluteFillObject, flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{height:'10%',width:'100%',backgroundColor:'#1f1f14',justifyContent:'center'}}>
      <Text style={{fontSize:18,color:'white',marginLeft:'5%'}}>Change Room</Text>
        </View>
        <View style={styles.inputContainer}>
      <Picker
  selectedValue={this.state.room}
  style={[styles.picker]} itemStyle={styles.pickerItem}
  onValueChange={(itemValue, itemIndex) => this.handleChangeOption(itemValue)}
      mode="dropdown">
  <Picker.Item label="Select Room" value='0' />
  <Picker.Item label="CR1" value="CR1" />
  <Picker.Item label="CR2" value="CR2" />
  <Picker.Item label="CR3" value="CR3" />
  <Picker.Item label="CR4" value="CR4" />
  <Picker.Item label="CR5" value="CR5" />
  <Picker.Item label="CR6" value="CR6" />
  <Picker.Item label="CR7" value="CR7" />
  <Picker.Item label="CR8" value="CR8" />
  <Picker.Item label="CR9" value="CR9" />
  <Picker.Item label="CR10" value="CR10" />
  <Picker.Item label="CR11" value="CR11" />
  <Picker.Item label="CR12" value="CR12" />
  <Picker.Item label="CR13" value="CR13" />
  <Picker.Item label="CR14" value="CR14" />
  <Picker.Item label="CR15" value="CR15" />
  <Picker.Item label="CR16" value="CR16" />

  <Picker.Item label="R11" value="R11" />
  <Picker.Item label="R12" value="R12" />
  <Picker.Item label="R-109" value="R109" />
  <Picker.Item label="E1" value="E1" />
  <Picker.Item label="E2" value="E2" />
  <Picker.Item label="E3" value="E3" />
  <Picker.Item label="E4" value="E4" />
  <Picker.Item label="E5" value="E5" />
  <Picker.Item label="E6" value="E6" />



  <Picker.Item label="S1" value="S1" />
  <Picker.Item label="S2" value="S2" />
  <Picker.Item label="Lab-1" value="lab1" />
  <Picker.Item label="Lab-2" value="lab2" />
  <Picker.Item label="Lab-3" value="lab3" />
  <Picker.Item label="Lab-4" value="lab4" />
  <Picker.Item label="Lab-5" value="lab5" />
  <Picker.Item label="Lab-6" value="lab6" />
    </Picker>

    </View>
           <KeyboardAvoidingView style={styles.ButtonView}>
            <View style={styles.bottomView}>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => {this.props.SaveRoom(this.state.room);
              Alert.alert(
  'Room Changed',
  'Your room has been changed successfully',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: true }
)
} } >
          <Text style={styles.loginText}>Save</Text>
        </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>

        </View>


    );
  }
}

const styles = StyleSheet.create({


  ButtonView:{
    flex:1,
  },

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
  picker: {
    marginLeft: '5%',
    width:'70%',
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    backfaceVisibility: 'hidden',
  },
  pickerItem: {
    color: 'red'
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
    room:state.room,
  }
}


export default connect(mapStateToProps,{SaveRoom})(Settings);
