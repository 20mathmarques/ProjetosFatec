export default function(state={}, action){
    switch(action.type){
        case "FILMES_FETCH":
         
            return {
                ...state,
                filmesList:action.payload
            }

            default:
                return state
    }
}