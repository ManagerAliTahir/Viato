import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import React, { Component } from 'react'
import { StackActions, NavigationActions, createDrawerNavigator,createStackNavigator,DrawerItems,DrawerIcon} from 'react-navigation';
import { connect } from 'react-redux'
import problems from './problems'
import reports from './reports'
import chat from './chat'
import Settings from './Settings'
import Notification from './Notification'
import {
  AppRegistry,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Divider
,TouchableOpacity,
ImageBackground
} from 'react-native'

const CustomDrawerComponent = (props) => (

<SafeAreaView style={{flex:1}}>
<View style={{height:150,backgroundColor:"white"}}>

<ImageBackground style={{height:'100%',width:'100%'}}
                 resizeMode='cover'
                 source={require('./assets/blur.jpg')}>
<TouchableOpacity style={{height:'30%',width:'20%',backgroundColor:'transparent',marginTop:'5%',marginLeft:'5%',
alignItems:'center',justifyContent:'center'}}
            onPress={() => this.props.navigation.Profile} >
                 <Image style={{height:'100%',width:'100%',marginLeft:'0%',borderRadius:200,borderWidth:1,borderColor:'white'}} source={require('./assets/jack.png')}/>
        </TouchableOpacity>
<TouchableOpacity style={{height:'30%',width:'70%',backgroundColor:'transparent',marginTop:'-15%',marginLeft:'25%',justifyContent:'center'}}
            onPress={() => this.props.navigation.Profile} >
                 <Text style={{marginLeft:'10%',marginTop:'10%',color:'white',fontSize:18}}>Ali Taher</Text>

        </TouchableOpacity>
        <View style={{borderWidth:0.3,borderColor:"white",marginTop:'8%', width:'80%', marginLeft:'10%'}}>
</View>
</ImageBackground>

</View>
<ScrollView>
<DrawerItems {...props}/>
<View style={{borderWidth:0.3,borderColor:"grey",margin:5, width:'80%', marginLeft:'10%'}}>
</View>
<Text style={{marginLeft:'5%',marginTop:'2%'}}>Other</Text>

            <Text style={{marginLeft:'5%',marginTop:'2%',color:"black",fontSize:12}}>Change the rooms through Room in above </Text>

</ScrollView>

</SafeAreaView>
  )

const TopNavigator = createMaterialTopTabNavigator(
{
      Problems:{
        screen: reports,
      },
      Reports:{
        screen: problems,
      },
      Chat:{
        screen: chat,
      }
},
      {
          initialRouteName:'Problems',
          navigationOptions:{
            title:"Viota",
            header:{
              style:{
                backgroundColor:"#1f1f14"
              }
            }
      },
      tabBarOptions:{
        style:{backgroundColor:"#1f1f14"}
      },
      }


);

const Home=createStackNavigator({
  Home:{
    screen:TopNavigator,
  }
},{
  headerMode:"none"
})

const Drawer=createDrawerNavigator({
  Home:{
    screen:Home,
  },
  Settings:{
    screen:Notification,
  },

  Room:{
    screen:Settings,
  },
},{
  initialRouteName: 'Home',
  contentComponent:CustomDrawerComponent,
})

const AppContainer2 =createAppContainer(Drawer);

export default class Tabs extends React.Component {
  render() {
    return <AppContainer2 />;
  }
}
