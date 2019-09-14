import React from 'react';
import { Text, View, StyleSheet, Platform, ScrollView } from 'react-native';


export default class InningsScore extends React.Component  {
  
 private side = {
    left: 0,
    right: 1
 };

  constructor(props){
    super(props);
  }

  getSegmentString = (data,segmentLength, side) => {
    return `${this.getSegment(data.runs, segmentLength, side)}${this.getSegment(data.hits, segmentLength, side)}${this.getSegment(data.errors, segmentLength, side)}`    
  }

  getSegment =(data, segmentLength, side) => {
    if (data != undefined || data != null){
        switch (side) {
            case this.side.left:
                return data.toString().padEnd(segmentLength);
            case this.side.right:
                return data.toString().padStart(segmentLength);
            }  
    }else {
        return " ".padEnd(segmentLength);
    }
  }

  render(){
    const segmentLength = 5;
    const spaces = " ".repeat(segmentLength-1);
    const rhe = `R${spaces}H${spaces}E`;

      return(
        <View style = { styles.container }>
            <View style = { styles.separator }/>
            <ScrollView>

            <View style = { styles.rowContainer }>
                <Text style = { styles.text }>{ rhe }</Text>
                <Text style = { styles.text }>{ 'Innings' }</Text>
                <Text style = { styles.text }>{ rhe }</Text> 
            </View>
            {
                this.props.innings.map(( item, index ) => (
                    <View key={index} style = { styles.rowContainer }>
                        <Text style = { styles.text }>{ this.getSegmentString(item.away, segmentLength, this.side.left)}</Text>
                        <Text style = { styles.text }>{ item.no}</Text>
                        <Text style = { styles.text }>{ this.getSegmentString(item.home, segmentLength, this.side.right)}</Text>
                    </View>
                ))
            }
        </ScrollView>            
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

    separator:
    {
      height: 2,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      marginBottom: 10
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
      padding: 5,
      marginLeft: 30,
      marginRight: 30
    }
    
  });