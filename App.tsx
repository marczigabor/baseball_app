import React, { Component } from 'react';
import Schedule from './components/schedule';
import MyDatePicker from './components/date-picker';


export default class App extends Component {

  constructor(props) {
    super(props);

    const d = new Date();
    d.setDate( d.getDate() - 1 );

    this.state = {
      date: new Date(d)
    }
  }

  setDate = (date) => {
    console.log(date);
    this.setState({date: new Date(date)})
  };

  render(){
    return (
      <React.Fragment>
        <MyDatePicker date={this.state.date} setDate={this.setDate}/>
        <Schedule date={this.state.date}/>
      </React.Fragment>
    );
  }
}
//export default App;
