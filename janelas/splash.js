import { Text, SafeAreaView, Image } from 'react-native';
import mascara from '../css/estilo';

export default function Splash({navigation}) 
{
async function prepare(){
  try{

    await new Promise (tempo => setTimeout(tempo, 4000));  
  }catch (e) {
    Alert.alert(e);
  } finally{
    navigation.navigate('telalogin');
  }
} prepare();
  return (
    <SafeAreaView style={mascara.imgsplash}>
      <Image
        source = {require('../img/splashimage.png')}
        style={{ borderRadius:10}}
      />
    </SafeAreaView>
  );
}

