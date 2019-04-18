import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import avatar from './assets/avatar.png'
import { connect } from 'react-redux'
import * as Network from './Server.js'

class chat extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'chat',
    visible:true,
  })
  constructor(props){
    super(props);
    this.state = {
      messages:[]
    }
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello How May I help you',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'manager',
            avatar: avatar,
          },
        },
      ],
    })
  }

  onSend(messages = []) {
   this.setState(previousState => ({
     messages: GiftedChat.append(previousState.messages, messages),
   }),()=>{
     return new Promise(
        function(resolve,reject){
          this.post(messages,this.props.user,this.props.room)
          .catch((error)=>{reject(new Error("Error in sending function"))})
        }
      )
   })
 }



 post(messages,teacher,room)
 {
   console.log(JSON.stringify({teacher:teacher,messsages:messages[0].text,room:room}));

   return new Promise(
     function(resolve,reject){
      fetch(Network.ip + '/message/send',
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({teacher:teacher,messages:messages[0].text,room:room}),
    }).then((response) => {console.log(response);})
    .catch((error)=> {reject(new Error("Error in calling API"))}  )
  })
 }
  render () {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => {
          this.onSend(messages)
        }}
        user={{
          _id: 1,
        }}
      />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})


function mapStateToProps(state){
  return{
    user:state.user,
    room:state.room,
  }
}


export default connect(mapStateToProps)(chat);
