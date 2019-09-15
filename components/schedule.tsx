import React from 'react';
import { Image, ActivityIndicator, Text, View, StyleSheet, ScrollView, Platform, TouchableOpacity  } from 'react-native';


export default class Schedule extends React.Component  {
  
  static get url(){
    return "https://prod-gameday.mlbstatic.com/responsive-gameday-assets/1.2.0/images/team_logos/team_logos@2x.png"
  }

  constructor(props){
    super(props);
  
  }

  onGamePress(id, item){
    this.props.setSelectedGame(id, item);
  }

  render(){

    if(this.props.isLoading){
      return(
        <View style={{flex: 1, padding: 20, alignContent:'center'}}>
          <ActivityIndicator/>
        </View>
      )
    }else {

      return(

        <View style = { styles.container }>
        <ScrollView style={{flex: 1, paddingTop:20}}>
        {
          this.props.dataSource.map(( item ) =>
          (
            <View key = { item.id }>
              <TouchableOpacity onPress={()=> this.onGamePress(item.id, item) }>

                  <View style = { styles.rowContainer }>
                    <Text style = { styles.imageContainer }>   
                      <Image style={{ height: 30, width: 30}} source={imageMap[item.awayScore.id.toString()]} />
                    </Text>
                    <Text style = { styles.textLeft }>{ item.awayScore.name}</Text>
                    <Text style = { styles.textRight }>{ item.awayScore.runs}</Text>
                  </View>

                  <View style = { styles.rowContainer }>
                    <Text style = { styles.imageContainer }>   
                      <Image style={{ width: 30, height: 30}} source={imageMap[item.homeScore.id.toString()]} />
                    </Text>
                    <Text style = { styles.textLeft }>{ item.homeScore.name}</Text>
                    <Text style = { styles.textRight }>{ item.homeScore.runs}</Text>
                  </View>

                </TouchableOpacity>
                <View style = { styles.separator }/>
            </View>
          ))
        }
      </ScrollView>
        </View>
      );
    }
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
      justifyContent: 'space-between',
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
      padding: 12,
      marginLeft: 40
    },

    textRight:
    {
      fontSize: 18,
      color: 'black',
      padding: 12,
      marginRight: 40
    },

    imageContainer: {
      padding: 0,
      marginLeft: 20,
      marginTop: 2
    }
    
  });


  //react native does not support dynamic image concatenating
  var imageMap = {
    "108": require('./../assets/logo/108.png'),
    "109":require('./../assets/logo/109.png'),
    "110":require('./../assets/logo/110.png'),
    "111":require('./../assets/logo/111.png'),
    "112":require('./../assets/logo/112.png'),
    "113":require('./../assets/logo/113.png'),
    "114":require('./../assets/logo/114.png'),
    "115":require('./../assets/logo/115.png'),
    "116":require('./../assets/logo/116.png'),
    "117":require('./../assets/logo/117.png'),
    "118":require('./../assets/logo/118.png'),
    "119":require('./../assets/logo/119.png'),
    "120":require('./../assets/logo/120.png'),
    "121":require('./../assets/logo/121.png'),
    "133":require('./../assets/logo/133.png'),
    "1330":require('./../assets/logo/1330.png'),
    "1331":require('./../assets/logo/1331.png'),
    "134":require('./../assets/logo/134.png'),
    "135":require('./../assets/logo/135.png'),
    "136":require('./../assets/logo/136.png'),
    "137":require('./../assets/logo/137.png'),
    "138":require('./../assets/logo/138.png'),
    "139":require('./../assets/logo/139.png'),
    "140":require('./../assets/logo/140.png'),
    "141":require('./../assets/logo/141.png'),
    "142":require('./../assets/logo/142.png'),
    "143":require('./../assets/logo/143.png'),
    "144":require('./../assets/logo/144.png'),
    "145":require('./../assets/logo/145.png'),
    "146":require('./../assets/logo/146.png'),
    "147":require('./../assets/logo/147.png'),
    "158":require('./../assets/logo/158.png'),
    "159":require('./../assets/logo/159.png'),
    "160":require('./../assets/logo/160.png'),
    "241":require('./../assets/logo/241.png')
  }
