const initialState = {
    globalmessageHandle: null,
}

export const patientReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {

      case 'HANDLE_MODAL_MESSAGE':
        return {
          ...state,
          globalmessageHandle: payload
      }         
      case 'HANDLE_CANCEL_REQUEST':
        return {
          ...state,
          HandleCancelationRequest: payload
      }         
      
      
      
    default:
      return state
  }
}

export default patientReducer
