export const HandleModalMessage = (data) => {
    return {
      type: 'HANDLE_MODAL_MESSAGE',
      payload: data
    }
  }


export const HandleCancelationRequest = (data) => {
    return {
      type: 'HANDLE_CANCEL_REQUEST',
      payload: data
    }
  }


  