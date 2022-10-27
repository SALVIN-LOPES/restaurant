
export default (userState={auth:null},action) => {
    switch(action.type) {
        case 'SIGN_UP':
            return {...userState , auth:action.payload};
        case 'SIGN_IN':
            return userState;
        default:
            return userState;
    }
}