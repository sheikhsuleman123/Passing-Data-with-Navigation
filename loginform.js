import React, { Component } from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import { styles } from './src/assets/style/appStyle';



class LoginForm extends Component{
    constructor(){
        super();
        //Alert.alert("This is constructor");
    }
    
render(){
    //Alert.alert("Render executed");
    return(
        <View style={styles.container}>
            <View style={styles.childContainer}>
                <Text style={styles.lable}>User Name : </Text>
                <TextInput placeholder='Please type your user name' />
                {/* <Text style={styles.value}>Please type your user name</Text> */}
            </View>
            <View style={styles.childContainer}>
                <Text style={styles.lable}>Password :</Text>
                <Text style={styles.value}>Please type your password</Text>
            </View>
            <View style={styles.childContainer}>
                <Text style={{textAlign: 'right', color: '#00Bfff'}}>Forget password</Text>
            </View>
            <View style={styles.childContainer}>
                <Text style={[styles.value, {alignSelf: 'center', textAlign: 'center', 
                padding: 10, borderWidth: 1, borderColor: '#00Bfff', 
                borderRadius: 10}]}>Login</Text>
            </View>
        </View>
    )
}
}
export default LoginForm