import{StyleSheet} from 'react-native';

const mascara = StyleSheet.create({
  imgsplash:{
    flex: 1,                   
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#fff', 
  },
  fundo:{
    flex:1,
    backgroundColor:'#ccc',
  },
container:{
  flex: 1,
  justifyContent:"center",
  padding: 16,
  backgroundColor: "#fff",
},
 title:{
  fontSize: 24,
   marginBottom: 16,
  textAlign:'center',
  fontWeight: 'bold',
},
input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal:20,
}
});

export default mascara;
