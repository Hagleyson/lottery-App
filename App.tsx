import { Platform } from "react-native";
import "react-native-gesture-handler";
import AppNavigator from "./src/navigation";

if(Platform.OS === 'android') { // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
}

export default function App() {
  return <AppNavigator />;
}
