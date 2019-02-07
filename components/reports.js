import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
  ,KeyboardAvoidingView,
  Button
} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android'
import Modal from 'react-native-modalbox';
import {
  TextInput,
  Alert,
  ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
class Reporting extends Component {

  static navigationOptions = {
     drawerIcon:(
<Icon name="movie" size={20} color="black" style={{marginRight:'-50%',marginLeft:'-10%'}}/>
      ),

    headerStyle: {
      elevation:0
    }
    ,visible:true,
  };
  constructor(props) {
  super(props);
  this.state = {
          quantity:"1",
          textInput : [],
          type:"",
          done:true,
          animate:false,
          description:"Data",
          year:"",
          room:this.props.room,
          user:this.props.user,
    };
    post=this.post.bind(this);
    onModalClose=this.onModalClose.bind(this);
    }



room(){
  return(<View>
  <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={{justifyContent:"center",alignItems: 'center',alignContent:'center',height: 250}} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} swipeToClose={false} >
  <View style={{backgroundColor:"red",borderBottomWidth:1}}>
  <Text style={{color:"white",fontSize:16,margin:'2%',marginBottom:"2%"}}>Are you in{this.state.room}??</Text>
  </View>
  <View style={{flexDirection:"row",marginTop:"20%",alignContent:"space-between",justifyContent:"space-between"}}>
  <Button color="black" title="Yes"/>
  <Button color="black" title="No"/>
  </View>
  </Modal>
  </View>)
}

    post(state)
    {
      console.log(this.props);
      console.log(JSON.stringify(state));
      fetch('http://192.168.0.103:8080/request/post',
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        teacher:this.props.user,
        room_number:this.props.room,
        type:state.type,
        quantity:state.quantity,
        description:state.description,
        icon:state.icon
      }),
    }).then((response) => {console.log(response);
      if(response.ok)
      {
        this.setState({
          done:false,
          animate:true,
        });
      }

    })

    }

    onModalClose(){
      this.setState({
        done:true,
        animate:false,
        quantity:"1",
        description:"Enter-Code",
      });
    }


  render() {
      let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    return (

      <View  style={{flex:1,backgroundColor:"white"}}>
      <View>
      <View>
            <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={styles.modal} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} ref={"modal"} swipeToClose={false} >

            {this.state.done && <View style={{alignItems:"center"}}>
              <View style={{backgroundColor:"#802000",borderBottomWidth:1}}>
              <Text style={{color:"white",fontSize:16,margin:'2%',marginBottom:"2%"}}>Please enter the quantity of Question Papers and Course-Code</Text>
              </View>
              <View style={{borderBottomWidth:1,margin:"2%"}}>
              <Text>Course-Code={this.state.description}</Text>
              <View style={{flexDirection:"row",alignItems:"center",alignContent:"space-between"}}>
              <TextInput
              style={{marginRight:"22%", margin:"2%",height: 40,width:"30%", borderColor: '#802000', borderWidth: 1}}
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
              />
              <Button color="#802000" title='Send Request' onPress={()=>{this.setState({type:"Question Paper",icon:"instapaper"},()=>{post(this.state);});

          }}/>
              </View>
              </View>
              <View style={{borderBottomWidth:1}}>
              <Text>Quantity={this.state.quantity}</Text>
              <View style={{flexDirection:"row",alignContent:"space-between",alignItems:"center"}}>
                    <TextInput
                    style={{margin:"2%",height: 40,width:"30%", borderColor: '#802000', borderWidth: 1}}
                    onChangeText={(quantity) => this.setState({quantity})}
                    value={this.state.quantity}
                    keyboardType="numeric"
                    maxLength={2}
                    />
                    <WheelPicker
                          onItemSelected={(event)=>{
                            this.setState({quantity:event.data});}}
                          isCurved={true}
                          isCyclic
                          data={arr}
                          selectedItemTextColor="black"
                          visibleItemCount={3}
                          renderIndicator={true}
                          indicatorColor="#802000"
                          style={{height:80,width:"40%",margin:"2%",marginLeft:"10%"}}
                          />
              </View>
              </View>

            </View>}
            {this.state.animate &&     <LottieView
                    source={require('./checked_done_.json')}
                    autoPlay />}
            </Modal>

            <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={{justifyContent: 'flex-start',alignItems: 'center',alignContent:'center',height: 250}} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} ref={"modal1"} swipeToClose={false} >

            {this.state.done && <View style={{alignItems:"center"}}>
              <View style={{backgroundColor:"#b30047",borderBottomWidth:1}}>
              <Text style={{color:"white",fontSize:16,margin:'2%',marginBottom:"2%"}}>Please enter the quantity of Answer Sheets Needed</Text>
              </View>
              <View style={{borderBottomWidth:1,margin:"2%",alignContent:"flex-start"}}>
              <View style={{flexDirection:"row",alignItems:"center",alignContent:"space-between"}}>
              <Button color="#b30047" title='Send Request' onPress={()=>{this.setState({type:"Answer Sheets",description:"Need Answer Sheets Quickly",icon:"newspaper"},()=>{post(this.state);});

          }}/>
              </View>
              </View>
              <View style={{borderBottomWidth:1}}>
              <Text>Quantity={this.state.quantity}</Text>
              <View style={{flexDirection:"row",alignContent:"space-between",alignItems:"center"}}>
                    <TextInput
                    style={{margin:"2%",height: 40,width:"30%", borderColor: '#b30047', borderWidth: 1}}
                    onChangeText={(quantity) => this.setState({quantity})}
                    value={this.state.quantity}
                    keyboardType="numeric"
                    maxLength={2}
                    />
                    <WheelPicker
                          onItemSelected={(event)=>{
                            this.setState({quantity:event.data});}}
                          isCurved={true}
                          isCyclic
                          data={arr}
                          selectedItemTextColor="black"
                          visibleItemCount={3}
                          renderIndicator={true}
                          indicatorColor="#b30047"
                          style={{height:80,width:"40%",margin:"2%",marginLeft:"10%"}}
                          />
              </View>
              </View>

            </View>}
            {this.state.animate &&     <LottieView
                    source={require('./checked_done_.json')}
                    autoPlay />}
            </Modal>

            <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={{justifyContent: 'flex-start',alignItems: 'center',alignContent:'center',height: 250}} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} ref={"modal2"} swipeToClose={false} >

            {this.state.done && <View style={{alignItems:"center"}}>
              <View style={{backgroundColor:"#003300",borderBottomWidth:1}}>
              <Text style={{color:"white",fontSize:16,margin:'2%',marginBottom:"2%"}}>Please enter the quantity of Chairs/Benches Needed</Text>
              </View>
              <View style={{borderBottomWidth:1,margin:"2%",alignContent:"flex-start"}}>
              <View style={{flexDirection:"row",alignItems:"center",alignContent:"space-between"}}>
              <Button color="#003300" title='Send Request' onPress={()=>{this.setState({type:"Chairs",description:"Send Chairs hurry up",icon:"chair-school"},()=>{post(this.state)});

          }}/>
              </View>
              </View>
              <View style={{borderBottomWidth:1}}>
              <Text>Quantity={this.state.quantity}</Text>
              <View style={{flexDirection:"row",alignContent:"space-between",alignItems:"center"}}>
                    <TextInput
                    style={{margin:"2%",height: 40,width:"30%", borderColor: 'black', borderWidth: 1}}
                    onChangeText={(quantity) => this.setState({quantity})}
                    value={this.state.quantity}
                    keyboardType="numeric"
                    maxLength={2}
                    />
                    <WheelPicker
                          onItemSelected={(event)=>{
                            this.setState({quantity:event.data});}}
                          isCurved={true}
                          isCyclic
                          data={arr}
                          selectedItemTextColor="#003300"
                          visibleItemCount={3}
                          renderIndicator={true}
                          indicatorColor="black"
                          style={{height:80,width:"40%",margin:"2%",marginLeft:"10%"}}
                          />
              </View>
              </View>

            </View>}
            {this.state.animate &&     <LottieView
                    source={require('./checked_done_.json')}
                    autoPlay />}
            </Modal>

            <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={{justifyContent: 'center',alignItems: 'center',alignContent:'center',height: 150}} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} ref={"modal3"} swipeToClose={false} >

            {this.state.done && <View style={{alignItems:"center"}}>

              <View style={{borderBottomWidth:1,margin:"2%",alignContent:"center"}}>
              <Button color="#26004d" title='Confirm Request' onPress={()=>{this.setState({type:"Staplers",description:"Need Something to tie up papers",icon:"paperclip"},()=>{post(this.state)});

          }}/>
              </View>

            </View>}
            {this.state.animate &&     <LottieView
                    source={require('./checked_done_.json')}
                    autoPlay />}
            </Modal>

            <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={{justifyContent:"center",alignItems: 'center',alignContent:'center',height: 150}} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} ref={"modal4"} swipeToClose={false} >

            {this.state.done && <View>

              <View style={{borderBottomWidth:1,margin:"2%",}}>
              <Button color="#29293d" title='Confirm Request' onPress={()=>{this.setState({type:"Pens",description:"Need Something to write and Don't send chalk",icon:"pen"},()=>{post(this.state)});

          }}/>
              </View>

            </View>}
            {this.state.animate &&     <LottieView
                    source={require('./checked_done_.json')}
                    autoPlay />}
            </Modal>

            <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={{justifyContent:"center",alignItems: 'center',alignContent:'center',height: 150}} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} ref={"modal5"} swipeToClose={false} >

            {this.state.done && <View>

              <View style={{borderBottomWidth:1,margin:"2%",}}>
              <Button color="#e65c00" title='Confirm Request' onPress={()=>{this.setState({type:"Need Assistance", description:"Cover me!! Need reinforcements.",icon:"help-network"},()=>{post(this.state)});

          }}/>
              </View>

            </View>}
            {this.state.animate &&     <LottieView
                    source={require('./checked_done_.json')}
                    autoPlay />}
            </Modal>

            <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={{justifyContent:"center",alignItems: 'center',alignContent:'center',height: 150}} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} ref={"modal6"} swipeToClose={false} >

            {this.state.done && <View>

              <View style={{borderBottomWidth:1,margin:"2%",}}>
              <Button color="#b30000" title='Confirm Request' onPress={()=>{this.setState({type:"Duty Replacement", description:"Sorry.. gotta go",icon:"account-switch"},()=>{post(this.state)});

          }}/>
              </View>

            </View>}
            {this.state.animate &&     <LottieView
                    source={require('./checked_done_.json')}
                    autoPlay />}
            </Modal>

            <Modal onClosed={()=>{onModalClose()}} backButtonClose={true} style={{justifyContent:"center",alignItems: 'center',alignContent:'center',height: 250}} swipeThreshold={200} backdrop="true" backdropPressToClose="true" position={"center"} ref={"modal10"} swipeToClose={false} >
            {this.state.done && <View>

              <View style={{backgroundColor:"#3d3d29",borderBottomWidth:1}}>
              <Text style={{alignSelf:"flex-start",color:"white",fontSize:16,margin:'2%',marginBottom:"2%"}}>Please enter the Admit Card Details of student who forgot his admit card</Text>
              </View>


              <View>
              <Text>Admit Card Details</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center"}}>
              <Text>K-</Text>
              <TextInput
              style={{margin:"2%",height: 40,width:"10%", borderColor: '#3d3d29', borderWidth: 1}}
              onChangeText={(year) => this.setState({year})}
              value={this.state.year}
              placeholder="XX"
              maxLength={2}
              />
              <Text>-</Text>
              <TextInput
              style={{margin:"2%",height: 40,width:"25%", borderColor: '#3d3d29', borderWidth: 1}}
              onChangeText={(code) => {this.setState({code})}}
              value={this.state.code}
              placeholder="XXXX"
              maxLength={4}
              />
              </View>
              <View style={{borderBottomWidth:1,margin:"2%",}}>
              <Button color="#3d3d29" title='Confirm Request' onPress={()=>{this.setState({type:"Admit Card",icon:"account-card-details"},()=>{post(this.state)});}}/>
              </View>

            </View>}
            {this.state.animate &&     <LottieView
                    source={require('./checked_done_.json')}
                    autoPlay />}
            </Modal>



