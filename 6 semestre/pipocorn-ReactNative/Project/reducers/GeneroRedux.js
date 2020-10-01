export default function(state={}, action){
    switch(action.type){
        case "GENERO_FETCH":
         
            return {
                ...state,
                generoList:action.payload
            }

            default:
                return state
    }
}