import React,{ Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Alert, Platform, Switch, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../../assets/css/appStyle';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextField} from 'react-native-material-textfield';


class AllData extends Component { 
    constructor(props){
        super(props);
    
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        country: '',

        description: '',
        about: '',            
        showData:false
    };
    }

    componentWillMount() {
        this.setState({
            firstName: this.props.ObjectVal.fName,
            lastName: this.props.ObjectVal.lName,
            email: this.props.ObjectVal.eml,
            phoneNumber: this.props.ObjectVal.fNumber,
            address: this.props.ObjectVal.add,
            city: this.props.ObjectVal.ct,
            country: this.props.ObjectVal.cntry,        
        });
    }

    
    clicked() {
        const {showData} = this.state;
        this.setState({
            showData: !showData
        })
    }
    render(){      
        const {firstName,lastName,email,phoneNumber,address,city,country,description,about} = this.state
        return(
            <ScrollView  contentContainerStyle={styles.container}>
                 <View style={{width: 350}}>
                
                <View style={styles.childContainer}>
                    <TextField
                        label="Discription"
                        value={description}
                        onChangeText={(dis) => this.setState({description: dis})}
                    />
                    <TextField
                        label="About us"
                        value={about}
                        onChangeText={(abt) => this.setState({about: abt})}
                    />
                    </View>
                    

                    
                    <View>  
                        <View>
                        <Text>First Name: {firstName} </Text>
                    </View>
                    <View>
                        <Text>Last Name: {lastName}</Text>
                    </View>
                    <View>
                        <Text>Email: {email}</Text>
                    </View>
                    <View>
                        <Text>Phone Number: {phoneNumber}</Text>
                    </View>
                    <View>
                        <Text>Address: {address}</Text>
                    </View>
                    <View>
                        <Text>City: {city} </Text>
                    </View>
                    <View>
                        <Text>Country: {country}</Text>
                    </View>
                    <View>
                     <Text>Discription: {description} </Text>
                    </View>
                    <View>
                    <Text>About us: {about}</Text> 
                    
                    </View> 
                    
                    </View>
                

               </View>
               <View style={styles.childContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.clicked()}>
                        <Text style={styles.loginTitle}>Show Data</Text>
                    </TouchableOpacity>
                </View>
                      
            </ScrollView>
        )
    }
}

export default AllData;

