export const usersReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_USERS":
            return [ ...action.payload.data ];
        default:
            return state;
    }
};