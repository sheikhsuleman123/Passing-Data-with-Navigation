import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import SignUpScreen from "./src/app/screens/signup/signup";
import SignupDetailsScreen from './src/app/screens/signup/signupDetails';
import AllDataScreen from './src/app/screens/signup/AllData';


Navigation.registerComponent("MikeSuleman.SignUpScreen", () => SignUpScreen); 
Navigation.registerComponent("MikeSuleman.SignupDetailsScreen", () => SignupDetailsScreen);
Navigation.registerComponent("MikeSuleman.AllDataScreen", () => AllDataScreen);

export default () => { 
Promise.all([
  Icon.getImageSource('ios-briefcase', 30),
  Icon.getImageSource('ios-paper', 30)
]).then(src => {
    Navigation.startTabBasedApp({
      tabs:[
        {
          label: 'Mike',
          screen: 'MikeSuleman.SignUpScreen',
          icon: src[0],
          title: 'Mike is a wonderful person!'
        },
        {
          label: 'Suleman',
          screen: 'MikeSuleman.SignUpScreen',
          icon: src[1],
          title: 'Suleman is a great person!'
        }
      ]
    });
});
}