<ScrollView>
 <View style={{height:'20%',width:'100%',flexDirection:"row",backgroundColor:"red"}}>
<TouchableOpacity onPress={() => this.refs.modal.open()}
style={{height:'100%',width:'50%',backgroundColor:"#802000",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="instapaper" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Question Paper</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.refs.modal1.open()}
style={{height:'100%',width:'50%',backgroundColor:"#b30047",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="newspaper" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Answer Sheets</Text>

</TouchableOpacity>
</View>

<View style={{height:'20%',width:'100%',flexDirection:"row",backgroundColor:"red"}}>
<TouchableOpacity onPress={() => this.refs.modal2.open()}
style={{height:'100%',width:'50%',backgroundColor:"#003300",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-1%'}} name="chair-school" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-3%',marginLeft:'-2%'}}>Chairs</Text>

</TouchableOpacity>
<TouchableOpacity onPress={() => this.refs.modal3.open()}
style={{height:'100%',width:'50%',backgroundColor:"#26004d",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="paperclip" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Stapler</Text>

</TouchableOpacity>


</View>
<View style={{height:'20%',width:'100%',flexDirection:"row",backgroundColor:"red"}}>
<TouchableOpacity onPress={() => this.refs.modal4.open()}
style={{height:'100%',width:'50%',backgroundColor:"#29293d",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="pen" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Pen</Text>

</TouchableOpacity>
<TouchableOpacity onPress={() => this.refs.modal10.open()}
style={{height:'100%',width:'50%',backgroundColor:"#3d3d29",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="account-card-details" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Admit Card</Text>

</TouchableOpacity>


</View>
<View style={{height:'20%',width:'100%',flexDirection:"row",backgroundColor:"red"}}>
<TouchableOpacity onPress={() => this.refs.modal5.open()}
style={{height:'100%',width:'50%',backgroundColor:"#e65c00",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="help-network" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Need Assistance</Text>

</TouchableOpacity>
<TouchableOpacity onPress={() => this.refs.modal6.open()}
 style={{height:'100%',width:'50%',backgroundColor:"#b30000",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="account-switch" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Duty Replacement</Text>

</TouchableOpacity>


</View>
<View style={{height:'20%',width:'100%',flexDirection:"row",backgroundColor:"white"}}>
<TouchableOpacity onPress={()=>{console.log(this.props);this.props.navigation.navigate('Chat');}}
style={{height:'100%',width:'50%',backgroundColor:"black",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="alpha-o-box" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Others</Text>

</TouchableOpacity>

<TouchableOpacity onPress={()=>{console.log(this.props);this.props.navigation.navigate('Reports');}}
 style={{height:'100%',width:'50%',backgroundColor:"#4d004d",justifyContent:"center",alignItems:"center",borderWidth: 1,
    borderColor: "white",
   }}>
 <Icon style={{marginLeft:'-3%',marginTop:'-3%'}} name="alpha-r-box" size={50} color="white"/>
   <Text style={{fontSize:16,color:"white",marginTop:'-1%',marginLeft:'-2%'}}>Reports</Text>

</TouchableOpacity>


</View>

      <TouchableOpacity style={[styles.buttonContainer1, styles.loginButton2]}  >

        </TouchableOpacity>
        <View style={{height:200,backgroundColor:"transparent",width:'100%'}}>

        </View>


</ScrollView>
      </View>

      </View>
       </View>
    );

  }
}

const styles = StyleSheet.create({


  buttonContainer1: {
    width:'1%',
      height:120,
      flexDirection: 'row',

    alignItems: 'center',
    borderRadius:5,
   marginLeft:'2%'
   ,marginTop:'5%',
   borderWidth: 1,
    borderColor: "white",

  },
loginButton2: {
    backgroundColor: "white",
  },
  modal: {
          justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent:'center',
       height: 300
    },

});

function mapStateToProps(state){
  return{
    user:state.user,
    room:state.room,
  }
}


export default connect(mapStateToProps)(Reporting);
