import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View, ImageBackground, StyleSheet } from 'react-native';

const ScaneScreen = () => {
   const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/glass.png')}
        style={styles.imageBackground}>
        <View style={styles.image}>
            <Image style={{}} source={require('../assets/back.png')}/>
            </View>
            
            <View>
            <Image style={{position:'absolute',top:'50%',left:'15%'}} source={require('../assets/Rectangle26.png')}/>
            <Image style={{top:'8%',left:'15%'}} source={require('../assets/Group5.png')}/>
            </View>
            <View style={styles.image1}>
                <Image style={{width:60,height:60,borderRadius:10,marginTop:10}} source={require('../assets/glass1.png')}/>
                <View style={{justifyContent:'center'}}>
                     <Text style={{fontSize:12,color:'#C2C2C2'}}>Lauren’s</Text>
                     <Text style={{fontSize:16,color:'#494949'}}>Orange Juice</Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
                <View style={{backgroundColor:'#5A6CF3',width:45,height:44,borderRadius:10,marginTop:20,marginLeft:20}}>
                        <Text style={{fontSize:30,marginLeft:14, marginBottom:10,color:'white'}}>+</Text>
                </View>
                </TouchableOpacity>
             
            </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    textAlign:'center'
    
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
   
  },
  image:{
    justifyContent: 'center',
    alignItems: 'center',
 
    width:45,
    height:45,
    backgroundColor:'white',
    marginTop:57,
    marginLeft:20,
    borderRadius:10,
  },
  image1:{
    flexDirection:'row',
    justifyContent: 'center',
    gap:5,
    width:292,
    height:82,
    backgroundColor:'white',
    marginTop:70,
    borderRadius:20,
    marginLeft:55,
   
  }

}
);

export default ScaneScreen;