export default class BaseballService {

    static get baseUrl() {
        return "http://192.168.0.16:8080/api/v1/baseball";
    }

    static getSchedule = (yyyy, mm, dd) => {

        return fetch(`${BaseballService.baseUrl}/schedule?year=${yyyy}&month=${mm}&day=${dd}`)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.scores;
        })
        .catch((error) =>{
            console.error(error);
        });
    }

    static getLineScore = (id) => {

        return fetch(`${BaseballService.baseUrl}/linescore?game_id=${id}`)
        .then((response) => response.json())
        .then((responseJson) => {
              return responseJson;
        })
        .catch((error) =>{
          console.error(error);
        });
  
    }

}