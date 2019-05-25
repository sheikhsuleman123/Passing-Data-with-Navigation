import React,{ Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert, Platform, Switch, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../../assets/css/appStyle';
import SignupComponent from '../../components/SignupComponent/signupComponent';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class Signup extends Component { 

    
    componentWillMount(){
       
    }
    childModalNavigationHandler = (objVal) => {
        Promise.all([
            Icon.getImageSource('ios-arrow-round-back', 40)
        ]).then(src => {
            Navigation.showModal({
                screen: 'MikeSuleman.SignupDetailsScreen',
                title: 'Signup Details',               
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
    
    // Promise.all([Icon.getImageSource('ios-arrow-round-back', 40)]).then(  screenName, pageTitle, 
    //     src => {
    //     Navigation.showModal({
    //     screen: screenName, //'Jobee.SkillsFormScreen', e.g. // unique ID registered with Navigation.registerScreen
    //     title: pageTitle, //'Add Skills', e.g.// navigation bar title of the pushed screen (optional)
    //     subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
    //     passProps: {
    //     PageTitle: pageTitle,
    //     ObjectVal: objVal,
    //     UpdateObjectState: updateObjectState
    //     }, // Object that will be passed as props to the pushed screen (optional)
    //     animated: true, // does the push have transition animation or does it happen immediately (optional)
    //     animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
    //     navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
    //     navigatorButtons: {            
    //     leftButtons: [
    //     {
    //     id: 'backPress',
    //     icon: src[0] // if you want an image button
    //     }
    //     ]
    //     } // override the nav buttons for the pushed screen (optional)
    //     });
    //     }
    //     );
    onClickHandler = (abc) => {
        const{firstName, lastName} = abc;
        
        const myVal = {
            fName: firstName,
            lName: lastName
        };     
        this.childModalNavigationHandler(myVal);
        //Alert.alert(firstName + ' Sak '+ '  '+ lastName + ' Ali');  
    };
    render(){      
        return(
            <ScrollView  contentContainerStyle={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/img/logo.png')} style={styles.logo}/>
                </View>
                <SignupComponent
                    mike={this.onClickHandler}
                />
            </ScrollView>
        )
    }
}
export default Signup;
