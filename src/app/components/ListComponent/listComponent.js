import React,{ Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import MyButton from '../CommonComponents/button';


export default class ListComponent extends Component {    
    state = {
        buttonText: '',
        buttonIndex: 2
    };
    likeButtonclicked = () => {
        //this.props.buttonEvent(buttonText, cardText);
        Alert.alert("Like is call through the functional component");
    };
    detailButtonclicked = () => {
        //this.props.buttonEvent(buttonText, cardText);
        Alert.alert("Detail is call through the functional component");
    };
    favButtonclicked = (buttonText, cardText) => {
        //this.props.buttonEvent(buttonText, cardText);
        Alert.alert("Fav is call through the functional component");
    };
    

    render(){        
        return(
            <View>
                
            <ScrollView style={{width: '97%', alignContent: 'center'}}>
            {
                this.props.dataObject.map((obj) => {
                    return(
                        <View key={obj.id} style={this.props.parentStyle}>
                            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold',paddingVertical: 15}}> { obj.text }</Text>
                            <View style={{height: 190, width: '100%', borderWidth:0}}>
                                <Image source={{uri: obj.uri}} style={{flex: 1, width: null, alignSelf:'stretch',}}/>
                            </View>                            
                        </View>
                    )
                })
            }               
            </ScrollView>
            </View>
        )
    };
}
