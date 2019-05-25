import React,{ Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert, Platform, Switch, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../../assets/css/appStyle';
import { TextField } from "react-native-material-textfield";




export default class SignupComponent extends Component {
        state = {
            firstName: '',
            lastName: '',            
        };
    clicked = () => {
        this.props.mike(this.state);

    }
    render(){
        const { firstName, lastName } = this.state;        
        return(
            <View style={{width: 350}}>
                
                <View style={styles.childContainer}>
                    <TextField
                        label="First Name"
                        value={firstName}
                        onChangeText={(fName) => this.setState({firstName: fName})}
                        maxLength={50}
                    />
                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChangeText={(lName) => this.setState({lastName: lName})}
                    />
               </View>
               <View style={styles.childContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.clicked()}>
                        <Text style={styles.loginTitle}>Move Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
