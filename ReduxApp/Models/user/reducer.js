
// in reducer we change the state of action and define how it will modify the state 

//import the actions we require to change data

import {INFO_REQUEST_SUCCESS} from './actions';

//initialise the state(how it looks at opening the page)

const initialState = {
  id: '1',
  name: 'Simran',
  email: 'simi@gmail.com',
  phoneno :'7051893904',
};

// defining the reducer with const, state  will initialised to initialstate and the action parameter is [assed

const reducer = (state = initialState, action) => {
  
  //switch case if its sucess then it will return value otherwise the default state
  
  switch (action.type) {
    case INFO_REQUEST_SUCCESS: {
      const {id, name, email,phoneno} = action.payload;

      return {
        id,
        name,
        email,
        phoneno
      };
    }
      
      //default state
      
    default:
      return state;
  }
};
//exporting the reducer so that can be used in the store 
export {reducer};
