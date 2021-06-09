import Types from './actionTypes';

const Actions = {

    addUser: (user) => ({ type: Types.ADD_USER, payload: { user } }),
  
    formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status }}),
  
    loginUser: (user) => ({ type: Types.LOGIN, payload: { user } }),

    signUp: (newUser) => ({type: Types.SIGNUP, payload: {newUser}}),
}

export default Actions;