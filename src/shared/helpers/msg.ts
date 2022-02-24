import Toast from 'react-native-toast-message';

export  const msgSuccess=(text:string)=>{
    Toast.show({
        type: 'success',
        text1: 'Success',
        text2: text
      });
}

export  const msgError=(text:string)=>{
    Toast.show({
        type: 'error',
        text1: 'Error',
        text2: text
      });
}

export  const msgInfo=(text:string)=>{
  Toast.show({
      type: 'info',
      text1: text,      
    });
}