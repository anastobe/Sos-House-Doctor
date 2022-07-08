export const formDataFirst = data => {
  return {
    type: 'FORM_DATA_FIRST',
    payload: data
  }
}

export const setUserDetail = data => {
  console.log(" setUserDetail data==>",data)
  return {
    type: 'SETUSERDETAIL',
    payload: data
  }
}

export const setAuthToken = data => {
  console.log(" setAuthToken data==>",data)
  return {
    type: 'SETAUTHTOKEN',
    payload: data
  }
}


export const HandleModal = (data) => {
  return {
    type: 'OPEN_MODAL',
    payload: data
  }
}

export const HandleModalSignOut = (data) => {
  return {
    type: 'OPEN_MODAL_SIGNOUT',
    payload: data
  }
}

export const HandleCalander = (data) => {
  console.log("data==>",data);
  return {
    type: 'OPEN_MODAL_CALANDER',
    payload: data
  }
}

export const HandleModalSentEmail = (data) => {
  console.log("HandleModalSentEmail",data);
  return {
    type: 'OPEN_MODAL_SENT_EMAIL',
    payload: data
  }
}

export const selectedCountry = (data) => {
  return {
    type: 'SELECTED_COUNTRY',
    payload: data
  }
}

export const selectedState = (data) => {
  return {
    type: 'SELECTED_STATE',
    payload: data
  }
}

export const selectedCity = (data) => {
  return {
    type: 'SELECTED_CITY',
    payload: data
  }
}

export const selectedSpeciality = (data) => {
  return {
    type: 'SELECTED_SPECIALITY',
    payload: data
  }
}

export const selectedAge = (data) => {
  return {
    type: 'SELECTED_AGE',
    payload: data
  }
}

export const selectedSymptoms = (data) => {
  return {
    type: 'SELECTED_SYMPTOMS',
    payload: data
  }
}

export const conditionsForNextPage = (data) => {
  return {
    type: 'CONDITIONS',
    payload: data
  }
}

export const signupPageData = (data) => {
  return {
    type: 'SIGNUP_DATA',
    payload: data
  }
}

export const conditionsForNotification = (data) => {
  return {
    type: 'LOGIN_DATA',
    payload: data
  }
}

export const HandleModalMessage = (data) => {
  return {
    type: 'OPEN_MODAL_MESSAGE',
    payload: data
  }
}