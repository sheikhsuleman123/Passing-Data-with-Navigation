import React from 'react';
import { TouchableOpacity, Text } from "react-native";

// const MyButton = ({buttonEvent, buttonText, isDisable, buttonStyle, textStyle}) => {
//     return(
//         <TouchableOpacity onPress={buttonEvent} style={buttonStyle} isDisable={isDisable}>
//             <Text style={textStyle}>{buttonText}</Text>
//         </TouchableOpacity>
//     )
// }
// export default MyButton;
const MyButton = (props) => {
    return(
        <TouchableOpacity onPress={props.buttonEvent} style={props.buttonStyle} isDisable={props.isDisable}>
            <Text style={props.textStyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}
export default MyButton;