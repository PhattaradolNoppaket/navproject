import { StyleSheet, Text, View ,ActivityIndicator,FlatList,Image} from 'react-native' //
import React,{useState,useEffect} from 'react'
import axios from 'axios';

const ProductScreen = () => {
  
    const [product,setProduct]=useState([]);

    useEffect(()=>{
      
        getData();
    },[])

    const getData = async()=>{
      const res = await axios.get('https://api.codingthailand.com/api/course')
      console.log(res.data.data)
      setProduct(res.data.data);
    }

    const ItemSeparatorView = () => {
      return (
        // Flat List Item Separator
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: 'black',
          }}
        />
      );
    };

    const _renderItem = ({item})=>{
      let picture = (item.picture!==null)
        ?item.picture 
        :'https://via.placeholder.com/150';
      return(
        <View style={styles.dataContainer}>
          <View style={styles.container}>
            <Image
              resizeMode='cover'
              source={{uri: picture}}
              style = {styles.thumbnail}
            />
            <View style={styles.dataContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
          </View>
        </View>
      )
    }
  return (
    <View>
      <FlatList
      data = {product}
      keyExtrator = {(item,index)=>item.id.toString()}
      ItemSeperatorComponent = {ItemSeparatorView}
      renderItem = {_renderItem}
      />
    </View>
  );
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
      height: 80,
      elevation: 3,
      borderColor: 'gray',
      borderRadius: 5,
      flexDirection: 'row',
      marginHorizontal: 20,
  },
  dataContainer: {
      flex: 1,
  },
  thumbnail: {
      width: 70,
      height: 70,
  },  
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
},
title: {
    color: '#444',
    fontSize: 18,
    fontWeight: 'bold',
},
detail: {
    fontSize: 16,
    color: '#888',
    fontWeight: '700',
},
})
