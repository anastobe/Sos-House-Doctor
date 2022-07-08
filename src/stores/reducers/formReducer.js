const initialState = {
      //  formDataFirst: null,
      modalStatus: null, 
      country: null
  }
  
  export const formReducer = (state = initialState, action) => {
    const { payload } = action

    switch (action.type) {


        case 'OPEN_MODAL':
          return {
            ...state,
            modalStatus: payload
        }   
        case 'SELECTED_COUNTRY':
          return {
            ...state,
            countrys: payload
        }   
        case 'SELECTED_AGE':
          return {
            ...state,
            age: payload
        } 
        case 'SELECTED_SYMPTOMS':
          return {
            ...state,
            symptoms: payload
        } 
        case 'SELECTED_STATE':
          return {
            ...state,
            states: payload
        }   
        case 'SELECTED_CITY':
          return {
            ...state,
            citys: payload
        }   
        case 'SELECTED_SPECIALITY':
          return {
            ...state,
            specialitys: payload
        }   
        case 'CONDITIONS':
          return {
            ...state,
            conditions: payload
        }         
        case 'SIGNUP_DATA':
          return {
            ...state,
            signup_data: payload
        } 
        case 'OPEN_MODAL_SIGNOUT':
          return {
            ...state,
            modalSignoutStatus: payload
        } 
        case 'OPEN_MODAL_SENT_EMAIL':
          return {
            ...state,
            sentEmailModalStatus: payload
        } 
        case 'OPEN_MODAL_CALANDER':
          return {
            ...state,
            modalCalanderStatus: payload
        } 
        case 'LOGIN_DATA':
          return {
            ...state,
            noticationCondition: payload
        } 
        case 'OPEN_MODAL_MESSAGE':
          return {
            ...state,
            globalmessageHandle: payload
        }         
        

        
      default:
        return state
    }
  }
  
  export default formReducer
  