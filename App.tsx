import React from 'react';
import Schedule from './components/schedule';
import MyDatePicker from './components/date-picker';


const App = (props) => {
  return (
    <React.Fragment>
      <MyDatePicker/>
      <Schedule />
    </React.Fragment>
  );
}
export default App;
