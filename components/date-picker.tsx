import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { View, ImageBackground } from 'react-native'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:this.getDate()}
  }

  getDate(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;

  }

  render(){
    return (
        <View style={{height: 150}}>
        <ImageBackground source={require('./../assets/header.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex: 1, 
                alignItems: 'center',
                justifyContent: 'center', 
                //backgroundColor: 'lightblue'
            }}>
        <DatePicker
            style={{width: 150, backgroundColor:'white'}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1016-05-01"
            maxDate="3016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateIcon: {
                    display:'none'
            },
            }}
            onDateChange={(date) => {this.setState({date: date})}}
        />
        </View>
        </ImageBackground>
      </View>
    )
  }
}