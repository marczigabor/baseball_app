import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { View, ImageBackground, StyleSheet, Platform } from 'react-native'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {date:this.getDate()}
  }

  getDate(){

    var today = this.props.date || new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;

  }

  render(){
    return (
        <View style={styles.container}>
        <ImageBackground source={require('./../assets/header.jpg')} style={styles.backgroundImage}>
            <View style={ styles.innnerContainer}>
        <DatePicker
            style={styles.datePicker}
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
            onDateChange={(date) => {
                this.setState({date: date});
                this.props.setDate(date);
            }}
        />
        </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    innnerContainer:
    {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },

    backgroundImage: {
      width: '100%', 
      height: '100%'      
    },

    datePicker:
    {
      width: 150, 
      backgroundColor:'white'      
    }
  }
)