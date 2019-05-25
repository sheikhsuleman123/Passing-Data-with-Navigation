import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import { TextField } from "react-native-material-textfield";
import { styles } from '../../../assets/css/appStyle';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


class SignupDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            city: '',
            country: ''
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    childModalNavigationHandler = (objVal) => {
        Promise.all([
            Icon.getImageSource('ios-arrow-round-back', 40)
        ]).then(src => {
            Navigation.showModal({
                screen: 'MikeSuleman.AllDataScreen',
                title: 'Signup Information',               
                passProps: {
                    ObjectVal: objVal
                },
                animated: true,
                animationType: 'fade',
                navigatorButtons: {
                    leftButtons: [
                        {
                            id: 'backPress',
                            icon: src[0] // if you want an image button
                        }
                    ]
                }
            });
        });
    }

    componentWillMount() {
        this.setState({
            firstName: this.props.ObjectVal.fName,
            lastName: this.props.ObjectVal.lName
        });
    }
    onNavigatorEvent(event) {
        // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') {
          // this is the event type for button presses
          if (event.id == 'backPress') {           
            this.props.navigator.dismissModal();
          }
        }
      }

    onClickHandler = () => {

        const{firstName, lastName, email, phoneNumber, address, city, country} = this.state;
        
        const myVal = {
            fName: firstName,
            lName: lastName,
            eml: email,
            fNumber: phoneNumber,
            add: address,
            ct: city,
            cntry: country,
        };     
        this.childModalNavigationHandler(myVal);
  
    };
    render(){
         const { firstName, lastName, email, phoneNumber, address, city, country } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.childContainer}>
                        <TextField
                            label="First Name"
                            value={firstName}
                            disabled={true}
                            onChangeText={(fName) => this.setState({firstName: fName})}
                            maxLength={50}
                        />
                        <TextField
                            label="Last Name"
                            value={lastName}
                            disabled={true}
                            onChangeText={(lName) => this.setState({lastName: lName})}
                        />
                        <TextField
                            label="Email"
                            value={email}                            
                            onChangeText={(eml) => this.setState({email: eml})}
                            maxLength={50}
                        />
                        <TextField
                            label="Phone Number"
                            value={phoneNumber}                           
                            onChangeText={(fNumber) => this.setState({phoneNumber: fNumber})}
                        />
                        <TextField
                            label="Address"
                            value={address}                            
                            onChangeText={(add) => this.setState({address: add})}
                            maxLength={750}
                        />
                        <TextField
                            label="City"
                            value={city}                           
                            onChangeText={(ct) => this.setState({city: ct})}
                        />
                        <TextField
                            label="Country"
                            value={country}                            
                            onChangeText={(cntry) => this.setState({country: cntry})}
                            maxLength={50}
                        />                        

                </View>

                <View style={styles.childContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.onClickHandler()}>
                        <Text style={styles.loginTitle}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

export default SignupDetails;
