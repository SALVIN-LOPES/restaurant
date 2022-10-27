import * as api from '../api/index';

// Action Creator
export const signup = (user,navigate) => async (dispatch) => {

    try {
        const {data} = await api.signup(user);
        dispatch({type:'SIGN_UP' , payload:data});
        navigate('/login');
    } catch (error) {
        console.log("Redux Action Creator signup: "+error.message);
    }

}
export const signin = (user,navigate) => async (dispatch)=>{
    try {
        const {data} = await api.signin(user);
        dispatch({type:'SIGN_IN' , payload:data});
        navigate('/');
    } catch (error) {
        console.log("Redux Action Creator signin: "+error.message);
    }
}