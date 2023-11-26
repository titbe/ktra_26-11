import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const DataCart =[
    {
        img: require('../assets/Rectangle31.png'),
        name: 'Lauren’s',
        drink: 'Orange Juice',
        price: '₹ 149',
    },
    {
        img: require('../assets/Rectangle32.png'),
        name: 'Baskin’s',
        drink: 'Skimmed Milk',
        price: '₹ 129',
    },
    {
        img: require('../assets/Rectangle45.png'),
        name: 'Marley’s',
        drink: 'Aloe Vera Lotion',
        price: '₹ 1249',
    },
]   

const ListCart = ({item}) => {
//     const [quantity, setQuantity] = useState(0);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

    return (
      <View style={{backgroundColor:'#F8F8FB', borderRadius:16, marginTop: 15}}>
        <View style={{padding: 10, flexDirection:'row'}}>
            <Image source={item.img}/>

            <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
                <Text style={{fontSize:10, color:'#B1B1B1'}}>{item.name}</Text>
                <Text style={{fontSize:12, color:'#494949'}}>{item.drink}</Text>
                <Text style={{fontSize:16, color:'#F08F5F', fontWeight: 700}}>{item.price}</Text>
            </View>

            <View style={{justifyContent: 'flex-end', marginLeft: 110}}>
                <View style={{borderRadius: 5, backgroundColor: '#FFF', paddingVertical: 10, flexDirection: 'row', alignItems:'center'}}>
                    <TouchableOpacity style={{marginHorizontal: 10}}>
                        <Image source={require('../assets/Group162.png')}></Image>
                    </TouchableOpacity>
                    <Text>2</Text>
                    <TouchableOpacity style={{marginHorizontal: 10}}>
                        <Image source={require('../assets/Group3.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    )
  }

const Cart = () => {
const navigation = useNavigation();

  return (
    <View style={{marginHorizontal: 15, marginTop:50}}>
        <TouchableOpacity style={{backgroundColor:'#F8F8FB', borderRadius:9, height: 44, width: 45, alignItems:'center', justifyContent:'center'}}>
            <Image tintColor={'#F08F5F'} source={require("../assets/back.png")}/>
        </TouchableOpacity>
        <Text style={{color:'#363636', fontSize: 22, fontWeight:700, marginTop: 40}}>Your Cart 👍🏻</Text>
        <FlatList
            data={DataCart}
            renderItem={ListCart}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
            <Text style={{fontSize: 18, color:'#363636', fontWeight: 700}}>Total</Text>
            <Text style={{fontSize:18, color:'#F08F5F', fontWeight: 700}}>₹ 1,527</Text>
        </View>

        <TouchableOpacity style={{backgroundColor:'#F08F5F', borderRadius: 16, alignItems:'center', marginTop:50}} onPress={() => {navigation.navigate('Payment');}}>
            <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 22, paddingVertical:24}}>
                <Text style={{color: '#FFF', fontSize: 18, fontWeight: 700}}>Proceed to checkout</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Cart