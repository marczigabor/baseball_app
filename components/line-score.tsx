import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform  } from 'react-native';


export default class LineScore extends React.Component  {
  
  constructor(props){
    super(props);
  
  }

  render(){

      return(
        <View style = { styles.container }>
          {this.props.selectedGameId}
        </View>
      )
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