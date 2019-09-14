import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform, Button  } from 'react-native';


export default class LineScore extends React.Component  {
  
  constructor(props){
    super(props);
  
  }

  render(){

      const homeScore = this.props.selectedGame.homeScore;
      const awayScore = this.props.selectedGame.awayScore;

      const selectedItem = this.props.selectedItem;

      return(
        <View style = { styles.container }>
        <ScrollView style={{flex: 1, paddingTop:20}}>

          <View style = { styles.rowContainer }>
            <Text style = { styles.text }>{ selectedItem.homeScore.name}</Text>
            <Text style = { styles.text }>{ selectedItem.awayScore.name}</Text> 
          </View>

          <View style = { styles.rowContainer }>
            <Text style = { styles.text }>{ homeScore.runs}</Text>
            <Text style = { styles.text }>Runs</Text>
            <Text style = { styles.text }>{ awayScore.runs}</Text>
          </View>

          <View style = { styles.rowContainer }>
            <Text style = { styles.text }>{ homeScore.hits}</Text>
            <Text style = { styles.text }>Hits</Text>
            <Text style = { styles.text }>{ awayScore.hits}</Text>
          </View>
  
          <View style = { styles.rowContainer }>
            <Text style = { styles.text }>{ homeScore.errors}</Text>
            <Text style = { styles.text }>Errors</Text>
            <Text style = { styles.text }>{ awayScore.errors}</Text>
          </View>

      </ScrollView>
      
        <View style = { styles.backButton }>
            <Button title="Back" onPress={() => this.props.onBack()}/>
        </View>
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

    backButton: {
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50
    },

    rowContainer: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    
   
    text:
    {
      fontSize: 18,
      color: 'black',
      padding: 15,
      marginLeft: 15,
      marginRight: 15
    }
    
  });