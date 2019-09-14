import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform, TouchableOpacity  } from 'react-native';


export default class Schedule extends React.Component  {
  
  constructor(props){
    super(props);
  
  }

  onGamePress(id, item){
    this.props.setSelectedGame(id, item);
  }

  render(){

    if(this.props.isLoading){
      return(
        <View style={{flex: 1, padding: 20, alignContent:'center'}}>
          <ActivityIndicator/>
        </View>
      )
    }else {

      return(

        <View style = { styles.container }>
        <ScrollView style={{flex: 1, paddingTop:20}}>
        {
          this.props.dataSource.map(( item ) =>
          (
            <View key = { item.id }>
              <TouchableOpacity onPress={()=> this.onGamePress(item.id, item) }>

                  <View style = { styles.rowContainer }>
                    <Text style = { styles.textLeft }>{ item.awayScore.name}</Text>
                    <Text style = { styles.textRight }>{ item.awayScore.runs}</Text>
                  </View>

                  <View style = { styles.rowContainer }>
                    <Text style = { styles.textLeft }>{ item.homeScore.name}</Text>
                    <Text style = { styles.textRight }>{ item.homeScore.runs}</Text>
                  </View>

                </TouchableOpacity>
                <View style = { styles.separator }/>
            </View>
          ))
        }
      </ScrollView>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      marginBottom: 20
    },

    rowContainer: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    separator:
    {
      height: 2,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%'
    },
   
    textLeft:
    {
      fontSize: 18,
      color: 'black',
      padding: 15,
      marginLeft: 40
    },

    textRight:
    {
      fontSize: 18,
      color: 'black',
      padding: 15,
      marginRight: 40
    }
    
  });