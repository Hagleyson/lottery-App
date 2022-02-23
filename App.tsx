import { Platform } from "react-native";
import { Provider } from "react-redux";


import AppNavigator from "./src/navigation";
import {store} from "./src/store"

import Toast from 'react-native-toast-message';

if(Platform.OS === 'android') { 
  require('intl'); 
  require('intl/locale-data/jsonp/pt-BR'); 
}



export default function App() {
  return (
    <Provider store={store}>      
      <AppNavigator />
      <Toast />
    </Provider>
  );
}
