export const postReducer = (state = null, action) => {
    switch(action.type){
        case "ADD_POST":
            return {...action.payload.data} ;
        default:
            return state;
    }
};