import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image,ImageBackground} from 'react-native';
import firebase from 'firebase';



export default class home extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : " ",
            bool1 : false,
            bool2 : false,
            opa : 1
        }
      this.readUserData

    }
    readUserData() {
        firebase.database().ref().on('value', function (snapshot) {
            this.setState('current',snapshot.val())
        });
    }

    
    
    
    componentWillMount(){
        var config = {
            apiKey: "AIzaSyAu4Y3LlfUFaKzmAHvoRPV4cbAu0Um0Zv0",
            authDomain: "speed-4c8f4.firebaseapp.com",
            databaseURL: "https://speed-4c8f4.firebaseio.com",
            projectId: "speed-4c8f4",
            storageBucket: "speed-4c8f4.appspot.com",
            messagingSenderId: "452639819784",
            appId: "1:452639819784:web:ba7c0e2573a8dac903e9bd",
            measurementId: "G-FVW9SBGTJ8"
          };
          // Initialize Firebase
          if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.database = firebase.database();
         
    }

     changeOn =()=>{
        firebase.database().ref().set({LED1:100})
        this.setState({current:100})
        this.setState({bool1 : true})
        this.setState ({opa : 0.4})
        this.setState({current : "Access granted!"})

     }
        
     changeOff =()=>{
        firebase.database().ref().set({LED1:0})
        this.setState({bool2 :false})
        this.setState({current:0})
        this.setState ({opa : 0.4})
        this.setState({current : "Access revoked!"})


     }
          
    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor : '#000007'}}>
                <ImageBackground source ={require('/Users/apple/Speedster/assets/black-texture-background.jpg')}style ={{width :'100%',height : '100%'}}>
                
                <Text style = {{fontSize : 30, alignSelf : 'center',color : 'white',marginTop : 50}}>{this.state.current}</Text>
               
                <TouchableOpacity title ='On'  onPress = {this.changeOn} disabled = {this.bool1} activeOpacity={this.state.bool1 ? 0.4 : 0.4}>
                    <View style ={{alignItems:'center',justifyContent:'center'}}>
                    <Image source = {require('/Users/apple/Speedster/assets/13.jpg')} style = {{borderRadius : 75,height : 150,width : 150,alignSelf:'center',marginTop :160}}></Image>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity title = 'Off' onPress = { this.changeOff}  disabled = {this.bool2} activeOpacity={this.state.bool2 ? 0.4 : 1}> 
                <View>
                <Image source = {require('/Users/apple/Speedster/assets/red.jpg')} style = {{borderRadius : 75,height : 150,width : 150,alignSelf:'center',marginTop :10}}></Image>
                
                    </View>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}