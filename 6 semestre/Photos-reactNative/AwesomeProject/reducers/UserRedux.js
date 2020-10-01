

export default function (state={}, action){
    switch(action.type){
        case "PHOTO_FETCH":
            return {
                ...state,
                userList:action.payload

            }

            default:
                return state
    }
}