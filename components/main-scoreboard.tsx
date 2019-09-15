import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform  } from 'react-native';
import MyDatePicker from './date-picker';
import Schedule from './schedule';
import LineScore from './line-score';
import BaseballService from '../services/baseball_api.service';


export default class MainScoreboard extends React.Component  {
  
  constructor(props){
    super(props);

    const d = new Date();
    d.setDate( d.getDate() - 1 );

    this.state = {
        isLoading: true,
        date: new Date(d),
        schedule: [],
        selectedGame : null
    }
  }

  setSelectedGame =(id, main) => {
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

    BaseballService.getLineScore(this.state.selectedGame.id).then((data) => {
      let newState = Object.assign({}, this.state);
      newState.isLoading = false;
      newState.selectedGame.details = data;
      this.setState(newState);
  
    });
  }

  setDate = (date) => {

    this.setState({date: new Date(date), selectedGame: null}, () => {
      this.getSchedule(); 
    });

  };

  componentDidMount(){
   this.getSchedule(); 
  }

  getSchedule(){

    let newState = Object.assign({}, this.state);
    newState.isLoading = true;
    newState.selectedGame = null;
    this.setState(newState);

    var dd = String(this.state.date.getDate());
    var mm = String(this.state.date.getMonth() + 1);
    var yyyy = this.state.date.getFullYear();

    BaseballService.getSchedule(yyyy, mm, dd).then((data)=>{
      
      let newState = Object.assign({}, this.state);
      newState.isLoading = false;
      newState.selectedGame = null;
      newState.schedule = data;
      this.setState(newState);

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
      body = <Schedule dataSource={this.state.schedule} isLoading={this.state.isLoading} setSelectedGame={this.setSelectedGame} />
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
