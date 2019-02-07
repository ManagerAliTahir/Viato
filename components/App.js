import React from 'react'
import Tabs from './Tabs'
import Stack from './LoginStack'
import { connect } from 'react-redux'
import { NetworkInfo } from 'react-native-network-info';
import {PermissionsAndroid,Alert} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Trap from './Trap'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      access:true,
    }
  }

async componentDidMount(){
      SplashScreen.hide();
  console.log("in alert");
  try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            'title': 'Wifi networks',
            'message': 'We need your permission in order to find wifi networks'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          NetworkInfo.getSSID(ssid => {
            console.log(ssid);
            if(!(ssid==="Ali")){
              Alert.alert(
  'Wifi Connection Needed',
  'To use this service please connect to university WiFi. Please connect to appropiate wifi and restart Application. If you are on Android >8. Kindly switch on location feature to use this application',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
this.setState({access:false})
            }
          });
        } else {
          console.log("You will not able to retrieve wifi available networks list");
        }
      } catch (err) {
        console.warn(err)
      }

}
 render() {
     console.log(this.props.loggedin);
     if(this.props.loggedin && this.state.access){
       return( <Tabs/> )
     }
     else if (this.state.access) {
       return (<Stack/>)
     }

     else{
       return(<Trap/>)
     }
   }

}
function mapStateToProps(state){
 return{
   loggedin:state.loggedin,
 }
}
export default connect(mapStateToProps)(App);
