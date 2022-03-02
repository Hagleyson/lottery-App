import { Platform } from "react-native";
import { Provider } from "react-redux";


import AppNavigator from "./src/navigation";
import {store} from "./src/store"

import Toast,{BaseToast,ErrorToast} from 'react-native-toast-message';

if(Platform.OS === 'android') { 
  require('intl'); 
  require('intl/locale-data/jsonp/pt-BR'); 
}

const toastConfig ={
  success:(props:any)=>(
    <BaseToast
    {...props}
    style={{height:100,borderColor:"#00ff2a"}}
    text1Style={{
      fontSize:18,
      fontWeight:"400"
    }}
    text2Style={{
      fontSize:16,
      fontWeight:"400"
    }}

    />
  ),
  error:(props:any)=>(
    <ErrorToast 
    {...props}
    style={{height:100,borderColor:"#ff0000"}}
    text1Style={{
      fontSize:18,
      fontWeight:"400"
    }}
    text2Style={{
      fontSize:16,
      fontWeight:"400"
    }}
    />
  ),
  info:(props:any)=>(
    <ErrorToast 
    {...props}
    style={{height:100,borderColor:"#48a4f0"}}
    text1Style={{
      fontSize:18,
      fontWeight:"400"
    }}
    text2Style={{
      fontSize:16,
      fontWeight:"400"
    }}
    />
  )

}


export default function App() {
  return (
    <Provider store={store}>      
      <AppNavigator />
      <Toast config={toastConfig} />
    </Provider>
  );
}
