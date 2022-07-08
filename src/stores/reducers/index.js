import { combineReducers } from 'redux'
import {formReducer} from './formReducer'
import {patientReducer} from './patientReducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  formReducer,
  patientReducer
  
})

export default reducers
