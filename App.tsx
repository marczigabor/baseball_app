import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform  } from 'react-native';


export default class App  extends React.Component  {
  
  constructor(props){
    super(props);
    this.state = { isLoading: true};
  }

  componentDidMount(){
//    return fetch('http://lbgonemac:8080/api/v1/baseball/schedule?year=2019&month=9&day=7')
    return fetch('http://192.168.0.16:8080/api/v1/baseball/schedule?year=2019&month=9&day=7')
      .then((response) => response.json())
      .then((responseJson) => {

        console.log("done");
        this.setState({
          isLoading: false,
          dataSource: responseJson.scores,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

      <View style = { styles.container }>
      <ScrollView style={{flex: 1, paddingTop:20}}>
      {
        this.state.dataSource.map(( item, key ) =>
        (
          <View key = { key } style = { styles.item }>
              <Text style = { styles.text }>{ item.awayScore.name}</Text>
              <Text style = { styles.text }>{ item.homeScore.name}</Text>
              <View style = { styles.separator }/>
          </View>
        ))
      }
    </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    
    separator:
    {
      height: 2,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%'
    },
   
    text:
    {
      fontSize: 18,
      color: 'black',
      padding: 15
    }
  });