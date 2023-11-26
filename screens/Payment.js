import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Payment = () => {
  return (
    <View>
      <View style={{borderRadius:27 , borderColor:'rgba(1, 118, 63, 0.40)', borderWidth:1, height: 253}}>
        <View style={{marginTop:30, marginHorizontal: 15}}> 
            <TouchableOpacity style={{backgroundColor:'#F8F8FB', borderRadius:9, height: 44, width: 45, alignItems:'center', justifyContent:'center'}}>
                <Image source={require("../assets/back.png")}/>
            </TouchableOpacity>
            <View style={{alignItems:'center', flexDirection: 'row', justifyContent:'space-between', paddingTop:40}}>
                <Text style={{color: '#363636', fontSize: 22, fontWeight: 700}}>Checkout 💳</Text>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={{color: '#25D482', fontSize: 20, fontWeight: 700}}>₹ 1,527</Text>
                    <Text style={{color: '#B1B1B1', fontSize: 14, fontWeight: 400}}>Including GST (18%)</Text>
                </View>
            </View>
        </View>
      </View>

      <View style={{flexDirection:'row', marginHorizontal:15, alignItems:'center', position:'absolute', paddingTop:210}}>
        <TouchableOpacity style={{backgroundColor:'#25D482', borderRadius: 16, width:183}}>
            <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 22, paddingVertical:24}}>
                <Image source={require('../assets/Creditcardicon.png')}/>
                <Text style={{color: '#FFF', fontSize: 18, fontWeight: 700}}>  Credit card</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#F8F8FB', borderRadius: 16, width:183}}>
            <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 22, paddingVertical:24}}>
                <Image source={require('../assets/Appleicon.png')}/>
                <Text style={{color: '#3A3C3F', fontSize: 18, fontWeight: 700}}>  Apple Pay</Text>
            </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 70, marginHorizontal: 15}}>
        <Text style={{color: '#3A3C3F', fontSize: 16, fontWeight: 700}}>Card number</Text>
        <View style={{borderRadius:16, backgroundColor:'#F8F8FB', padding:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}> 
            <Text style={{ fontSize:16}}>5261   4141   0151   8472</Text>
            <TouchableOpacity style={{}}>
                <Image source={require('../assets/MasterCardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
                <Image source={require('../assets/CardIcon.png')}/>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 15}}>
        <Text style={{color: '#3A3C3F', fontSize: 16, fontWeight: 700}}>Cardholder name</Text>
        <TextInput style={{borderRadius:16, backgroundColor:'#F8F8FB', padding:15, fontSize:16}}> Christie Doe</TextInput>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{marginTop: 20, marginHorizontal: 15, width: 160}}>
            <Text style={{color: '#3A3C3F', fontSize: 16, fontWeight: 700}}>Expiry date</Text>
            <TextInput style={{borderRadius:16, backgroundColor:'#F8F8FB', padding:15, fontSize:16}}> 06   /   2024</TextInput>
        </View>
        <View style={{marginTop: 20, marginHorizontal: 15, width: 160}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{color: '#3A3C3F', fontSize: 16, fontWeight: 700}}>CVV / CVC</Text>
                <TouchableOpacity style={{marginHorizontal:15}}>
                    <Image source={require('../assets/Hint.png')}/>
                </TouchableOpacity>
            </View>
            <TextInput style={{borderRadius:16, backgroundColor:'#F8F8FB', padding:15, fontSize:16}}> 915</TextInput>
        </View>
      </View>

        <Text style={{color:'#B1B1B1', alignItems:'center', justifyContent:'center', fontSize:12, marginHorizontal:80, marginTop: 40}}>We will send you an order details to your email after the successfull payment</Text>
        <TouchableOpacity style={{backgroundColor:'#25D482', borderRadius: 16, marginHorizontal:15, alignItems:'center', marginTop:20}}>
            <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 22, paddingVertical:24}}>
                <Image source={require('../assets/noun_Lock_1911126.png')}/>
                <Text style={{color: '#FFF', fontSize: 18, fontWeight: 700}}>  Pay for the order</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Payment