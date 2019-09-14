import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform  } from 'react-native';
import MyDatePicker from './date-picker';
import Schedule from './schedule';
import LineScore from './line-score';


export default class MainScoreboard extends React.Component  {
  
  constructor(props){
    super(props);

    const d = new Date();
    d.setDate( d.getDate() - 1 );

    this.state = {
        isLoading: true,
        date: new Date(d),
        dataSource: [],
        selectedGame : null
    }
  }

  setSelectedGame =(id, main) => {
    console.log(id);
    let newState = {...this.state};
    newState.isLoading = true;
    newState.selectedGame = {id: id, main: main, details: null};

    this.setState(newState, () => {
        this.getLineScore();
    });
  }

  getLineScore =()=>{

    let newState = Object.assign({}, this.state);
    newState.isLoading = true;
    this.setState(newState);    

    return fetch(`http://192.168.0.16:8080/api/v1/baseball/linescore?game_id=${this.state.selectedGame.id}`)
      .then((response) => response.json())
      .then((responseJson) => {

            let newState = Object.assign({}, this.state);
            newState.isLoading = false;
            newState.selectedGame.details = responseJson;
            this.setState(newState);

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  setDate = (date) => {
    console.log(date);

    this.setState({date: new Date(date), selectedGame: null}, () => {
      this.getSchedule(); 
    });

  };

  componentDidMount(){
   this.getSchedule(); 
  }

  getSchedule(){
//    return fetch('http://lbgonemac:8080/api/v1/baseball/schedule?year=2019&month=9&day=7')

    let newState = Object.assign({}, this.state);
    newState.isLoading = true;
    newState.selectedGame = null;
    this.setState(newState);

    var dd = String(this.state.date.getDate());
    var mm = String(this.state.date.getMonth() + 1);
    var yyyy = this.state.date.getFullYear();
    console.log(yyyy + " " + mm + " " +dd);

    return fetch(`http://192.168.0.16:8080/api/v1/baseball/schedule?year=${yyyy}&month=${mm}&day=${dd}`)
      .then((response) => response.json())
      .then((responseJson) => {

            console.log("done");
            let newState = Object.assign({}, this.state);
            newState.isLoading = false;
            newState.selectedGame = null;
            newState.dataSource = responseJson.scores;
            this.setState(newState);

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  onBack = ()=>{
    this.setState({selectedGame:null});
  }

  render(){

    let body;
    let selectedGame = this.state.selectedGame;

    if (selectedGame && selectedGame.details &&  selectedGame.main){
      body = <LineScore selectedGame={selectedGame} onBack={this.onBack} />
    } else {
      body = <Schedule dataSource={this.state.dataSource} isLoading={this.state.isLoading} setSelectedGame={this.setSelectedGame} />
    }

    return(
        <React.Fragment>
          <View style = {{flex: 1}}>
            <MyDatePicker date={this.state.date} setDate={this.setDate}/>
          </View>
          <View style = {{flex: 4}}>
            {body}
          </View>
        </React.Fragment>
    );
  }
};
