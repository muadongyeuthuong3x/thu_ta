import * as React from 'react';
import firebase from '@react-native-firebase/app';
import TabBottom from './component/Tab/TabBottom';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from "./component/Screen/Login"
import ItemUserChat from "./component/Screen/ItemUserChat"
const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyBZkh8nkvgcv6HUWCftIJPkuSZANMvlVLU",
  authDomain: "tathuheo.firebaseapp.com",
  databaseURL: "https://tathuheo-default-rtdb.firebaseio.com",
  projectId: "tathuheo",
  storageBucket: "tathuheo.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:277423826521:android:b2532fa4d14095a7d9f348",
  measurementId: "277423826521"
};


import Auth from './Service/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './Redux/reducer/user';

const dispatch = useDispatch();

const { userData, login } = useSelector(state => state.User);

const [loginChk, setloginChk] = useState(true);


useEffect(() => {
  getUser();
}, []);

const getUser = async () => {
  let data = await Auth.getAccount();
  if (data != null) {
    dispatch(setUser(data));
    setloginChk(false)
  } else {
    setloginChk(false)
  }
}



export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {!login ?  
         <Stack.Screen name="SignIn"    component={SignInScreen} />:
         <> 
       <Stack.Screen name="UserChat" component={TabBottom} /> 
       
        <Stack.Screen name="Messengers" component={ItemUserChat} /> </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}