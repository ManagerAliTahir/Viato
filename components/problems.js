

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
  ,KeyboardAvoidingView,
  FlatList,

} from 'react-native';
import { ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { connect } from 'react-redux'
import { NavigationEvents } from "react-navigation";
import {
  TextInput,
  Alert,
  ScrollView
} from 'react-native';
import * as Network from './Server.js'

var ahmed=[
{
  name:'recieved'}
];

class Problems extends Component {
  constructor(props) {
  super(props);
  this.state = {
        problems:[]
    };
}
get(){

  return new Promise(
    function(resolve,reject){
        console.log("calling method");
        fetch(Network.ip + '/request/byteacher',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({teacher:this.props.user}),
        }).then((response) => response.json())
          .then((responseJson) => {
            this.setState({problems:responseJson},()=>{console.log(this.state.problems)});
          })
          .catch((error) => {
            reject(new Error('Unable to retrieve data'));
          });
    }
  )

}

render(){

    let list= this.state.problems.map((problems,index)=>{
      return(<View style={{marginTop:'0%'}}>
      <View style={{flexDirection:"row",height:'0.0%',width:'98%',marginLeft:'1%',marginTop:'28%',backgroundColor:'transparent',borderWidth:1,borderColor:"grey"}}>
                <View style={{height:'130%',width:'70%',marginTop:'0%',backgroundColor:"white"}}>
                 <Text style={{marginTop:'2%',marginLeft:'2%',fontSize:20,color:"black"}}>{problems.type}</Text>

                <TouchableOpacity style={{height:'40%',width:'40%',marginTop:'5%',marginLeft:'5%',backgroundColor:'#000033',alignItems:"center",justifyContent:"center"}}>
                <Icon style={{marginTop:'-5%'}} name="check" size={40} color="green"/>
                </TouchableOpacity>
                <Icon style={{marginTop:'-30%',marginLeft:'65%'}} name={problems.icon} size={80} color="#000033"/>



                </View>
              <View style={{height:'130%',width:'30%',marginTop:'0%',backgroundColor:"white"}}>

                          <Text style={{marginTop:'2%',marginLeft:'0%',fontSize:40,color:"#e65c00"}}>{problems.room_number}</Text>

                <Text style={{marginTop:'2%',marginLeft:'0%',fontSize:18,color:"black"}}>Quantity:  {problems.quantity}</Text>

                </View>


              </View>

      </View>)
      })


  return (

    <ImageBackground style={ {        width: '100%',
        height: '100%',
        flex: 1
} }
                 resizeMode='cover'
                 source={require('./assets/azul.jpg')}>
<ScrollView style={{height:'100%',width:'100%',flex:1}}>
      { list }
</ScrollView>
<View>
<NavigationEvents onDidFocus={()=>{
  this.get()
  .catch((reject)=>{Alert.alert('Error','Cannot connect to our Network, Please verify you have a working internet')})
}}/>
</View>
   </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

});


function mapStateToProps(state){
  return{
    user:state.user,
    room:state.room,
  }
}


export default connect(mapStateToProps)(Problems);
