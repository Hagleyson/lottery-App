export const TOKEN = "lotteryToken";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createSession = (token:string) => {
    AsyncStorage.setItem(
      TOKEN,
      JSON.stringify({token: token})
    );
};

export async function getSession () {    
  const local: string| null = await AsyncStorage.getItem(TOKEN);
  
  if (local) {
    const token = JSON.parse(local);    
    return token.token;
  }
  return null;
}

export async function destroySession(msg?: string) {
  try {
    window.localStorage.clear();
    window.location.reload();
  } catch (error) {
    throw new Error("destroy session error");
  }
}