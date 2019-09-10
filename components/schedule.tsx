import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform  } from 'react-native';


export default class Schedule extends React.Component  {
  
  constructor(props){
    super(props);
    this.state = { isLoading: true};
  }

  componentWillReceiveProps(props) {
    console.log("ez a date " + props.date);
    this.setState({date: this.props.date});
    this.getSchedule();
    return props;
  }

  componentDidMount(){
    this.setState({date: this.props.date});
   this.getSchedule(); 
  }

  getSchedule(){
//    return fetch('http://lbgonemac:8080/api/v1/baseball/schedule?year=2019&month=9&day=7')

    if (!this.state || !this.state.date){
      return;
    }

    var dd = String(this.state.date.getDate());
    var mm = String(this.state.date.getMonth() + 1);
    var yyyy = this.state.date.getFullYear();
    console.log(yyyy + " " + mm + " " +dd);

    return fetch(`http://192.168.0.16:8080/api/v1/baseball/schedule?year=${yyyy}&month=${mm}&day=${dd}`)
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
        <View style={{flex: 1, padding: 20, alignContent:'center'}}>
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
          <View key = { key }>

            <View style = { styles.rowContainer }>
              <Text style = { styles.textLeft }>{ item.awayScore.name}</Text>
              <Text style = { styles.textRight }>{ item.awayScore.runs}</Text>
            </View>

            <View style = { styles.rowContainer }>
              <Text style = { styles.textLeft }>{ item.homeScore.name}</Text>
              <Text style = { styles.textRight }>{ item.homeScore.runs}</Text>
            </View>
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
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
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