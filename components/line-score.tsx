import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform, Button  } from 'react-native';
import InningsScore from './innings-score';


export default class LineScore extends React.Component  {
  
  constructor(props){
    super(props);
  
  }

  render(){

      const homeScore = this.props.selectedGame.details.homeScore;
      const awayScore = this.props.selectedGame.details.awayScore;
      const innings  = this.props.selectedGame.details.innings;

      const main = this.props.selectedGame.main;

      return(
        <View style = { styles.container }>
          <View style={{flex: 3}}>

            <View style = { styles.rowContainer }>
              <Text style = { styles.text }>{ main.awayScore.name}</Text> 
              <Text style = { styles.text }>{ main.homeScore.name}</Text>
            </View>

            <View style = { styles.rowContainer }>
              <Text style = { styles.text }>{ awayScore.runs}</Text>
              <Text style = { styles.text }>Runs</Text>
              <Text style = { styles.text }>{ homeScore.runs}</Text>
            </View>

            <View style = { styles.rowContainer }>
              <Text style = { styles.text }>{ awayScore.hits}</Text>
              <Text style = { styles.text }>Hits</Text>
              <Text style = { styles.text }>{ homeScore.hits}</Text>
            </View>
    
            <View style = { styles.rowContainer }>
              <Text style = { styles.text }>{ awayScore.errors}</Text>
              <Text style = { styles.text }>Errors</Text>
              <Text style = { styles.text }>{ homeScore.errors}</Text>
            </View>

          </View>

          <View style={{flex: 6}}>
            <InningsScore innings={innings}/>
          </View>

          <View style={{flex: 1}}>
            <View style = { styles.backButton }>
                <Button title="Back" onPress={() => this.props.onBack()}/>
            </View>
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
      marginBottom: 10
    },

    backButton: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    rowContainer: {
      flex: 0.8, 
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
   
    text:
    {
      fontSize: 18,
      color: 'black',
      marginLeft: 30,
      marginRight: 30
    }
    
  });