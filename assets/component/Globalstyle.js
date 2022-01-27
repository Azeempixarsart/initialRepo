import { StyleSheet } from "react-native";
export const Globalstyle=StyleSheet.create({
    container:{
        flex:1,
    
        
    },
    Tinput: {
        height: 60,
        width:'90%',
        margin:10,
        borderWidth: 2,
        marginHorizontal:20,
        // padding: 10,
        borderRadius:35,
        borderColor:'#000',
        flexDirection:'row',
        alignItems:'center',



      },
      text:{
        alignSelf:'center',
        fontWeight:'400',
        color:'black',
        fontSize:20
      },
      TinputButton:{
        height: 60,
        width:'90%',
        margin:15,
        borderWidth: 2,
        marginHorizontal:20,
        // padding: 10,
        borderRadius:35,
        borderColor:'#000',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#000',
        justifyContent:'center',

      }
})